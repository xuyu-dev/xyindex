"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { StarfieldBackground } from "@/components/starfield-background"
import { ParticleName } from "@/components/particle-name"
import { ProfileSection } from "@/components/profile-section"

export default function HomePage() {
  const [isComplete, setIsComplete] = useState(false)

  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      <StarfieldBackground />

      <div className="relative min-h-screen w-full">
        <motion.div
          className="absolute inset-0 w-full h-screen flex items-center justify-center"
          initial={{ y: 0 }}
          animate={{
            y: isComplete ? "-20vh" : "0vh",
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-full h-full relative">
            <ParticleName onComplete={() => setIsComplete(true)} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, top: "50vh" }}
          animate={{
            opacity: isComplete ? 1 : 0,
            top: isComplete ? "48vh" : "50vh",
          }}
          transition={{ duration: 1.2, delay: isComplete ? 0.5 : 0, ease: "easeOut" }}
          className="absolute left-0 right-0"
        >
          <ProfileSection />
        </motion.div>
      </div>
    </div>
  )
}
