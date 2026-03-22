"use client";

import { useRef, useEffect } from "react";

// Seeded PRNG (mulberry32) for deterministic node placement
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Node {
  x: number;
  y: number;
}

// Navy-background sections identified by data attribute
const NAVY_SECTION_IDS = [
  "hero",
  "sectors",
  "ceo-quote",
];

export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function getNavyZones(): [number, number][] {
      const zones: [number, number][] = [];

      // Find navy sections by data-section attribute
      for (const id of NAVY_SECTION_IDS) {
        const el = document.querySelector(`[data-section="${id}"]`);
        if (el) {
          const rect = el.getBoundingClientRect();
          zones.push([
            rect.top + window.scrollY,
            rect.bottom + window.scrollY,
          ]);
        }
      }

      // Footer
      const footer = document.querySelector("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        zones.push([
          rect.top + window.scrollY,
          rect.bottom + window.scrollY,
        ]);
      }

      return zones;
    }

    function isInNavyZone(y: number, zones: [number, number][]): boolean {
      for (const [top, bottom] of zones) {
        if (y >= top && y <= bottom) return true;
      }
      return false;
    }

    function generateNodes(width: number, height: number): Node[] {
      const rng = mulberry32(42);
      const nodes: Node[] = [];
      const spacing = 200;
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Keep ~50% of positions
          if (rng() > 0.5) continue;

          const x = col * spacing + (rng() - 0.5) * spacing * 0.8;
          const y = row * spacing + (rng() - 0.5) * spacing * 0.8;

          if (x >= 0 && x <= width && y >= 0 && y <= height) {
            nodes.push({ x, y });
          }
        }
      }

      return nodes;
    }

    function draw() {
      const dpr = window.devicePixelRatio || 1;
      const pageHeight = document.documentElement.scrollHeight;
      const pageWidth = document.documentElement.clientWidth;

      canvas!.width = pageWidth * dpr;
      canvas!.height = pageHeight * dpr;
      canvas!.style.width = `${pageWidth}px`;
      canvas!.style.height = `${pageHeight}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx!.clearRect(0, 0, pageWidth, pageHeight);

      const navyZones = getNavyZones();
      const nodes = generateNodes(pageWidth, pageHeight);
      const maxDist = 280;

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const midY = (nodes[i].y + nodes[j].y) / 2;
            const navy = isInNavyZone(midY, navyZones);
            const baseAlpha = (1 - dist / maxDist) * 0.12;

            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = navy
              ? `rgba(255, 255, 255, ${baseAlpha})`
              : `rgba(104, 197, 178, ${baseAlpha})`;
            ctx!.lineWidth = 0.8;
            ctx!.stroke();
          }
        }
      }

      // Draw dots
      for (const node of nodes) {
        const navy = isInNavyZone(node.y, navyZones);
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx!.fillStyle = navy
          ? "rgba(255, 255, 255, 0.2)"
          : "rgba(104, 197, 178, 0.2)";
        ctx!.fill();
      }
    }

    draw();

    // Redraw on resize
    let resizeTimer: ReturnType<typeof setTimeout>;
    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(draw, 150);
    }
    window.addEventListener("resize", handleResize);

    // Redraw when body height changes (e.g. dynamic content)
    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(draw, 150);
    });
    ro.observe(document.body);

    return () => {
      window.removeEventListener("resize", handleResize);
      ro.disconnect();
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-[2]"
      aria-hidden="true"
    />
  );
}
