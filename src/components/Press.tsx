'use client'

import { motion } from 'framer-motion'

export default function Press() {
  return (
    <section id="press" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            PRESS &<br />
            <span className="text-stroke">PARTNERS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborations and coverage that amplify youth culture. Media inquiries and partnership opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t border-white/10"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              FREE THE YOUTH
            </h2>
            <p className="text-gray-400 mt-2 text-sm tracking-wide">
              FASHION FESTIVAL 2025 • ACCRA, GHANA
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
            <span>© 2025 Free the Youth. All rights reserved.</span>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
