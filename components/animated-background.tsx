"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(102,126,234,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: ["-10%", "110%"],
          y: ["10%", "90%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(118,75,162,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: ["110%", "-10%"],
          y: ["90%", "10%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(240,147,251,0.4) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: ["50%", "20%", "80%", "50%"],
          y: ["20%", "80%", "30%", "20%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(79,172,254,0.4) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: ["80%", "50%", "20%", "80%"],
          y: ["80%", "20%", "70%", "80%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
    </div>
  )
}
