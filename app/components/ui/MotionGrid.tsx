'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const GridItem = ({ delay = 0 }: { delay?: number }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const rotateY = useSpring(mouseX, { stiffness: 50, damping: 20 })

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.1 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        
        mouseX.set((e.clientX - rect.left - width / 2) / 2)
        mouseY.set((e.clientY - rect.top - height / 2) / 2)
      }}
      style={{ rotateX, rotateY }}
      className="glass p-6 rounded-2xl shadow-xl w-full h-48 flex items-center justify-center cursor-pointer group"
    >
      <div className="text-center">
        <motion.div
          className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl mx-auto mb-4 shadow-lg"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <h3 className="font-bold text-white text-lg group-hover:translate-y-[-2px] transition-transform duration-300">
          Motion Block
        </h3>
      </div>
    </motion.div>
  )
}

export function MotionGrid() {
  return (
    <div className="fixed bottom-8 left-8 w-96 h-96 pointer-events-none z-40 hidden xl:block">
      <motion.div
        className="grid grid-cols-2 gap-4 w-full h-full p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <GridItem delay={0.1} />
        <GridItem delay={0.2} />
        <GridItem delay={0.3} />
        <GridItem delay={0.4} />
      </motion.div>
    </div>
  )
}
