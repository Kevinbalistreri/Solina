import { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <motion.img
        src="/solina-splash.png"
        alt="Solina Splash"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full max-w-md mb-8"
      />
    </div>
  );
}