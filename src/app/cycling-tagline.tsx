"use client";

import { useState, useEffect } from "react";

const taglines = [
  { line1: "Describe it.", line2: "Your team builds it." },
  { line1: "Not a chatbot.", line2: "A development team." },
  { line1: "Software ships", line2: "while you sleep." },
  { line1: "You have the idea.", line2: "Bonsai has the team." },
];

export function CyclingTagline() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % taglines.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 transition-opacity duration-400"
      style={{
        textShadow: "0 2px 20px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)",
        opacity: visible ? 1 : 0,
      }}
    >
      <span className="text-white">{taglines[index].line1}</span>
      <br />
      <span className="text-cyan-300">{taglines[index].line2}</span>
    </h1>
  );
}
