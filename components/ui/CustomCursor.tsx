// components/ui/CustomCursor.tsx
"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {/* Point central */}
      <div
        className="pointer-events-none fixed z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 dark:bg-slate-100 transition-transform duration-75"
        style={{ left: pos.x, top: pos.y }}
      />
      {/* Anneau */}
      <div
        className="pointer-events-none fixed z-[9998] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-400/60 dark:border-slate-200/50 backdrop-blur-sm transition-transform duration-150"
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  );
}
