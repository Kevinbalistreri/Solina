import React from "react";
import { motion } from "framer-motion";

export default function FuturisticEye() {
  return (
    <div className="relative w-52 h-52 flex items-center justify-center mb-8">
      {/* Occhio centrale */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_50px_15px_rgba(59,130,246,0.6)]"
      ></motion.div>

      {/* Cerchi concentrici */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1.3, 1.6, 1.3] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute w-40 h-40 rounded-full border border-blue-500/30"
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1.6, 1.9, 1.6] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute w-56 h-56 rounded-full border border-cyan-500/20"
      ></motion.div>

      {/* Glow pulsante */}
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-cyan-400 blur-2xl opacity-30"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}
