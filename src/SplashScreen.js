import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Immagine Cinematografica */}
      <motion.img
  src="/solina-splash.png"
  alt="Solina Splash"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
  className="absolute inset-0 w-full h-full object-cover"
  loading="eager"
/>

      {/* Sovrascritta SOLINA */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="relative z-10 text-5xl md:text-7xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-glow drop-shadow-[0_0_30px_#3b82f6] text-center"
      >
        S O L I N A
      </motion.h1>
    </div>
  );
}