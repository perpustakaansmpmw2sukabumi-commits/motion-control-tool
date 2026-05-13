import { motion } from 'framer-motion'

const features = [
  { title: "Drag & Drop", desc: "Smooth 60fps interactions", icon: "✋" },
  { title: "Hover Effects", desc: "Micro-interactions", icon: "🎯" },
  { title: "Scroll Magic", desc: "Parallax perfection", icon: "🌊" },
  { title: "Responsive", desc: "Mobile-first design", icon: "📱" },
]

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          className="text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-8 leading-tight"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Motion Control
        </motion.h1>
        
        <motion.p 
          className="text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Premium animations that feel expensive. 
          <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {" "}Zero cost.
          </span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-white/20 backdrop-blur-xl rounded-3xl font-bold text-lg shadow-2xl hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            Start Building
          </motion.button>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="px-12 py-6 border border-white/30 rounded-3xl font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-xl"
          >
            View Docs
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Features */}
      <motion.div
        className="mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass p-8 rounded-3xl h-48 flex flex-col items-center justify-center text-center shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <motion.div
              className="text-4xl mb-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="font-bold text-xl text-white mb-2 group-hover:translate-y-[-2px] transition-transform">
              {feature.title}
            </h3>
            <p className="text-white/70 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="glass p-4 rounded-full shadow-xl cursor-pointer hover:bg-white/30 transition-colors">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </main>
  )
}
