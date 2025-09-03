'use client'

import { motion } from 'framer-motion'

export default function StyleGuide() {
  return (
    <section id="style" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            STYLE<br />
            <span className="text-stroke">GUIDE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Festival fashion inspiration. Editorial previews and lookbook styling to help you create the perfect festival fit.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
