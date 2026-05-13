'use client'
import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function ParallaxContainer() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -400])

  return (
    <div ref={ref} className="h-screen flex items-center justify-center mt-40 hidden 2xl:block">
      <div className="relative w-[800px] h-[500px]">
        <motion.div 
          style={{ y: y1 }}
          className="glass absolute top-10 left-10 w-64 h-64 rounded-3xl shadow-2xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="glass absolute top-32 right-20 w-72 h-72 rounded-3xl shadow-2xl"
        />
        <motion.div 
          style={{ y: y3 }}
          className="glass absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 rounded-3xl shadow-2xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center text-white/90">
            <h2 className="text-4xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
              Scroll Magic ✨
            </h2>
            <p className="text-xl max-w-md mx-auto leading-relaxed">
              Parallax effects that feel premium. Pure CSS + Framer Motion power.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
