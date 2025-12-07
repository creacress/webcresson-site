// app/analytics/GTMPageView.tsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export function GTMPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    const url =
      pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

    window.dataLayer.push({
      event: "page_view",
      page_path: pathname,
      page_location: url,
    });
  }, [pathname, searchParams]);

  return null;
}
