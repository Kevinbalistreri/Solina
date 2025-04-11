import React from "react";
import { motion } from "framer-motion";

export default function TechEye() {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="w-48 h-48 mb-6"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <defs>
        <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="80" ry="40" fill="url(#eyeGlow)" />
      <circle
        cx="100"
        cy="100"
        r="20"
        fill="#3b82f6"
        className="animate-ping"
      />
      <circle cx="100" cy="100" r="8" fill="white" />
    </motion.svg>
  );
}