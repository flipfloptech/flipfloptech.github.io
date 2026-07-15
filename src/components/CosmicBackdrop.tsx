"use client";

import { useEffect, useRef } from "react";

type Layer = {
  el: HTMLElement;
  scroll: number;
  mouse: number;
  baseScale?: number;
};

/**
 * Deep-space backdrop with multi-depth parallax (scroll + pointer).
 * Layers move at different rates for a nebula / starfield depth feel.
 */
export function CosmicBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const nebula = root.querySelector<HTMLElement>(".cosmic-backdrop__nebula");
    const stars1 = root.querySelector<HTMLElement>(".cosmic-backdrop__stars");
    const stars2 = root.querySelector<HTMLElement>(".cosmic-backdrop__stars-2");
    const stars3 = root.querySelector<HTMLElement>(".cosmic-backdrop__stars-3");
    const haze = root.querySelector<HTMLElement>(".cosmic-backdrop__haze");

    const layers: Layer[] = [
      // deep nebula — slow, large travel
      ...(nebula ? [{ el: nebula, scroll: 0.12, mouse: 18, baseScale: 1.08 }] : []),
      // far stars
      ...(stars1 ? [{ el: stars1, scroll: 0.04, mouse: 6 }] : []),
      // mid stars
      ...(stars2 ? [{ el: stars2, scroll: 0.09, mouse: 12 }] : []),
      // near stars / bright points — fastest
      ...(stars3 ? [{ el: stars3, scroll: 0.16, mouse: 22 }] : []),
      // vignette haze — almost fixed so content stays readable
      ...(haze ? [{ el: haze, scroll: 0.02, mouse: 3 }] : []),
    ];

    let raf = 0;
    let running = true;
    let scrollY = window.scrollY;
    let targetMX = 0;
    let targetMY = 0;
    let mx = 0;
    let my = 0;
    // gentle ambient drift (radians over time)
    let t0 = performance.now();

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const onPointer = (e: PointerEvent) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      targetMX = (e.clientX / w - 0.5) * 2; // -1 … 1
      targetMY = (e.clientY / h - 0.5) * 2;
    };

    const onLeave = () => {
      targetMX = 0;
      targetMY = 0;
    };

    const tick = (now: number) => {
      if (!running) return;

      // ease pointer toward target
      mx += (targetMX - mx) * 0.06;
      my += (targetMY - my) * 0.06;

      const elapsed = (now - t0) / 1000;
      // slow ambient orbit so it never feels frozen
      const driftX = Math.sin(elapsed * 0.07) * 8;
      const driftY = Math.cos(elapsed * 0.05) * 6;

      for (const layer of layers) {
        const px = mx * layer.mouse + driftX * (layer.mouse / 22);
        const py = my * layer.mouse + scrollY * -layer.scroll + driftY * (layer.mouse / 22);
        const scale = layer.baseScale ?? 1;
        layer.el.style.transform = `translate3d(${px.toFixed(2)}px, ${py.toFixed(2)}px, 0) scale(${scale})`;
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={rootRef} className="cosmic-backdrop" aria-hidden="true">
      <div className="cosmic-backdrop__nebula" />
      <div className="cosmic-backdrop__stars" />
      <div className="cosmic-backdrop__stars-2" />
      <div className="cosmic-backdrop__stars-3" />
      <div className="cosmic-backdrop__haze" />
    </div>
  );
}
