"use client";

import { useEffect, useRef } from "react";

/**
 * LineField — the signature background.
 *
 * One precise line network on the deep-ink canvas that:
 *  - completes as you scroll: each connection draws itself once the scroll
 *    frontier passes it, threading a spine through one node per section.
 *  - reacts to the mouse: nearby nodes drift toward the cursor with eased,
 *    low-amplitude motion, warping the lines around it.
 *  - stays faint behind content and freezes to a clean static frame when the
 *    user prefers reduced motion.
 */

interface Node {
  bx: number; // base x (px, document space)
  by: number; // base y (px, document space)
  ox: number; // current mouse-warp offset x
  oy: number; // current mouse-warp offset y
  r: number; // radius
  spine: boolean; // anchored to a section
}

interface Edge {
  a: number;
  b: number;
  appear: number; // 0..1 reveal progress
}

export function LineField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Theme-aware stroke color + strength, read from CSS variables
    const accent = { r: 92, g: 200, b: 189 };
    let strength = 1;
    function readTheme() {
      const cs = getComputedStyle(document.documentElement);
      const rgb = cs.getPropertyValue("--line-rgb").trim().split(/\s+/).map(Number);
      if (rgb.length === 3 && rgb.every((n) => !Number.isNaN(n))) {
        accent.r = rgb[0];
        accent.g = rgb[1];
        accent.b = rgb[2];
      }
      const s = parseFloat(cs.getPropertyValue("--line-strength"));
      if (!Number.isNaN(s)) strength = s;
    }
    readTheme();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let docH = 0;
    let nodes: Node[] = [];
    let edges: Edge[] = [];
    let raf = 0;
    let running = true;

    // Pointer in viewport coords (-1000 = off-screen)
    const mouse = { x: -1000, y: -1000 };

    // Deterministic pseudo-random so the field is stable across reloads
    let seed = 20260602;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };

    function resize() {
      w = window.innerWidth;
      const vh = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = vh * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${vh}px`;
    }

    function build() {
      seed = 20260602;
      nodes = [];
      edges = [];
      docH = Math.max(document.body.scrollHeight, window.innerHeight);

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("#main-content > section, footer")
      );

      // Columns the spine threads between (fractions of width)
      const cols = w < 760 ? [0.16, 0.84] : [0.14, 0.5, 0.86];
      const spineIdx: number[] = [];

      sections.forEach((sec, i) => {
        const rect = sec.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const cy = top + rect.height * 0.5;
        const col = cols[i % cols.length];
        // gentle jitter so it never looks mechanical
        const jx = (rand() - 0.5) * w * 0.06;
        nodes.push({ bx: w * col + jx, by: cy, ox: 0, oy: 0, r: 2.6, spine: true });
        spineIdx.push(nodes.length - 1);
      });

      // Connect the spine sequentially — the thread that "completes" on scroll
      for (let i = 1; i < spineIdx.length; i++) {
        edges.push({ a: spineIdx[i - 1], b: spineIdx[i], appear: 0 });
      }

      // Ambient nodes scattered through the document for the network texture
      const ambientCount = Math.round((docH / window.innerHeight) * (w < 760 ? 5 : 9));
      for (let i = 0; i < ambientCount; i++) {
        const nx = 0.06 * w + rand() * 0.88 * w;
        const ny = rand() * docH;
        nodes.push({ bx: nx, by: ny, ox: 0, oy: 0, r: 1.4 + rand() * 1.2, spine: false });
      }

      // Link each ambient node to its nearest spine node + occasionally a neighbour
      for (let i = spineIdx.length; i < nodes.length; i++) {
        let best = -1;
        let bestD = Infinity;
        for (const s of spineIdx) {
          const d = Math.hypot(nodes[i].bx - nodes[s].bx, nodes[i].by - nodes[s].by);
          if (d < bestD) {
            bestD = d;
            best = s;
          }
        }
        if (best >= 0 && bestD < window.innerHeight * 1.1) {
          edges.push({ a: i, b: best, appear: 0 });
        }
        if (i > spineIdx.length && rand() > 0.55) {
          const j = spineIdx.length + Math.floor(rand() * (i - spineIdx.length));
          const d = Math.hypot(nodes[i].bx - nodes[j].bx, nodes[i].by - nodes[j].by);
          if (d < window.innerHeight * 0.6) edges.push({ a: i, b: j, appear: 0 });
        }
      }

      if (reduced) edges.forEach((e) => (e.appear = 1));
    }

    function stroke(x1: number, y1: number, x2: number, y2: number, alpha: number) {
      ctx!.beginPath();
      ctx!.moveTo(x1, y1);
      ctx!.lineTo(x2, y2);
      ctx!.strokeStyle = `rgba(${accent.r},${accent.g},${accent.b},${Math.min(0.7, alpha * strength)})`;
      ctx!.stroke();
    }

    function frame() {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const frontier = scrollY + vh * 0.82; // reveal line

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, w, vh);
      ctx!.lineWidth = 1;
      ctx!.lineCap = "round";

      // Update node mouse-warp offsets (skip when reduced motion)
      if (!reduced) {
        const R = 190;
        for (const n of nodes) {
          const sx = n.bx - 0; // x is fixed (no horizontal scroll)
          const sy = n.by - scrollY;
          let tx = 0;
          let ty = 0;
          if (sy > -120 && sy < vh + 120) {
            const dx = mouse.x - sx;
            const dy = mouse.y - sy;
            const dist = Math.hypot(dx, dy);
            if (dist < R && dist > 0.1) {
              const pull = (1 - dist / R) ** 2 * 26; // calm, low amplitude
              tx = (dx / dist) * pull;
              ty = (dy / dist) * pull;
            }
          }
          n.ox += (tx - n.ox) * 0.08;
          n.oy += (ty - n.oy) * 0.08;
        }
      }

      // Edges
      for (const e of edges) {
        const na = nodes[e.a];
        const nb = nodes[e.b];
        const topY = Math.min(na.by, nb.by);

        if (!reduced) {
          const target = frontier > topY ? 1 : 0;
          e.appear += (target - e.appear) * 0.07;
        }
        if (e.appear < 0.01) continue;

        const ax = na.bx + na.ox;
        const ay = na.by + na.oy - scrollY;
        const bx = nb.bx + nb.ox;
        const by = nb.by + nb.oy - scrollY;

        // cull fully off-screen
        if ((ay < -40 && by < -40) || (ay > vh + 40 && by > vh + 40)) continue;

        const base = na.spine && nb.spine ? 0.32 : 0.16;
        // freshly revealed lines glow briefly via appear easing
        const reveal = e.appear < 0.985 ? 0.18 * (1 - Math.abs(e.appear - 0.6)) : 0;
        // brighten near the cursor
        const mx = (ax + bx) / 2;
        const my = (ay + by) / 2;
        const md = Math.hypot(mouse.x - mx, mouse.y - my);
        const near = md < 160 ? (1 - md / 160) * 0.28 : 0;

        stroke(ax, ay, bx, by, Math.min(0.55, (base + reveal + near) * e.appear));
      }

      // Nodes
      for (const n of nodes) {
        const sy = n.by + n.oy - scrollY;
        if (sy < -20 || sy > vh + 20) continue;
        const sx = n.bx + n.ox;
        const md = Math.hypot(mouse.x - sx, mouse.y - sy);
        const near = md < 160 ? (1 - md / 160) * 0.5 : 0;
        const a = (n.spine ? 0.5 : 0.28) + near;

        ctx!.beginPath();
        ctx!.arc(sx, sy, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${accent.r},${accent.g},${accent.b},${Math.min(0.95, a * strength)})`;
        ctx!.fill();

        if (n.spine) {
          ctx!.beginPath();
          ctx!.arc(sx, sy, n.r + 4, 0, Math.PI * 2);
          ctx!.strokeStyle = `rgba(${accent.r},${accent.g},${accent.b},${(0.12 + near * 0.3) * strength})`;
          ctx!.stroke();
        }
      }

      if (running && !reduced) raf = requestAnimationFrame(frame);
    }

    function onMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    function onLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }
    function onScrollStatic() {
      // reduced-motion: redraw a static frame on scroll only
      if (reduced) frame();
    }
    function onVisibility() {
      running = !document.hidden;
      if (running && !reduced) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(frame);
      }
    }

    let resizeT: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(resizeT);
      resizeT = setTimeout(() => {
        resize();
        build();
        frame();
      }, 150);
    }

    resize();
    build();
    frame();

    function onThemeChange() {
      readTheme();
      frame();
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScrollStatic, { passive: true });
    window.addEventListener("themechange", onThemeChange);
    document.addEventListener("visibilitychange", onVisibility);

    // Recompute geometry when the document height changes (images, fonts, reveals)
    const ro = new ResizeObserver(() => onResize());
    ro.observe(document.body);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      clearTimeout(resizeT);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScrollStatic);
      window.removeEventListener("themechange", onThemeChange);
      document.removeEventListener("visibilitychange", onVisibility);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
