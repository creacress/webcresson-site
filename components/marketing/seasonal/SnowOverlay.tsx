"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";

interface SnowOverlayProps {
  density?: number; // densité max desktop
}

export function SnowOverlay({ density = 60 }: SnowOverlayProps) {
  const [count, setCount] = useState(density);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mqMobile = window.matchMedia("(max-width: 768px)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mqReduced.matches) {
      setCount(0);
      return;
    }

    // ex : 20 flocons max sur mobile
    setCount(mqMobile.matches ? Math.min(20, density) : density);
  }, [density]);

  const flakes = useMemo(() => Array.from({ length: count }), [count]);

  if (count === 0) return null;

  return (
    <div className="snow-overlay">
      {flakes.map((_, i) => {
        const style: CSSProperties = {
          left: `${Math.random() * 100}%`,
          animationDuration: `${8 + Math.random() * 8}s`,
          animationDelay: `${Math.random() * -15}s`,
          ["--snow-drift" as any]: `${-40 + Math.random() * 80}px`,
          opacity: 0.35 + Math.random() * 0.4,
          width: `${4 + Math.random() * 4}px`,
          height: `${4 + Math.random() * 4}px`,
        };

        return <span key={i} className="snowflake" style={style} />;
      })}
    </div>
  );
}
