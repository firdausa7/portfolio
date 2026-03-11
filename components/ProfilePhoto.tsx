"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";

// ─── Sizes ────────────────────────────────────────────────────────────────────

const OUTER_RING = 8;  // spinning conic gradient ring width (px)
const GAP        = 3;  // dark gap between outer ring and inner border (px)
const INNER_RING = 3;  // static inner cyan border (px)
const PAD        = OUTER_RING + GAP + INNER_RING; // total inset per side

// ─── Props ────────────────────────────────────────────────────────────────────

interface ProfilePhotoProps {
  src?: string;
  alt?: string;
  /** Photo diameter in px. Default 280 desktop / 220 mobile handled via CSS. */
  size?: number;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProfilePhoto({
  src = "/myhero.jpeg",
  alt = "Firdausa Dahir Salat",
  size = 280,
}: ProfilePhotoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch]         = useState(false);
  const [prefersReduced, setReduced]  = useState(false);
  const [isHovered, setIsHovered]     = useState(false);

  // ── Detect environment capabilities ──────────────────────────────────────
  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const canAnimate = !prefersReduced;
  const canTilt    = canAnimate && !isTouch;

  // ── Tilt (spring-based) ───────────────────────────────────────────────────
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [12, -12]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 15,
  });

  // ── Light reflection ──────────────────────────────────────────────────────
  const lightGrad    = useMotionValue("radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, transparent 60%)");
  const lightOpacity = useMotionValue(0);
  const lightOpacitySpring = useSpring(lightOpacity, { stiffness: 120, damping: 20 });

  // ── Mouse handlers ────────────────────────────────────────────────────────
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current || !canTilt) return;
      const rect = containerRef.current.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width  - 0.5; // –0.5 → 0.5
      const ny = (e.clientY - rect.top)  / rect.height - 0.5;
      rawX.set(nx);
      rawY.set(ny);

      const px = ((e.clientX - rect.left) / rect.width)  * 100;
      const py = ((e.clientY - rect.top)  / rect.height) * 100;
      lightGrad.set(
        `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.35) 0%, transparent 65%)`
      );
      lightOpacity.set(1);
    },
    [canTilt, rawX, rawY, lightGrad, lightOpacity]
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
    lightOpacity.set(0);
    setIsHovered(false);
  }, [rawX, rawY, lightOpacity]);

  // ── Dimensions ───────────────────────────────────────────────────────────
  const totalSize = size + PAD * 2;
  const innerInset = OUTER_RING + GAP; // inset for the inner border element

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      style={{ width: totalSize, height: totalSize, perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* ── Float wrapper ───────────────────────────────────────────────── */}
      <motion.div
        className="relative w-full h-full"
        {...(canAnimate
          ? {
              animate: { y: [0, -10, 0] },
              transition: {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.6,
              },
            }
          : {})}
      >
        {/* ── 3D tilt wrapper ─────────────────────────────────────────── */}
        <motion.div
          className="relative w-full h-full"
          style={
            canTilt
              ? {
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }
              : {}
          }
        >
          {/* ═══ LAYER 1 — Spinning conic-gradient ring (behind everything) ══ */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #00e5ff, #0a0a0a 35%, #00e5ff 55%, #0a0a0a 80%, #00e5ff)",
              boxShadow: "0 20px 60px rgba(0, 229, 255, 0.25)",
              zIndex: 0,
            }}
            {...(canAnimate
              ? {
                  animate: { rotate: 360 },
                  transition: { duration: 4, repeat: Infinity, ease: "linear" },
                }
              : {})}
          />

          {/* ═══ LAYER 2 — Dark gap (hides inner portion of ring) ═══════════ */}
          <div
            className="absolute rounded-full"
            style={{
              inset: OUTER_RING,
              background: "#0a0a0a",
              zIndex: 1,
            }}
          />

          {/* ═══ LAYER 3 — Inner cyan border + pulsing glow ═════════════════ */}
          <motion.div
            className="absolute rounded-full overflow-hidden"
            style={{
              inset: innerInset,
              border: `${INNER_RING}px solid rgba(0, 229, 255, ${isHovered ? 1 : 0.6})`,
              transition: "border-color 0.3s ease",
              zIndex: 2,
            }}
            {...(canAnimate
              ? {
                  animate: {
                    boxShadow: [
                      "0 0 14px rgba(0,229,255,0.6)",
                      "0 0 36px rgba(0,229,255,1)",
                      "0 0 14px rgba(0,229,255,0.6)",
                    ],
                  },
                  transition: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
              : {})}
          >
            {/* ─ Photo cinematic reveal ─────────────────────────────────── */}
            <motion.div
              className="absolute inset-0"
              {...(canAnimate
                ? {
                    initial: {
                      opacity: 0,
                      scale: 0.92,
                      filter: "grayscale(1) blur(4px)",
                    },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      filter: "grayscale(0) blur(0px)",
                    },
                    transition: { duration: 1.4, ease: "easeOut" },
                  }
                : {})}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-center"
                priority
              />

              {/* ─ Shine sweep (fires once after reveal) ─────────────── */}
              {canAnimate && (
                <motion.div
                  className="absolute top-0 bottom-0 pointer-events-none"
                  style={{
                    width: "55%",
                    background:
                      "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.55) 50%, transparent 75%)",
                    zIndex: 10,
                  }}
                  initial={{ x: "-100%" }}
                  animate={{ x: "220%" }}
                  transition={{ delay: 1.25, duration: 0.65, ease: "linear" }}
                />
              )}

              {/* ─ Dynamic cursor light reflection ───────────────────── */}
              {canTilt && (
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-full"
                  style={{
                    background: lightGrad,
                    opacity: lightOpacitySpring,
                    zIndex: 5,
                  }}
                />
              )}
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>
    </div>
  );
}
