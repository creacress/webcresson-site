// components/seasonal/SnowOverlay.tsx
"use client";

import type { CSSProperties } from "react";

interface SnowOverlayProps {
  density?: number; // nombre de flocons
}

export function SnowOverlay({ density = 60 }: SnowOverlayProps) {
  const flakes = Array.from({ length: density });

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
