/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Car, Utensils, Leaf, Shield, Wifi, Heart, Smartphone, Headphones, Zap, Users, Star, Phone, Mail, AlertCircle, CheckCircle, Navigation, Plane, Train, Bus, Bike, Camera, CreditCard, Globe, Sun, Moon, Thermometer, Umbrella, Wind, Eye, Info, Download, Share2, Bell, Calendar, Timer, QrCode, NfcIcon as Nfc } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function FestivalInfo() {
  const [selectedTab, setSelectedTab] = useState<'location' | 'entry' | 'food' | 'sustainability' | 'safety'>('location')
  const [selectedTransport, setSelectedTransport] = useState<string>('shuttle')
  const [weatherExpanded, setWeatherExpanded] = useState<boolean>(false)
  const [showMap, setShowMap] = useState<boolean>(false)
  const [emergencyExpanded, setEmergencyExpanded] = useState<boolean>(false)
  const [selectedDay, setSelectedDay] = useState<'day1' | 'day2'>('day1')
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50])

  const transportOptions = [
    {
      id: 'shuttle',
      name: 'Free Shuttle',
      icon: Bus,
      description: 'Complimentary shuttle service from key locations',
      details: ['Accra Mall - Every 15 minutes', 'Kotoka Airport - Every 30 minutes', 'University of Ghana - Every 20 minutes'],
      cost: 'Free',
      duration: '15-45 minutes',
      availability: '10:00 AM - 2:00 AM',
      features: ['Air conditioned', 'WiFi available', 'Accessibility friendly'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'rideshare',
      name: 'Uber/Bolt',
      icon: Car,
      description: 'Designated pickup and drop-off zones for ride-sharing',
      details: ['Dedicated festival pickup area', 'Surge pricing during peak hours', 'Pre-book recommended'],
      cost: '₵15-45',
      duration: '10-30 minutes',
      availability: '24/7',
      features: ['Door-to-door service', 'Multiple vehicle options', 'Cashless payment'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'parking',
      name: 'Drive Yourself',
      icon: Car,
      description: 'On-site parking with 24-hour security',
      details: ['500 parking spaces', 'VIP parking available', 'Electric vehicle charging'],
      cost: '₵20 (Weekend Pass)',
      duration: 'Direct access',
      availability: '24/7',
      features: ['24/7 security', 'CCTV monitored', 'EV charging stations'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'bike',
      name: 'Bike Parking',
      icon: Bike,
      description: 'Secure bicycle parking area',
      details: ['Covered bike racks', '200 spaces available', 'Repair station on-site'],
      cost: 'Free',
      duration: '5-20 minutes',
      availability: '24/7',
      features: ['Covered area', 'Security monitored', 'Repair tools available'],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const foodVendors = [
    {
      name: 'JOLLOF JUNCTION',
      cuisine: 'West African',
      specialty: 'Authentic Ghanaian jollof rice with multiple proteins',
      price: '₵25-45',
      dietary: ['Halal', 'Vegan options'],
      location: 'Food Court East',
      rating: 4.8,
      featured: true,
      sustainable: true
    },
    {
      name: 'PLANTAIN PARADISE',
      cuisine: 'African Fusion',
      specialty: 'Creative plantain dishes and tropical smoothies',
      price: '₵15-35',
      dietary: ['Vegan', 'Gluten-free'],
      location: 'Food Court West',
      rating: 4.7,
      featured: false,
      sustainable: true
    },
    {
      name: 'SUYA SENSATION',
      cuisine: 'Nigerian Street Food',
      specialty: 'Grilled meat skewers with traditional spices',
      price: '₵20-40',
      dietary: ['Halal'],
      location: 'Street Food Alley',
      rating: 4.9,
      featured: true,
      sustainable: false
    },
    {
      name: 'WAAKYE WORLD',
      cuisine: 'Ghanaian Traditional',
      specialty: 'Rice and beans with various accompaniments',
      price: '₵18-38',
      dietary: ['Vegetarian options'],
      location: 'Heritage Kitchen',
      rating: 4.6,
      featured: false,
      sustainable: true
    },
    {
      name: 'COCKTAIL CRAFT',
      cuisine: 'Beverages',
      specialty: 'African-inspired cocktails and mocktails',
      price: '₵12-25',
      dietary: ['Non-alcoholic options', 'Fresh juices'],
      location: 'Multiple bars',
      rating: 4.5,
      featured: true,
      sustainable: true
    },
    {
      name: 'DESERT DREAMS',
      cuisine: 'Desserts',
      specialty: 'Traditional African sweets meets modern desserts',
      price: '₵8-20',
      dietary: ['Vegan options', 'Sugar-free'],
      location: 'Sweet Corner',
      rating: 4.4,
      featured: false,
      sustainable: true
    }
  ]

  const safetyGuidelines = [
    {
      category: 'Health & Medical',
      icon: Heart,
      items: [
        'First aid stations throughout the grounds',
        'Medical professionals on-site 24/7',
        'COVID-19 protocols in place',
        'Prescription medication storage available'
      ],
      emergency: 'Medical Emergency: Call 911 or approach any staff member'
    },
    {
      category: 'Security',
      icon: Shield,
      items: [
        'Professional security team and local police',
        'CCTV monitoring across all areas',
        'Lost & found service',
        'Emergency evacuation procedures'
      ],
      emergency: 'Security Issue: Text HELP to 23456 or find security personnel'
    },
    {
      category: 'Weather Protection',
      icon: Umbrella,
      items: [
        'Covered areas available during rain',
        'Free sunscreen stations',
        'Hydration stations throughout',
        'Weather updates via festival app'
      ],
      emergency: 'Weather Emergency: Follow staff instructions and evacuate to marked shelters'
    }
  ]

  const sustainabilityInitiatives = [
    {
      title: 'ZERO WASTE GOAL',
      description: 'Aiming for 90% waste diversion from landfills',
      icon: Leaf,
      initiatives: [
        'Compostable food containers only',
        'Comprehensive recycling stations',
        'Reusable cup program with deposits',
        'Food waste donated to local charities'
      ],
      impact: '15 tons of waste diverted in 2024',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'LOCAL SOURCING',
      description: 'Supporting Ghanaian businesses and reducing carbon footprint',
      icon: Globe,
      initiatives: [
        '80% of vendors are local businesses',
        'Farm-to-festival food sourcing',
        'Local artisan marketplace',
        'Ghanaian-made merchandise priority'
      ],
      impact: '₵2M invested in local economy',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'CARBON NEUTRAL',
      description: 'Offsetting our environmental impact through verified programs',
      icon: Wind,
      initiatives: [
        'Solar-powered main stages',
        'Tree planting partnerships',
        'Carbon offset for all travel',
        'Electric vehicle charging stations'
      ],
      impact: '500 tons CO2 offset in 2024',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const weatherForecast = [
    {
      day: 'Friday, October 14',
      high: 32,
      low: 24,
      condition: 'Partly Cloudy',
      icon: Sun,
      humidity: '65%',
      wind: '12 km/h',
      rain: '10%'
    },
    {
      day: 'Saturday, October 15',
      high: 30,
      low: 23,
      condition: 'Sunny',
      icon: Sun,
      humidity: '60%',
      wind: '8 km/h',
      rain: '5%'
    },
    {
      day: 'Sunday, October 16',
      high: 29,
      low: 22,
      condition: 'Light Rain',
      icon: Umbrella,
      humidity: '75%',
      wind: '15 km/h',
      rain: '40%'
    }
  ]

  const amenities = [
    { icon: Wifi, label: 'Free High-Speed WiFi', description: 'Throughout festival grounds', available: true },
    { icon: Heart, label: 'Medical Center', description: '24/7 healthcare professionals', available: true },
    { icon: Car, label: 'Valet Parking', description: 'VIP parking service', available: true },
    { icon: Clock, label: '24/7 Security', description: 'Professional security team', available: true },
    { icon: Phone, label: 'Charging Stations', description: 'Phone & device charging', available: true },
    { icon: Camera, label: 'Photo Booths', description: 'Professional festival photos', available: true },
    { icon: Headphones, label: 'Silent Disco Area', description: 'Late-night quiet zone', available: true },
    { icon: Users, label: 'Family Area', description: 'Kid-friendly zone', available: false },
    { icon: Leaf, label: 'Composting Stations', description: 'Eco-friendly waste disposal', available: true },
    { icon: Star, label: 'VIP Lounges', description: 'Exclusive relaxation areas', available: true },
    { icon: Utensils, label: 'Halal Food Options', description: 'Certified halal vendors', available: true },
    { icon: Eye, label: 'Accessibility Services', description: 'Full accessibility support', available: true }
  ]

  const emergencyContacts = [
    { service: 'Festival Emergency', number: '+233 24 123 4567', description: 'General festival emergencies' },
    { service: 'Medical Emergency', number: '911', description: 'Life-threatening situations' },
    { service: 'Security Hotline', number: '+233 24 765 4321', description: 'Security concerns & lost items' },
    { service: 'Transport Issues', number: '+233 24 111 2222', description: 'Shuttle & parking problems' },
    { service: 'Accessibility Support', number: '+233 24 333 4444', description: 'Special needs assistance' }
  ]

  return (
    <section ref={sectionRef} id="info" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 opacity-5"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 15 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute border border-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + (i % 5) * 8}px`,
              height: `${20 + (i % 5) * 8}px`,
              borderRadius: i % 2 === 0 ? '50%' : '0'
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ 
              rotateX: [0, 360],
              scale: [1, 1.15, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Info className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
            FESTIVAL<br />
            <span className="text-stroke">INFO</span>
          </h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Everything you need to know for the perfect festival experience. Practical information 
            styled with our signature aesthetic, because even logistics can be beautiful.
          </motion.p>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { id: 'location', name: 'Location & Transport', icon: MapPin },
              { id: 'entry', name: 'Entry & Policies', icon: Shield },
              { id: 'sustainability', name: 'Sustainability', icon: Leaf },
              { id: 'safety', name: 'Safety & Support', icon: Heart }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                  selectedTab === tab.id
                    ? 'bg-white text-black shadow-2xl'
                    : 'border-2 border-white/30 hover:border-white/50 glass-effect'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="hidden sm:block">{tab.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {/* Location & Transport */}
          {selectedTab === 'location' && (
            <motion.div
              key="location"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Venue Information */}
              <div className="glass-effect rounded-3xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-black mb-4 flex items-center space-x-3">
                        <MapPin className="w-8 h-8 text-blue-500" />
                        <span>FESTIVAL VENUE</span>
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xl font-bold mb-2">Labadi Beach Cultural Centre</h4>
                          <p className="text-gray-300">Adjacent to La Pleasure Beach, Accra</p>
                          <p className="text-sm text-gray-400 mt-2">
                            A stunning beachfront location combining cultural heritage with modern facilities. 
                            The venue features multiple stages, art installations, and direct beach access.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Capacity:</span>
                            <p className="font-semibold">25,000 people</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Size:</span>
                            <p className="font-semibold">15 hectares</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Accessibility:</span>
                            <p className="font-semibold">Fully accessible</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Beach Access:</span>
                            <p className="font-semibold">Direct access</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      onClick={() => setShowMap(!showMap)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-blue-500 text-white py-3 rounded-2xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Navigation className="w-5 h-5" />
                      <span>{showMap ? 'Hide Map' : 'Show Interactive Map'}</span>
                    </motion.button>
                  </div>

                  {/* Weather Forecast */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-4 flex items-center space-x-2">
                        <Thermometer className="w-6 h-6 text-orange-500" />
                        <span>WEATHER FORECAST</span>
                      </h4>
                      <div className="space-y-3">
                        {weatherForecast.map((forecast, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer"
                          >
                            <div className="flex items-center space-x-4">
                              <forecast.icon className="w-8 h-8 text-yellow-500" />
                              <div>
                                <p className="font-semibold">{forecast.day}</p>
                                <p className="text-sm text-gray-400">{forecast.condition}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold">{forecast.high}°/{forecast.low}°</p>
                              <p className="text-xs text-gray-400">{forecast.rain} rain</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Map */}
                <AnimatePresence>
                  {showMap && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mt-8 p-6 bg-white/5 rounded-2xl"
                    >
                      <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="text-center">
                          <Navigation className="w-16 h-16 mx-auto mb-4 text-white/60" />
                          <p className="text-white/60">Interactive map loading...</p>
                          <p className="text-sm text-white/40 mt-2">GPS: 5.5558° N, 0.1709° W</p>
                        </div>
                        
                        {/* Map Controls */}
                        <div className="absolute top-4 right-4 space-y-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                          >
                            <Navigation className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Transport Options */}
              <div>
                <h3 className="text-3xl font-black mb-8 text-center">TRANSPORT OPTIONS</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {transportOptions.map((transport, index) => (
                    <motion.div
                      key={transport.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      onClick={() => setSelectedTransport(transport.id)}
                      className={`glass-effect rounded-3xl p-8 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                        selectedTransport === transport.id ? 'border-2 border-white/60' : 'border border-white/20'
                      }`}
                    >
                      {/* Background Gradient */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.1 }}
                        className={`absolute inset-0 bg-gradient-to-br ${transport.color}`}
                      />

                      <div className="relative z-10 space-y-6">
                        {/* Header */}
                        <div className="flex items-center space-x-4">
                          <motion.div
                            animate={selectedTransport === transport.id ? { rotate: [0, 10, -10, 0] } : {}}
                            transition={{ duration: 0.5 }}
                            className={`p-4 bg-gradient-to-r ${transport.color} rounded-2xl`}
                          >
                            <transport.icon className="w-8 h-8 text-white" />
                          </motion.div>
                          <div>
                            <h4 className="text-xl font-black">{transport.name}</h4>
                            <p className="text-sm text-gray-400">{transport.description}</p>
                          </div>
                        </div>

                        {/* Quick Info */}
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-black text-green-500">{transport.cost}</p>
                            <p className="text-xs text-gray-400">Cost</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold">{transport.duration}</p>
                            <p className="text-xs text-gray-400">Duration</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold">{transport.availability}</p>
                            <p className="text-xs text-gray-400">Available</p>
                          </div>
                        </div>

                        {/* Details */}
                        <AnimatePresence>
                          {selectedTransport === transport.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="space-y-4 pt-4 border-t border-white/20"
                            >
                              <div>
                                <h5 className="font-bold mb-2">Details:</h5>
                                <ul className="space-y-1">
                                  {transport.details.map((detail, idx) => (
                                    <li key={idx} className="text-sm text-gray-300 flex items-start space-x-2">
                                      <CheckCircle className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h5 className="font-bold mb-2">Features:</h5>
                                <div className="flex flex-wrap gap-2">
                                  {transport.features.map((feature) => (
                                    <span key={feature} className="text-xs bg-white/10 px-2 py-1 rounded-full">
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Entry & Policies */}
          {selectedTab === 'entry' && (
            <motion.div
              key="entry"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Entry Requirements */}
              <div className="glass-effect rounded-3xl p-8">
                <h3 className="text-3xl font-black mb-8 flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-green-500" />
                  <span>ENTRY REQUIREMENTS</span>
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Required Items</h4>
                      <div className="space-y-3">
                        {[
                          { icon: CreditCard, text: 'Valid government-issued ID (18+ event)', required: true },
                          { icon: QrCode, text: 'Festival ticket (digital or printed)', required: true },
                          { icon: Phone, text: 'Festival app downloaded (recommended)', required: false },
                          { icon: Heart, text: 'Vaccination certificate (if applicable)', required: false }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex items-center space-x-3 p-3 rounded-xl ${
                              item.required ? 'bg-red-500/10 border border-red-500/30' : 'bg-green-500/10 border border-green-500/30'
                            }`}
                          >
                            <item.icon className={`w-6 h-6 ${item.required ? 'text-red-500' : 'text-green-500'}`} />
                            <span className="flex-1">{item.text}</span>
                            <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                              item.required ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                            }`}>
                              {item.required ? 'REQUIRED' : 'OPTIONAL'}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Prohibited Items</h4>
                      <div className="space-y-2">
                        {[
                          'Outside food and beverages',
                          'Professional recording equipment',
                          'Weapons of any kind',
                          'Illegal substances',
                          'Glass containers',
                          'Large bags or backpacks',
                          'Chairs or umbrellas',
                          'Pets (except service animals)'
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center space-x-3 text-sm"
                          >
                            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-4">Security Process</h4>
                      <div className="space-y-3 text-sm text-gray-300">
                        <p>• Bag searches at all entry points</p>
                        <p>• Metal detector screening</p>
                        <p>• ID verification (must match ticket name)</p>
                        <p>• Wristband application for re-entry</p>
                        <p>• Average wait time: 10-15 minutes</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fast Track Entry */}
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <Zap className="w-8 h-8 text-purple-500" />
                    <div>
                      <h4 className="text-xl font-bold">VIP FAST TRACK ENTRY</h4>
                      <p className="text-sm text-gray-400">Skip the lines with VIP and Backstage passes</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-black text-purple-500">2-5 min</p>
                      <p className="text-xs text-gray-400">Entry Time</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-purple-500">Dedicated</p>
                      <p className="text-xs text-gray-400">Entry Gate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-purple-500">Priority</p>
                      <p className="text-xs text-gray-400">Service</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code of Conduct */}
              <div className="glass-effect rounded-3xl p-8">
                <h3 className="text-3xl font-black mb-8 text-center">FESTIVAL CODE OF CONDUCT</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-green-500">We Encourage</h4>
                    <div className="space-y-3">
                      {[
                        'Respect for all attendees and staff',
                        'Celebrating cultural diversity',
                        'Supporting local vendors',
                        'Environmental consciousness',
                        'Creative expression through fashion',
                        'Safe and consensual interactions'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4 text-red-500">Zero Tolerance</h4>
                    <div className="space-y-3">
                      {[
                        'Harassment or discrimination',
                        'Violence or threatening behavior',
                        'Theft or vandalism',
                        'Drug dealing or trafficking',
                        'Unauthorized recording or photography',
                        'Disruption of performances'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <AlertCircle className="w-5 h-5 text-red-500" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <Bell className="w-6 h-6 text-yellow-500" />
                    <div>
                      <p className="font-bold">Report Issues</p>
                      <p className="text-sm text-gray-400">Text REPORT to 23456 or approach any staff member in yellow vests</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Sustainability */}
          {selectedTab === 'sustainability' && (
            <motion.div
              key="sustainability"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h3 className="text-3xl font-black mb-6">OUR SUSTAINABILITY COMMITMENT</h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Free the Youth is committed to environmental responsibility and social impact. 
                  We&apos;re not just celebrating culture—we&apos;re protecting the planet for future generations.
                </p>
              </div>

              {/* Sustainability Initiatives */}
              <div className="space-y-8">
                {sustainabilityInitiatives.map((initiative, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="glass-effect rounded-3xl p-8 relative overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${initiative.color} opacity-10 rounded-full transform translate-x-8 -translate-y-8`} />
                    
                    <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                      <div className="space-y-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`inline-block p-4 bg-gradient-to-r ${initiative.color} rounded-2xl`}
                        >
                          <initiative.icon className="w-10 h-10 text-white" />
                        </motion.div>
                        <div>
                          <h4 className="text-2xl font-black mb-2">{initiative.title}</h4>
                          <p className="text-gray-300">{initiative.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h5 className="font-bold text-lg">Our Actions:</h5>
                        {initiative.initiatives.map((action, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{action}</span>
                          </div>
                        ))}
                      </div>

                      <div className="text-center">
                        <div className="p-6 bg-white/5 rounded-2xl">
                          <h5 className="font-bold mb-2">2024 Impact</h5>
                          <p className="text-3xl font-black text-green-500 mb-2">{initiative.impact.split(' ')[0]}</p>
                          <p className="text-sm text-gray-400">{initiative.impact.substring(initiative.impact.indexOf(' ') + 1)}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Attendee Participation */}
              <div className="glass-effect rounded-3xl p-8">
                <h3 className="text-2xl font-black mb-6 text-center">HOW YOU CAN HELP</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { icon: Leaf, title: 'Use Reusable Items', description: 'Bring water bottles and bags' },
                    { icon: Users, title: 'Share Transport', description: 'Carpool or use our shuttles' },
                    { icon: Utensils, title: 'Choose Sustainable', description: 'Support eco-friendly vendors' },
                    { icon: Star, title: 'Spread Awareness', description: 'Share our mission on social' }
                  ].map((action, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
                    >
                      <action.icon className="w-10 h-10 mx-auto mb-4 text-green-500" />
                      <h4 className="font-bold mb-2">{action.title}</h4>
                      <p className="text-sm text-gray-400">{action.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Safety & Support */}
          {selectedTab === 'safety' && (
            <motion.div
              key="safety"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Emergency Contacts */}
              <div className="glass-effect rounded-3xl p-8">
                <h3 className="text-3xl font-black mb-8 text-center">EMERGENCY CONTACTS</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {emergencyContacts.map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <Phone className="w-8 h-8 text-red-500" />
                      <div className="flex-1">
                        <h4 className="font-bold">{contact.service}</h4>
                        <p className="text-sm text-gray-400">{contact.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-black text-red-500">{contact.number}</p>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full mt-1"
                        >
                          CALL NOW
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Safety Guidelines */}
              <div className="space-y-8">
                {safetyGuidelines.map((guideline, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="glass-effect rounded-3xl p-8"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl"
                      >
                        <guideline.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h4 className="text-2xl font-black">{guideline.category}</h4>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold mb-4">Safety Measures:</h5>
                        <div className="space-y-3">
                          {guideline.items.map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-2xl">
                        <div className="flex items-center space-x-3 mb-3">
                          <AlertCircle className="w-6 h-6 text-red-500" />
                          <h5 className="font-bold text-red-500">Emergency Protocol</h5>
                        </div>
                        <p className="text-sm text-gray-300">{guideline.emergency}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Amenities Grid */}
              <div>
                <h3 className="text-3xl font-black mb-8 text-center">FESTIVAL AMENITIES</h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {amenities.map((amenity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`text-center p-6 rounded-2xl border-2 transition-all duration-300 ${
                        amenity.available 
                          ? 'border-green-500/30 bg-green-500/10 hover:border-green-500/50' 
                          : 'border-gray-500/30 bg-gray-500/10 opacity-50'
                      }`}
                    >
                      <amenity.icon className={`w-10 h-10 mx-auto mb-3 ${
                        amenity.available ? 'text-green-500' : 'text-gray-500'
                      }`} />
                      <h4 className="font-bold mb-2">{amenity.label}</h4>
                      <p className="text-sm text-gray-400">{amenity.description}</p>
                      <div className={`mt-3 text-xs px-2 py-1 rounded-full inline-block ${
                        amenity.available 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-500 text-white'
                      }`}>
                        {amenity.available ? 'AVAILABLE' : 'COMING 2026'}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}