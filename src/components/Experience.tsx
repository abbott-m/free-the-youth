'use client'

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Music, Shirt, Palette, Coffee, Camera, Users, MapPin, Clock, Star, Utensils, Headphones, Mic, Zap, Globe, Heart, Eye, Sparkles, ArrowRight, Play, Volume2 } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState<string | null>(null)
  const [hoveredZone, setHoveredZone] = useState<string | null>(null)
  const [selectedDay, setSelectedDay] = useState<'day1' | 'day2'>('day1')
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const experiences = [
    {
      id: 'live-performances',
      icon: Music,
      title: 'LIVE PERFORMANCES',
      subtitle: 'Multi-Stage Music Experience',
      description: 'Three stages featuring non-stop music from Africa\'s biggest artists, underground talents, and international collaborations.',
      features: ['Main Stage Headliners', 'Intimate Acoustic Sessions', 'Underground Talent Showcase', 'DJ Sets & Electronic'],
      color: 'from-purple-500 to-pink-500',
      stats: { performers: '25+', stages: '3', hours: '18' },
      highlights: [
        'Burna Boy closing set with fireworks',
        'Amaarae acoustic session under the stars',
        'DJ battle championship finals',
        'Surprise international collaborations'
      ],
      immersive: '360° Sound System with Dolby Atmos',
      capacity: '15,000 people',
      vip: 'VIP viewing platforms with premium sound'
    },
    {
      id: 'runway-shows',
      icon: Shirt,
      title: 'FASHION RUNWAY',
      subtitle: 'African Fashion Revolution',
      description: 'Exclusive runway shows featuring emerging and established designers showcasing the future of African fashion.',
      features: ['Designer Collections', 'Sustainable Fashion Focus', 'Gender-Neutral Showcases', 'Streetwear x Couture'],
      color: 'from-blue-500 to-cyan-500',
      stats: { designers: '15+', shows: '8', models: '50+' },
      highlights: [
        'Studio 189 sustainable collection debut',
        'Orange Culture gender-neutral showcase',
        'Student designer competition finals',
        'Fashion tech integration demos'
      ],
      immersive: 'LED runway with interactive lighting',
      capacity: '2,000 seated',
      vip: 'Front row seating with designer meet & greets'
    },
    {
      id: 'art-installations',
      icon: Palette,
      title: 'INTERACTIVE ART',
      subtitle: 'Digital Meets Traditional',
      description: 'Immersive art installations that blend traditional African art with cutting-edge digital technology.',
      features: ['Digital Art Galleries', 'AR/VR Experiences', 'Traditional Craft Workshops', 'Photo-Responsive Installations'],
      color: 'from-green-500 to-emerald-500',
      stats: { installations: '12', artists: '20+', interactive: '8' },
      highlights: [
        'AI-generated Kente pattern creator',
        'Motion-activated graffiti walls',
        'Traditional pottery with digital projection',
        'Holographic ancestor storytelling'
      ],
      immersive: 'Motion tracking and gesture controls',
      capacity: 'Open flow design',
      vip: 'Private artist studio tours'
    },
    {
      id: 'cultural-zones',
      icon: Globe,
      title: 'CULTURAL IMMERSION',
      subtitle: 'Heritage & Innovation',
      description: 'Dedicated zones celebrating different aspects of African culture, from traditional crafts to modern innovation.',
      features: ['Traditional Craft Markets', 'Food Heritage Tours', 'Language Learning Pods', 'Innovation Showcases'],
      color: 'from-orange-500 to-red-500',
      stats: { countries: '15', crafters: '30+', foods: '50+' },
      highlights: [
        'Live drumming circles every hour',
        'Traditional textile weaving demos',
        'Pan-African food truck festival',
        'Startup pitch competitions'
      ],
      immersive: 'Multi-sensory cultural journey',
      capacity: 'Village-style layout',
      vip: 'Private cultural guide experiences'
    },
    {
      id: 'style-lounges',
      icon: Coffee,
      title: 'STYLE LOUNGES',
      subtitle: 'Network & Create',
      description: 'Curated spaces for networking, styling sessions, content creation, and cultural exchange.',
      features: ['Creator Content Studios', 'Personal Styling Sessions', 'Networking Lounges', 'Pop-up Photo Studios'],
      color: 'from-yellow-500 to-amber-500',
      stats: { lounges: '5', stylists: '12', studios: '3' },
      highlights: [
        'AI-powered style recommendations',
        'Professional photo & video studios',
        '1-on-1 styling with top stylists',
        'Influencer collaboration spaces'
      ],
      immersive: 'Smart mirrors and AR try-ons',
      capacity: '500 simultaneous users',
      vip: 'Private styling suites'
    },
    {
      id: 'food-culture',
      icon: Utensils,
      title: 'CULINARY JOURNEY',
      subtitle: 'Flavors of Africa',
      description: 'A gastronomic adventure featuring traditional dishes, modern fusion, and innovative culinary experiences.',
      features: ['Traditional Food Stalls', 'Modern Fusion Restaurants', 'Cooking Masterclasses', 'Cocktail Innovation Labs'],
      color: 'from-pink-500 to-rose-500',
      stats: { vendors: '25', dishes: '100+', chefs: '15' },
      highlights: [
        'Celebrity chef cooking competitions',
        'Traditional fermentation workshops',
        'Molecular gastronomy meets jollof',
        'Sustainable farming showcases'
      ],
      immersive: 'Taste, smell, and texture experiences',
      capacity: '3,000 dining spaces',
      vip: 'Private chef table experiences'
    }
  ]

  const schedule = {
    day1: [
      { time: '12:00 PM', event: 'Gates Open & Cultural Welcome', zone: 'Main Entrance' },
      { time: '1:00 PM', event: 'Traditional Craft Demonstrations', zone: 'Cultural Zone' },
      { time: '2:00 PM', event: 'Emerging Designers Showcase', zone: 'Fashion Runway' },
      { time: '3:00 PM', event: 'Interactive Art Gallery Opens', zone: 'Art Installations' },
      { time: '4:00 PM', event: 'Food Culture Tour Begins', zone: 'Culinary Zone' },
      { time: '5:00 PM', event: 'Acoustic Sessions Start', zone: 'Intimate Stage' },
      { time: '6:00 PM', event: 'Studio 189 Runway Show', zone: 'Main Runway' },
      { time: '7:00 PM', event: 'Stonebwoy Performance', zone: 'Cultural Stage' },
      { time: '8:00 PM', event: 'Style Lounge Networking Hour', zone: 'VIP Lounge' },
      { time: '9:30 PM', event: 'Amaarae Headline Performance', zone: 'Main Stage' },
      { time: '11:00 PM', event: 'After-Party DJ Sets', zone: 'All Stages' }
    ],
    day2: [
      { time: '11:00 AM', event: 'Breakfast & Morning Yoga', zone: 'Wellness Zone' },
      { time: '12:00 PM', event: 'Fashion Tech Innovations', zone: 'Innovation Hub' },
      { time: '1:00 PM', event: 'Cooking Masterclass Series', zone: 'Culinary Zone' },
      { time: '2:30 PM', event: 'Maxivive Streetwear Show', zone: 'Street Style Stage' },
      { time: '3:30 PM', event: 'Digital Art Workshop', zone: 'Art Installations' },
      { time: '4:30 PM', event: 'Cultural Exchange Forum', zone: 'Cultural Zone' },
      { time: '6:00 PM', event: 'Christie Brown Couture Show', zone: 'Main Runway' },
      { time: '8:00 PM', event: 'Kwesi Arthur Performance', zone: 'Cultural Stage' },
      { time: '10:00 PM', event: 'Burna Boy Closing Ceremony', zone: 'Main Stage' },
      { time: '11:30 PM', event: 'Grand Finale Fireworks', zone: 'Festival Grounds' }
    ]
  }

  const festivalZones = [
    { id: 'main-stage', name: 'Main Stage', x: 50, y: 20, size: 'large' },
    { id: 'fashion-runway', name: 'Fashion Runway', x: 70, y: 35, size: 'medium' },
    { id: 'cultural-zone', name: 'Cultural Zone', x: 30, y: 40, size: 'medium' },
    { id: 'art-gallery', name: 'Art Gallery', x: 25, y: 60, size: 'small' },
    { id: 'food-court', name: 'Food Court', x: 60, y: 70, size: 'large' },
    { id: 'vip-lounge', name: 'VIP Lounge', x: 80, y: 55, size: 'small' },
    { id: 'style-lounges', name: 'Style Lounges', x: 40, y: 25, size: 'small' },
    { id: 'entrance', name: 'Main Entrance', x: 10, y: 80, size: 'medium' }
  ]

  const testimonials = [
    {
      name: 'Ama Serwaa',
      role: 'Fashion Influencer',
      image: '/api/placeholder/80/80',
      quote: 'Free the Youth isn\'t just a festival, it\'s a cultural revolution. The fusion of music and fashion creates an energy I\'ve never experienced.',
      rating: 5,
      experience: 'VIP Experience 2024'
    },
    {
      name: 'Kofi Asante',
      role: 'Music Producer',
      image: '/api/placeholder/80/80',
      quote: 'The sound quality and stage production rival any international festival. Plus, discovering new designers while enjoying great music is unmatched.',
      rating: 5,
      experience: 'General Admission 2024'
    },
    {
      name: 'Fatima Mohammed',
      role: 'Artist & Designer',
      image: '/api/placeholder/80/80',
      quote: 'As both a performer and attendee, Free the Youth celebrates African creativity in all its forms. The art installations are mind-blowing!',
      rating: 5,
      experience: 'Artist Pass 2024'
    }
  ]

  return (
    <section ref={sectionRef} id="experience" className="py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 opacity-10"
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute border border-white"
            style={{
              left: `${10 + (i * 6) % 80}%`,
              top: `${10 + (i * 7) % 70}%`,
              width: `${30 + (i * 10) % 50}px`,
              height: `${30 + (i * 10) % 50}px`,
              borderRadius: i % 3 === 0 ? '50%' : '0'
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">
            THE<br />
            <span className="text-stroke">EXPERIENCE</span>
          </h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            More than a festival. A cultural movement where music, fashion, art, and community converge to celebrate African youth expression and innovation.
          </motion.p>

          {/* Day Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center justify-center space-x-4 mb-12"
          >
            <motion.button
              onClick={() => setSelectedDay('day1')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${
                selectedDay === 'day1'
                  ? 'bg-white text-black'
                  : 'border-2 border-white/30 hover:border-white/50'
              }`}
            >
              Day 1 - Music Focus
            </motion.button>
            <motion.button
              onClick={() => setSelectedDay('day2')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${
                selectedDay === 'day2'
                  ? 'bg-white text-black'
                  : 'border-2 border-white/30 hover:border-white/50'
              }`}
            >
              Day 2 - Fashion Focus
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Interactive Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -10 }}
              onHoverStart={() => setActiveExperience(exp.id)}
              onHoverEnd={() => setActiveExperience(null)}
              className="group relative overflow-hidden rounded-3xl glass-effect p-8 cursor-pointer"
            >
              {/* Background Gradient */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                className={`absolute inset-0 bg-gradient-to-br ${exp.color}`}
              />

              {/* Floating Icon */}
              <motion.div
                animate={{ 
                  y: activeExperience === exp.id ? [0, -10, 0] : 0,
                  rotate: activeExperience === exp.id ? [0, 5, -5, 0] : 0,
                  scale: activeExperience === exp.id ? [1, 1.1, 1] : 1
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`inline-block p-4 bg-gradient-to-r ${exp.color} rounded-2xl mb-6 relative z-10`}
              >
                <exp.icon className="w-8 h-8 text-white" />
              </motion.div>

              <div className="relative z-10 space-y-4">
                {/* Header */}
                <div>
                  <h3 className="text-2xl font-black tracking-tight mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{exp.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm">
                  {exp.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-white/5 rounded-2xl">
                  {Object.entries(exp.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <motion.div 
                        className="text-lg font-black"
                        whileHover={{ scale: 1.2 }}
                      >
                        {value}
                      </motion.div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {exp.features.map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-center space-x-3 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      <span className="text-gray-400">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Expandable Details */}
                <AnimatePresence>
                  {activeExperience === exp.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 pt-4 border-t border-white/10"
                    >
                      {/* Highlights */}
                      <div>
                        <h4 className="font-bold text-sm mb-2 text-gray-300">Event Highlights:</h4>
                        <div className="space-y-1">
                          {exp.highlights.map((highlight) => (
                            <div key={highlight} className="text-xs text-gray-400 flex items-start space-x-2">
                              <Star className="w-3 h-3 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Experience Details */}
                      <div className="grid grid-cols-1 gap-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Immersive Tech:</span>
                          <span className="text-gray-300">{exp.immersive}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Capacity:</span>
                          <span className="text-gray-300">{exp.capacity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">VIP Access:</span>
                          <span className="text-gray-300">{exp.vip}</span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-white text-black py-2 rounded-xl text-sm font-semibold mt-4"
                      >
                        Learn More
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Festival Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-black tracking-tight mb-8 text-center">
            FESTIVAL GROUNDS MAP
          </h3>
          
          <div className="glass-effect rounded-3xl p-8">
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
              {/* Map Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-10 grid-rows-8 gap-1 h-full">
                  {Array.from({ length: 80 }).map((_, i) => (
                    <div key={i} className="border border-white/10" />
                  ))}
                </div>
              </div>

              {/* Festival Zones */}
              {festivalZones.map((zone, index) => (
                <motion.div
                  key={zone.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.2,
                    zIndex: 50
                  }}
                  onHoverStart={() => setHoveredZone(zone.id)}
                  onHoverEnd={() => setHoveredZone(null)}
                  className={`absolute cursor-pointer ${
                    zone.size === 'large' ? 'w-16 h-16' :
                    zone.size === 'medium' ? 'w-12 h-12' : 'w-8 h-8'
                  } ${
                    hoveredZone === zone.id 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500' 
                      : 'bg-white/30'
                  } rounded-full flex items-center justify-center transition-all duration-300`}
                  style={{ 
                    left: `${zone.x}%`, 
                    top: `${zone.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <motion.div
                    animate={hoveredZone === zone.id ? {
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1]
                    } : {}}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="text-xs font-bold text-center text-white"
                  >
                    {zone.size === 'large' ? '🎵' : zone.size === 'medium' ? '🎭' : '✨'}
                  </motion.div>

                  {/* Zone Label */}
                  <AnimatePresence>
                    {hoveredZone === zone.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: -40, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        className="absolute bg-black/90 text-white px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap"
                      >
                        {zone.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Walking Paths */}
              <svg className="absolute inset-0 w-full h-full opacity-30">
                <defs>
                  <pattern id="walkingPath" patternUnits="userSpaceOnUse" width="10" height="10">
                    <circle cx="5" cy="5" r="1" fill="white" opacity="0.3"/>
                  </pattern>
                </defs>
                <path 
                  d="M 10% 80% Q 50% 60% 70% 35% T 90% 20%" 
                  stroke="url(#walkingPath)" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  d="M 30% 40% Q 60% 50% 80% 55%" 
                  stroke="url(#walkingPath)" 
                  strokeWidth="2" 
                  fill="none"
                />
              </svg>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-black/70 rounded-xl p-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  <span className="text-xs text-white">Main Attractions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <span className="text-xs text-white">Secondary Zones</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                  <span className="text-xs text-white">Service Areas</span>
                </div>
              </div>

              {/* Live Updates */}
              {/* <div className="absolute top-4 right-4 bg-green-500/20 rounded-xl p-3">
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold">Live Updates</span>
                </div>
                <p className="text-xs text-green-300 mt-1">3.2k people online</p>
              </div> */}
            </div>

            {/* <div className="mt-6 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Download Interactive Map
              </motion.button>
            </div> */}
          </div>
        </motion.div>

        {/* Enhanced Schedule Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-black tracking-tight mb-8 text-center">
            {selectedDay === 'day1' ? 'DAY 1' : 'DAY 2'} SCHEDULE
          </h3>
          
          <div className="glass-effect rounded-3xl p-8">
            <div className="space-y-4">
              {schedule[selectedDay].map((item, index) => (
                <motion.div
                  key={`${selectedDay}-${index}`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-6 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-2xl font-black text-white/60 min-w-[100px]">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg group-hover:text-white/90 transition-colors">
                      {item.event}
                    </h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{item.zone}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-black tracking-tight mb-12 text-center">
            WHAT PEOPLE SAY
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="glass-effect rounded-3xl p-8 text-center"
              >
                {/* Avatar */}
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <Users className="w-10 h-10 text-white/60" />
                </div>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 italic mb-6 leading-relaxed">
                  {testimonial.quote}&quot;
                </blockquote>

                {/* Author */}
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400 mb-2">{testimonial.role}</p>
                  <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                    {testimonial.experience}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Background Animation */}
          <div className="absolute inset-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.1, 0.3, 0.1],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 1.6
                }}
                className="absolute w-32 h-32 border border-white/10 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${20 + i * 10}%`
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full mx-auto mb-8 flex items-center justify-center"
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-4xl font-black tracking-tight mb-6">
              READY FOR THE EXPERIENCE?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join thousands of culture enthusiasts for an unforgettable weekend where African creativity takes center stage. 
              Music, fashion, art, food, and community - all in one epic celebration.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-3"
              >
                <Play className="w-6 h-6" />
                <span>Watch Recap Video</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 px-10 py-4 rounded-2xl font-bold text-lg hover:border-white/50 hover:bg-white/5 transition-all duration-300 flex items-center space-x-3"
              >
                <Volume2 className="w-6 h-6" />
                <span>Join Waitlist 2026</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}