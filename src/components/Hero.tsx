'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Ticket, Play, Star, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 via-yellow-400 to-pink-500 opacity-90" />
      
      {/* Layered texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('/noise-texture.png')] bg-repeat opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
      </div>

      {/* Floating elements inspired by brand guide */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-1/4 w-40 h-40 border-4 border-white/40 rounded-full"
      />

      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 45, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-black/20 transform rotate-45"
      />

      {/* Star element from logo */}
      <motion.div
        animate={{
          rotate: [0, 180, 360],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 text-white/30"
      >
        <Star className="w-24 h-24 fill-current" />
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Updated typography following brand guide */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-9xl font-black tracking-tighter mb-4 text-white text-poster-style"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            FREE<br />
            <span className="text-black text-shadow-vibrant">THE</span><br />
            YOUTH
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-1 bg-black max-w-sm mx-auto mb-6"
          />

          {/* FTY branding with star */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <div className="text-8xl md:text-9xl font-black tracking-tighter text-black flex items-center">
              <span>FT</span>
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="mx-2"
              >
                <Star className="w-16 h-16 md:w-20 md:h-20 fill-current text-black" />
              </motion.div>
              <span>Y</span>
            </div>
          </motion.div>

          {/* Festival tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-black text-black mb-2">
              THE ULTIMATE RAVE
            </h2>
            <p className="text-lg md:text-xl text-black/80 font-semibold">
              WHERE MUSIC MEETS FASHION
            </p>
          </motion.div>
        </motion.div>

        {/* Event details with vibrant styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-3 bg-black/20 backdrop-blur-sm rounded-2xl p-4">
            <Calendar className="w-6 h-6 text-white" />
            <div className="text-left">
              <div className="text-lg font-black text-white">JAN 3, 2026</div>
              <div className="text-sm text-white/80">One Day Only</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 bg-black/20 backdrop-blur-sm rounded-2xl p-4">
            <MapPin className="w-6 h-6 text-white" />
            <div className="text-left">
              <div className="text-lg font-black text-white">GHUD PARK</div>
              <div className="text-sm text-white/80">Accra, Ghana</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 bg-black/20 backdrop-blur-sm rounded-2xl p-4">
            <Ticket className="w-6 h-6 text-white" />
            <div className="text-left">
              <div className="text-lg font-black text-white">LIMITED</div>
              <div className="text-sm text-white/80">Tickets Available</div>
            </div>
          </div>
        </motion.div>

        {/* CTA buttons with vibrant styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-10 py-4 rounded-full text-lg font-black hover:bg-gray-900 transition-all duration-300 shadow-2xl"
          >
            GET TICKETS NOW
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-4 border-black bg-white/20 backdrop-blur-sm text-black px-10 py-4 rounded-full text-lg font-black hover:bg-white/30 transition-all duration-300 flex items-center space-x-3"
          >
            <Play className="w-6 h-6" />
            <span>WATCH TEASER</span>
          </motion.button>
        </motion.div>

        {/* Festival countdown or urgency element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-12"
        >
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-black rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-black rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}