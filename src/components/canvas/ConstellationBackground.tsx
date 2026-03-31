"use client";

import { useRef, useEffect } from "react";

// Zigzag X positions (% of viewport width) — stay away from center to avoid title overlap
const WAYPOINT_X = [0.12, 0.85, 0.15, 0.82, 0.1, 0.88, 0.14, 0.84, 0.12];

export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const waypointsRef = useRef<{ x: number; y: number }[]>([]);
  const navyZonesRef = useRef<[number, number][]>([]);
  const tickingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const w = window.innerWidth;
      const vh = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = vh * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${vh}px`;
    }

    function measure() {
      const w = window.innerWidth;
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("#main-content > section");
      const waypoints: { x: number; y: number }[] = [];
      const navyZones: [number, number][] = [];

      if (sections.length === 0) return;

      // Hero navy zone
      const heroRect = sections[0].getBoundingClientRect();
      const heroBottom = heroRect.bottom + scrollY;
      navyZones.push([heroRect.top + scrollY, heroBottom]);

      // Entry: off-screen left at hero bottom
      waypoints.push({ x: -40, y: heroBottom });

      // Waypoint per section after hero — dot sits above the title text
      for (let i = 1; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        const top = rect.top + scrollY;
        const bottom = rect.bottom + scrollY;
        const isNavy = section.classList.contains("bg-navy");
        if (isNavy) navyZones.push([top, bottom]);

        const xIdx = Math.min(i - 1, WAYPOINT_X.length - 1);
        // Clamp X so dot stays at least 30px from edges on any screen
        const rawX = w * WAYPOINT_X[xIdx];
        const x = Math.max(30, Math.min(w - 30, rawX));

        waypoints.push({
          x,
          // Position dot in the top padding of each section, above label/title text
          y: top + 40,
        });
      }

      // Exit: off-screen right at footer
      const footer = document.querySelector("footer");
      if (footer) {
        const fRect = footer.getBoundingClientRect();
        const fTop = fRect.top + scrollY;
        navyZones.push([fTop, fRect.bottom + scrollY]);
        waypoints.push({ x: w + 40, y: fTop });
      }

      waypointsRef.current = waypoints;
      navyZonesRef.current = navyZones;
    }

    // Smooth color blend: teal on cream, white on navy
    function navyFactor(y: number): number {
      const blend = 80;
      let factor = 0;
      for (const [top, bottom] of navyZonesRef.current) {
        if (y >= top + blend && y <= bottom - blend) return 1;
        if (y >= top - blend && y < top + blend) {
          factor = Math.max(factor, (y - (top - blend)) / (blend * 2));
        }
        if (y > bottom - blend && y <= bottom + blend) {
          factor = Math.max(factor, 1 - (y - (bottom - blend)) / (blend * 2));
        }
      }
      return factor;
    }

    function lineColor(y: number, alpha: number): string {
      const f = navyFactor(y);
      const r = Math.round(104 + (255 - 104) * f);
      const g = Math.round(197 + (255 - 197) * f);
      const b = Math.round(178 + (255 - 178) * f);
      // Reduce opacity on navy sections, keep cream as-is
      const adjusted = alpha * (1 - f * 0.5);
      return `rgba(${r}, ${g}, ${b}, ${adjusted})`;
    }

    function draw() {
      const w = window.innerWidth;
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      const waypoints = waypointsRef.current;

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, w, vh);

      if (waypoints.length < 2) return;

      const frontier = scrollY + vh * 0.75;

      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";
      ctx!.lineWidth = 1.5;

      for (let i = 1; i < waypoints.length; i++) {
        const from = waypoints[i - 1];
        const to = waypoints[i];

        if (from.y > frontier) break;

        let endX = to.x;
        let endY = to.y;
        let reachedDot = true;

        if (to.y > frontier) {
          const t = (frontier - from.y) / (to.y - from.y);
          endX = from.x + (to.x - from.x) * t;
          endY = frontier;
          reachedDot = false;
        }

        // Draw full segment — uniform opacity
        const midY = (from.y + endY) / 2;
        ctx!.beginPath();
        ctx!.moveTo(from.x, from.y - scrollY);
        ctx!.lineTo(endX, endY - scrollY);
        ctx!.strokeStyle = lineColor(midY, 0.15);
        ctx!.stroke();

        // Bigger dot at section waypoint (skip entry & exit)
        if (reachedDot && i > 0 && i < waypoints.length - 1) {
          ctx!.beginPath();
          ctx!.arc(to.x, to.y - scrollY, 7, 0, Math.PI * 2);
          ctx!.fillStyle = lineColor(to.y, 0.3);
          ctx!.fill();
        }
      }
    }

    function onScroll() {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(() => {
          draw();
          tickingRef.current = false;
        });
      }
    }

    function setup() {
      resize();
      measure();
      draw();
    }

    setup();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", setup);

    const ro = new ResizeObserver(() => {
      measure();
      draw();
    });
    ro.observe(document.body);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setup);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
}
