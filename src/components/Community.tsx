'use client'

import { motion } from 'framer-motion'

export default function Community() {
  return (
    <section id="community" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            COMMUNITY &<br />
            <span className="text-stroke">HYPE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the movement. Share your style, connect with creators, and be part of the cultural conversation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
