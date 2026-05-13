'use client'
import { motion } from 'framer-motion'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

export function InteractiveOrb() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const managerX = useSpring(mouseX, { stiffness: 50, damping: 15 })
  const managerY = useSpring(mouseY, { stiffness: 50, damping: 15 })

  const rotateX = useTransform(managerY, [-100, 100], [-45, 45])
  const rotateY = useTransform(managerX, [-100, 100], [-45, 45])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <>
      {/* Orb 1 */}
      <motion.div
        className="fixed top-20 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-500/30 backdrop-blur-xl border border-white/20 shadow-2xl z-0 hidden lg:block"
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Orb 2 */}
      <motion.div
        className="fixed bottom-32 right-32 w-32 h-32 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-500/30 backdrop-blur-xl border border-white/20 shadow-2xl z-0 hidden lg:block"
        style={{ rotateX: rotateX, rotateY }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  )
}
