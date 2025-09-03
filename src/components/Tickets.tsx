'use client'

import { motion } from 'framer-motion'
import { Check, Clock, Gift } from 'lucide-react'

export default function Tickets() {
  const tickets = [
    {
      name: 'GENERAL',
      price: '₵150',
      description: 'Access to all shows',
      features: [
        'All runway shows',
        'Music performances',
        'Food court access',
        'General merchandise'
      ]
    },
    {
      name: 'VIP',
      price: '₵350',
      description: 'Premium experience',
      features: [
        'Front row seating',
        'VIP gift bag',
        'Exclusive lounge',
        'Meet & greet access',
        'Priority merchandise'
      ],
      popular: true
    },
    {
      name: 'BACKSTAGE',
      price: '₵650',
      description: 'Ultimate access',
      features: [
        'Backstage access',
        'Designer meet & greets',
        'Exclusive after-party',
        'Limited edition merch',
        'Personal styling session'
      ]
    }
  ]

  return (
    <section id="tickets" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            GET YOUR<br />
            <span className="text-stroke">ACCESS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your experience. Limited tickets available for this exclusive fashion-music fusion event.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                ticket.popular 
                  ? 'border-white bg-white text-black' 
                  : 'border-white/20 glass-effect hover:border-white/40'
              }`}
            >
              {ticket.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 text-xs font-bold rounded-full"
                >
                  MOST POPULAR
                </motion.div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-black tracking-tighter mb-2">
                  {ticket.name}
                </h3>
                <p className={`text-sm ${ticket.popular ? 'text-gray-600' : 'text-gray-400'}`}>
                  {ticket.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-black">
                  {ticket.price}
                </span>
                <span className={`text-sm ml-2 ${ticket.popular ? 'text-gray-600' : 'text-gray-400'}`}>
                  / 2 days
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {ticket.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <Check className={`w-5 h-5 ${ticket.popular ? 'text-black' : 'text-white'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  ticket.popular 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                SELECT {ticket.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
