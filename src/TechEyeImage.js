import React from "react";
import { motion } from "framer-motion";

export default function TechEyeImage() {
  return (
    <motion.img
      src="/tech-eye.png"
      alt="Occhio Solina"
      initial={{ scale: 0.95, opacity: 0.8 }}
      animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-72 md:w-96 mb-10 rounded-full shadow-[0_0_40px_#3b82f6] border border-blue-600"
    />
  );
}