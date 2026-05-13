'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FloatingCard } from './ui/FloatingCard'
import { MotionGrid } from './ui/MotionGrid'
import { ParallaxContainer } from './ui/ParallaxContainer'
import { InteractiveOrb } from './ui/InteractiveOrb'

export function MotionControl({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <InteractiveOrb />
      </div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen relative z-10"
          >
            {children}
            
            {/* Floating UI Elements */}
            <FloatingCard />
            
            {/* Interactive Grid */}
            <MotionGrid />
            
            {/* Parallax Section */}
            <ParallaxContainer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
