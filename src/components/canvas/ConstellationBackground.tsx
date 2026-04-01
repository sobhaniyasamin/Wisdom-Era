"use client";

import { useRef, useEffect } from "react";

// Zigzag X positions (% of viewport width) — stay away from center to avoid title overlap
const WAYPOINT_X = [0.12, 0.85, 0.15, 0.82, 0.1, 0.88, 0.14, 0.84, 0.12];

interface Rect {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

// Only text elements — cards/containers stay visible
const CONTENT_SELECTOR = [
  "#main-content h1",
  "#main-content h2",
  "#main-content h3",
  "#main-content h4",
  "#main-content h5",
  "#main-content h6",
  "#main-content p",
  "#main-content blockquote",
].join(", ");

export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const waypointsRef = useRef<{ x: number; y: number }[]>([]);
  const navyZonesRef = useRef<[number, number][]>([]);
  const contentRectsRef = useRef<Rect[]>([]);
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

      // Collect content bounding rects for masking
      const padding = 15;
      const rects: Rect[] = [];
      document.querySelectorAll(CONTENT_SELECTOR).forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width < 80 || r.height < 24) return;
        rects.push({
          left: r.left - padding,
          right: r.right + padding,
          top: r.top + scrollY - padding,
          bottom: r.bottom + scrollY + padding,
        });
      });
      contentRectsRef.current = rects;
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

    // 0 = visible, 1 = fully hidden, smooth fade at edges
    function contentMask(x: number, y: number): number {
      const fadeZone = 40;
      let minDist = Infinity;
      for (const rect of contentRectsRef.current) {
        const dx = Math.max(rect.left - x, 0, x - rect.right);
        const dy = Math.max(rect.top - y, 0, y - rect.bottom);
        if (dx === 0 && dy === 0) return 1;
        minDist = Math.min(minDist, Math.sqrt(dx * dx + dy * dy));
      }
      if (minDist >= fadeZone) return 0;
      const t = 1 - minDist / fadeZone;
      return t * t * (3 - 2 * t);
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

        // Subdivide segment — invisible where it hits content
        const dx = endX - from.x;
        const dy = endY - from.y;
        const segLen = Math.sqrt(dx * dx + dy * dy);
        const step = 8;
        const steps = Math.max(1, Math.ceil(segLen / step));

        for (let s = 0; s < steps; s++) {
          const t0 = s / steps;
          const t1 = (s + 1) / steps;
          const x0 = from.x + dx * t0;
          const y0 = from.y + dy * t0;
          const x1 = from.x + dx * t1;
          const y1 = from.y + dy * t1;
          const mx = (x0 + x1) / 2;
          const my = (y0 + y1) / 2;
          const mask = contentMask(mx, my);
          const alpha = 0.15 * (1 - mask);
          if (alpha < 0.005) continue;

          ctx!.beginPath();
          ctx!.moveTo(x0, y0 - scrollY);
          ctx!.lineTo(x1, y1 - scrollY);
          ctx!.strokeStyle = lineColor(my, alpha);
          ctx!.stroke();
        }

        // Dot at section waypoint (skip entry & exit) — always visible
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
