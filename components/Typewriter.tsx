"use client";

import { useState, useEffect } from "react";

const roles = [
  "Frontend Engineer",
  "AI-Powered App Builder",
  "Meta Certified Developer",
  "Tech Entrepreneur",
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing");

  useEffect(() => {
    const role = roles[index];

    if (phase === "typing") {
      if (text.length < role.length) {
        const t = setTimeout(() => setText(role.slice(0, text.length + 1)), 65);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), 2200);
        return () => clearTimeout(t);
      }
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setIndex((prev) => (prev + 1) % roles.length);
        setPhase("typing");
      }
    }
  }, [text, phase, index]);

  return (
    <span>
      <span className="text-[#00e5ff]">{text}</span>
      <span className="inline-block w-[2px] h-[1em] bg-[#00e5ff] ml-[2px] align-middle animate-pulse" />
    </span>
  );
}
