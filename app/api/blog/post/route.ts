// app/api/blog/post/route.ts
import { NextResponse } from "next/server";

export const revalidate = 60;

type N8nDetailResponse =
  | { found: boolean; post?: any }
  | any[]
  | { post?: any; found?: boolean };

function normalizePost(payload: N8nDetailResponse): { found: boolean; post?: any } {
  if (Array.isArray(payload)) {
    const first = payload[0];
    if (first && typeof first.found === "boolean") return first;
    if (first && first.post) return { found: true, post: first.post };
    return { found: false };
  }
  if (payload && typeof (payload as any).found === "boolean") return payload as any;
  if (payload && (payload as any).post) return { found: true, post: (payload as any).post };
  return { found: false };
}

export async function GET(req: Request) {
  const url = process.env.BLOG_API_DETAIL_URL;
  if (!url) {
    return NextResponse.json({ found: false, error: "BLOG_API_DETAIL_URL missing" }, { status: 500 });
  }

  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  if (!slug) return NextResponse.json({ found: false, error: "Missing slug" }, { status: 400 });

  try {
    const res = await fetch(`${url}?slug=${encodeURIComponent(slug)}`, {
      headers: { Accept: "application/json" },
      next: { revalidate },
    });

    if (!res.ok) {
      return NextResponse.json({ found: false, error: `Upstream ${res.status}` }, { status: 502 });
    }

    const payload = (await res.json()) as N8nDetailResponse;
    const out = normalizePost(payload);

    return NextResponse.json(out, { status: out.found ? 200 : 404 });
  } catch (e: any) {
    return NextResponse.json(
      { found: false, error: e?.message ?? "Fetch error" },
      { status: 502 }
    );
  }
}