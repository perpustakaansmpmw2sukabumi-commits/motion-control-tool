'use client'
import { motion } from 'framer-motion'
import { MouseParallaxContainer, MouseParallaxChild } from 'framer-motion-parallax-container'
import { Github, Linkedin, Twitter } from 'lucide-react'

export function FloatingCard() {
  return (
    <MouseParallaxContainer
      className="fixed top-8 right-8 hidden lg:block z-50"
      target={window}
      baseVelocity={0.5}
      enabled
    >
      <MouseParallaxChild
        factor={0.3}
        className="glass p-6 rounded-2xl shadow-2xl w-72 h-80"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-purple-400/20 to-blue-500/20 backdrop-blur-xl"
          whileHover={{ scale: 1.05, rotate: 0 }}
          drag
          dragConstraints={{ top: -5, left: -5, right: 5, bottom: 5 }}
          dragElastic={0.2}
        >
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-4">
                Motion Control
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Premium animations, zero cost. Drag, hover, scroll – pure magic ✨
              </p>
            </div>
            <div className="flex space-x-3">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
              ].map(({ icon: Icon }, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="p-2 rounded-xl bg-white/20 hover:bg-white/40 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  )
}
