import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Immagine Cinematografica con effetto fade-in */}
      <motion.img
        src="/splash-screen-final.png" // <-- immagine aggiornata
        alt="Splash"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
    </div>
  );
}