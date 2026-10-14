
"use client";

import { useEffect, useState } from "react";

type CursorParticle = {
  id: number;
  x: number;
  y: number;
  symbol: string;
};

export default function CuteCursor() {
  const [particles, setParticles] = useState<CursorParticle[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const updateDevice = () => setIsDesktop(media.matches);

    updateDevice();
    media.addEventListener("change", updateDevice);

    let lastTime = 0;
    let nextId = 0;

    const symbols = ["🐾", "♡", "🐾", "✿"];
    
    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();

      // Supaya partikel tidak terlalu banyak
      if (now - lastTime < 90) return;
      lastTime = now;

      const particle: CursorParticle = {
        id: nextId++,
        x: event.clientX,
        y: event.clientY,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
      };

      setParticles((previous) => [...previous.slice(-13), particle]);

      window.setTimeout(() => {
        setParticles((previous) =>
          previous.filter((item) => item.id !== particle.id)
        );
      }, 700);
    };

    if (media.matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      media.removeEventListener("change", updateDevice);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="cute-cursor-layer" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="cute-cursor-particle"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        >
          {particle.symbol}
        </span>
      ))}
    </div>
  );
}
