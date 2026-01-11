import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

type Incoming = {
  title: string;
  slug: string;
  excerpt?: string;
  content_markdown: string;
  tags?: string[];
  seo?: { meta_title?: string; meta_description?: string };
  cover_prompt?: string;
  status?: "draft" | "published";
  author?: string;
  signature?: string;
};

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

/**
 * Public list (PUBLISHED by default)
 * /api/blog?take=10&cursor=<id>&status=PUBLISHED|DRAFT|ALL
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const take = Math.min(Number(searchParams.get("take") ?? 10), 50);
  const cursor = searchParams.get("cursor");
  const statusParam = (searchParams.get("status") ?? "PUBLISHED").toUpperCase();

  const where =
    statusParam === "ALL"
      ? {}
      : { status: statusParam as "DRAFT" | "PUBLISHED" };

  const posts = await prisma.blogPost.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take,
    ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      tags: true,
      status: true,
      createdAt: true,
    },
  });

  const nextCursor = posts.length === take ? posts[posts.length - 1].id : null;

  return NextResponse.json({ ok: true, posts, nextCursor }, { status: 200 });
}

/**
 * Protected create (n8n)
 */
export async function POST(req: Request) {
  const secret = process.env.WEB_CRESSON_API_TOKEN;
  if (!secret) {
    return NextResponse.json({ error: "Missing server token" }, { status: 500 });
  }

  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
  if (token !== secret) return unauthorized();

  let body: Incoming;
  try {
    body = (await req.json()) as Incoming;
  } catch {
    return badRequest("Invalid JSON body");
  }

  const title = String(body.title ?? "").trim();
  const slug = String(body.slug ?? "").trim();
  const contentMarkdown = String(body.content_markdown ?? "").trim();

  if (!title) return badRequest("Missing title");
  if (!slug) return badRequest("Missing slug");
  if (!contentMarkdown) return badRequest("Missing content_markdown");

  const tags = Array.isArray(body.tags) ? body.tags.map(String).slice(0, 12) : [];
  const status = body.status?.toLowerCase() === "published" ? "PUBLISHED" : "DRAFT";

  try {
    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt: body.excerpt?.trim() || null,
        contentMarkdown,
        tags,
        metaTitle: body.seo?.meta_title?.trim() || null,
        metaDescription: body.seo?.meta_description?.trim() || null,
        coverPrompt: body.cover_prompt?.trim() || null,
        author: body.author?.trim() || null,
        status,
        signature: body.signature?.trim() || null,
      },
      select: { id: true, slug: true, status: true, createdAt: true },
    });

    return NextResponse.json({ ok: true, post }, { status: 201 });
  } catch (e: any) {
    // unique violation: slug/signature
    if (e?.code === "P2002") {
      return NextResponse.json({ ok: true, dedup: true }, { status: 200 });
    }
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}