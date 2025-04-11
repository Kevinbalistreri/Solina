import { motion } from "framer-motion";

export default function TechEye() {
  return (
    <div className="flex justify-center items-center mb-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1, 0.95, 1],
          opacity: [0, 1, 1, 1],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="relative w-28 h-28 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 shadow-2xl"
      >
        <div className="absolute inset-0 bg-black rounded-full blur-xl opacity-40" />
        <div className="absolute inset-[30%] bg-white rounded-full shadow-inner" />
      </motion.div>
    </div>
  );
}