/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Eye, Camera, Sparkles, Palette, Heart, Share2, Download, Zap, Crown, Star, Shirt, Users, TrendingUp, Filter, Grid, List, Play, Pause, Volume2, Instagram, Twitter, Youtube, BookOpen, Scissors, Paintbrush, Shuffle, RotateCcw, Maximize2, ChevronLeft, ChevronRight, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function StyleGuide() {
  const [selectedLook, setSelectedLook] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'looks' | 'palette' | 'trends' | 'collabs'>('looks')
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid')
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [likedLooks, setLikedLooks] = useState<Set<string>>(new Set())
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [selectedTrend, setSelectedTrend] = useState<string>('all')
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false)
  const [customPalette, setCustomPalette] = useState<string[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const looks = [
    {
      id: 'street-luxe',
      title: 'STREET LUXE',
      subtitle: 'High-End Meets Street',
      description: 'Luxurious streetwear that blends high-fashion elements with urban aesthetics. Think premium fabrics, bold silhouettes, and statement accessories.',
      image: '/api/placeholder/400/600',
      gallery: ['/api/placeholder/400/600', '/api/placeholder/400/650', '/api/placeholder/400/580', '/api/placeholder/400/620'],
      tags: ['oversized', 'bold-prints', 'statement-accessories', 'premium-materials'],
      colors: ['#000000', '#FFFFFF', '#C41E3A', '#FFD700'],
      styleElements: ['Oversized blazers', 'Chunky gold chains', 'Designer sneakers', 'Logo tees'],
      inspiration: 'Burna Boy x Louis Vuitton aesthetic',
      difficulty: 'Intermediate',
      budget: '₵800-2000',
      trending: false,
      featured: false,
      category: 'streetwear',
      mood: 'confident',
      occasion: 'festival-nights'
    },
    {
      id: 'afrofuturism',
      title: 'AFROFUTURISM',
      subtitle: 'Heritage Meets Technology',
      description: 'A bold fusion of traditional African elements with futuristic designs. Metallic accents, geometric patterns, and tech-inspired accessories.',
      image: '/api/placeholder/400/600',
      gallery: ['/api/placeholder/400/600', '/api/placeholder/400/650', '/api/placeholder/400/580'],
      tags: ['metallic-accents', 'geometric-patterns', 'tech-inspired', 'cultural-fusion'],
      colors: ['#C0C0C0', '#000000', '#4169E1', '#FF6347'],
      styleElements: ['Metallic fabrics', 'Geometric jewelry', 'Tech accessories', 'Traditional prints'],
      inspiration: 'Black Panther meets cyberpunk',
      difficulty: 'Advanced',
      budget: '₵600-1500',
      trending: false,
      featured: false,
      category: 'avant-garde',
      mood: 'futuristic',
      occasion: 'statement-making'
    },
    {
      id: 'minimalist-chic',
      title: 'MINIMALIST CHIC',
      subtitle: 'Less is More',
      description: 'Clean lines, neutral tones, and impeccable tailoring. Focus on quality over quantity with timeless pieces that make a subtle statement.',
      image: '/api/placeholder/400/600',
      gallery: ['/api/placeholder/400/600', '/api/placeholder/400/650'],
      tags: ['clean-lines', 'neutral-tones', 'quality-fabrics', 'timeless'],
      colors: ['#FFFFFF', '#000000', '#F5F5DC', '#808080'],
      styleElements: ['Tailored pieces', 'Neutral palette', 'Simple accessories', 'Quality fabrics'],
      inspiration: 'Scandinavian minimalism with African touches',
      difficulty: 'Beginner',
      budget: '₵400-800',
      trending: false,
      featured: false,
      category: 'minimalist',
      mood: 'sophisticated',
      occasion: 'day-events'
    },
    {
      id: 'cultural-fusion',
      title: 'CULTURAL FUSION',
      subtitle: 'Traditional Meets Contemporary',
      description: 'Modern interpretations of traditional African garments. Kente patterns, dashiki elements, and contemporary silhouettes create stunning cultural fusion.',
      image: '/api/placeholder/400/600',
      gallery: ['/api/placeholder/400/600', '/api/placeholder/400/650', '/api/placeholder/400/580', '/api/placeholder/400/620'],
      tags: ['kente-patterns', 'dashiki-elements', 'cultural-heritage', 'modern-silhouettes'],
      colors: ['#228B22', '#FFD700', '#DC143C', '#000000'],
      styleElements: ['Kente accents', 'Modern cuts', 'Traditional jewelry', 'Contemporary fits'],
      inspiration: 'Ancestral wisdom meets modern expression',
      difficulty: 'Intermediate',
      budget: '₵500-1200',
      trending: false,
      featured: false,
      category: 'cultural',
      mood: 'proud',
      occasion: 'cultural-celebrations'
    },
    {
      id: 'neon-rebel',
      title: 'NEON REBEL',
      subtitle: 'Electric Energy',
      description: 'Bold neon colors, reflective materials, and rebellious attitude. Perfect for night events and making an unforgettable impression.',
      image: '/api/placeholder/400/600',
      gallery: ['/api/placeholder/400/600', '/api/placeholder/400/650', '/api/placeholder/400/580'],
      tags: ['neon-colors', 'reflective-materials', 'bold-attitude', 'night-ready'],
      colors: ['#39FF14', '#FF1493', '#00FFFF', '#000000'],
      styleElements: ['Neon accessories', 'Reflective details', 'Bold makeup', 'Statement shoes'],
      inspiration: 'Rave culture meets African energy',
      difficulty: 'Advanced',
      budget: '₵300-700',
      trending: false,
      featured: false,
      category: 'experimental',
      mood: 'energetic',
      occasion: 'night-parties'
    },
    {
      id: 'vintage-revival',
      title: 'VINTAGE REVIVAL',
      subtitle: '70s African Renaissance',
      description: 'Inspired by the golden age of African fashion in the 70s. Wide-leg pants, bold prints, and vintage accessories with a modern twist.',
      image: '/api/placeholder/400/600',
      gallery: ['/api/placeholder/400/600', '/api/placeholder/400/650', '/api/placeholder/400/580', '/api/placeholder/400/620'],
      tags: ['vintage-inspired', '70s-silhouettes', 'bold-prints', 'retro-accessories'],
      colors: ['#8B4513', '#DAA520', '#CD853F', '#FFFAF0'],
      styleElements: ['Wide-leg pants', 'Vintage prints', 'Statement jewelry', 'Retro sunglasses'],
      inspiration: 'Fela Kuti era fashion revival',
      difficulty: 'Intermediate',
      budget: '₵350-900',
      trending: false,
      featured: false,
      category: 'vintage',
      mood: 'nostalgic',
      occasion: 'artistic-events'
    },
    {
      id: 'sustainable-warrior',
      title: 'SUSTAINABLE WARRIOR',
      subtitle: 'Eco-Conscious Fashion',
      description: 'Environmentally conscious fashion choices that don\'t compromise on style. Upcycled pieces, organic fabrics, and ethical brands.',
      image: '/api/placeholder/400/600',
      gallery: ['/api/placeholder/400/600', '/api/placeholder/400/650', '/api/placeholder/400/580'],
      tags: ['eco-friendly', 'upcycled', 'organic-fabrics', 'ethical-brands'],
      colors: ['#228B22', '#DEB887', '#F4A460', '#FFFFFF'],
      styleElements: ['Upcycled denim', 'Organic cotton', 'Natural fibers', 'Eco accessories'],
      inspiration: 'Mother Earth meets conscious fashion',
      difficulty: 'Beginner',
      budget: '₵200-600',
      trending: false,
      featured: false,
      category: 'sustainable',
      mood: 'mindful',
      occasion: 'conscious-living'
    },
    {
      id: 'festival-ready',
      title: 'FESTIVAL READY',
      subtitle: 'Comfort Meets Style',
      description: 'Practical yet stylish outfits designed for dancing, socializing, and enjoying long festival days. Comfortable fabrics with eye-catching details.',
      image: '/api/placeholder/400/600',
      gallery: ['/api/placeholder/400/600', '/api/placeholder/400/650', '/api/placeholder/400/580', '/api/placeholder/400/620'],
      tags: ['comfortable', 'practical', 'eye-catching', 'dance-ready'],
      colors: ['#FF69B4', '#32CD32', '#FFD700', '#FFFFFF'],
      styleElements: ['Comfortable footwear', 'Crossbody bags', 'Breathable fabrics', 'Statement pieces'],
      inspiration: 'Festival veteran meets fashion enthusiast',
      difficulty: 'Beginner',
      budget: '₵250-500',
      trending: false,
      featured: false,
      category: 'festival',
      mood: 'fun',
      occasion: 'festival-days'
    }
  ]

  const moodBoard = [
    { 
      color: '#000000', 
      name: 'Midnight Black', 
      description: 'Bold and powerful',
      usage: 'Base color for statement pieces',
      psychology: 'Confidence, Mystery, Elegance'
    },
    { 
      color: '#FFFFFF', 
      name: 'Pure White', 
      description: 'Clean and fresh',
      usage: 'Perfect for layering and contrast',
      psychology: 'Purity, Minimalism, Clarity'
    },
    { 
      color: '#FFD700', 
      name: 'Festival Gold', 
      description: 'Luxurious accent',
      usage: 'Jewelry and metallic details',
      psychology: 'Wealth, Success, Celebration'
    },
    { 
      color: '#DC143C', 
      name: 'Heritage Red', 
      description: 'Cultural significance',
      usage: 'Traditional pattern accents',
      psychology: 'Passion, Strength, Heritage'
    },
    { 
      color: '#228B22', 
      name: 'Forest Green', 
      description: 'Natural energy',
      usage: 'Sustainable and organic pieces',
      psychology: 'Growth, Harmony, Nature'
    },
    { 
      color: '#4169E1', 
      name: 'Royal Blue', 
      description: 'Regal presence',
      usage: 'Statement outerwear',
      psychology: 'Trust, Stability, Royalty'
    },
    { 
      color: '#FF69B4', 
      name: 'Electric Pink', 
      description: 'Youthful vibrance',
      usage: 'Accessories and details',
      psychology: 'Creativity, Youth, Energy'
    },
    { 
      color: '#C0C0C0', 
      name: 'Metallic Silver', 
      description: 'Futuristic edge',
      usage: 'Tech-inspired accessories',
      psychology: 'Innovation, Modern, Sophisticated'
    }
  ]

  const trendCategories = [
    { id: 'all', name: 'All Trends', count: looks.length },
    { id: 'streetwear', name: 'Streetwear', count: looks.filter(l => l.category === 'streetwear').length },
    { id: 'cultural', name: 'Cultural', count: looks.filter(l => l.category === 'cultural').length },
    { id: 'sustainable', name: 'Sustainable', count: looks.filter(l => l.category === 'sustainable').length },
    { id: 'avant-garde', name: 'Avant-Garde', count: looks.filter(l => l.category === 'avant-garde').length },
    { id: 'festival', name: 'Festival', count: looks.filter(l => l.category === 'festival').length }
  ]

  const collaborations = [
    {
      id: 'jordan-fty',
      brand: 'JORDAN × FTY',
      piece: 'Limited Sneaker Collection',
      status: 'available',
      image: '/api/placeholder/300/200',
      description: 'Exclusive African-inspired colorways on classic Jordan silhouettes. Only 500 pairs worldwide.',
      priceRange: '₵400-600',
      dropDate: 'Available Now',
      designer: 'Tinker Hatfield',
      inspiration: 'Kente patterns meet basketball culture',
      sustainability: 'Limited production run'
    },
    {
      id: 'lids-fty',
      brand: 'LIDS × FTY',
      piece: 'Heritage Hat Collection',
      status: 'pre-order',
      image: '/api/placeholder/300/200',
      description: 'Premium headwear featuring traditional African patterns with modern streetwear aesthetics.',
      priceRange: '₵80-150',
      dropDate: 'June 1st',
      designer: 'Marcus Troy',
      inspiration: 'Traditional headwraps reimagined',
      sustainability: 'Organic cotton materials'
    },
    {
      id: 'studio189-fty',
      brand: 'STUDIO 189 × FTY',
      piece: 'Sustainable Capsule',
      status: 'coming-soon',
      image: '/api/placeholder/300/200',
      description: 'Ethically-made festival wear celebrating African artisans and sustainable fashion practices.',
      priceRange: '₵200-800',
      dropDate: 'October 1st',
      designer: 'Rosario Dawson & Abrima Erwiah',
      inspiration: 'Artisan craftsmanship meets modern design',
      sustainability: '100% ethical production'
    },
    {
      id: 'nike-fty',
      brand: 'NIKE × FTY',
      piece: 'Festival Performance Wear',
      status: 'concept',
      image: '/api/placeholder/300/200',
      description: 'High-performance athletic wear designed for festival dancing and long days. Moisture-wicking and style-forward.',
      priceRange: '₵150-400',
      dropDate: 'TBA 2025',
      designer: 'Nike Innovation Team',
      inspiration: 'Athletic performance meets festival fashion',
      sustainability: 'Recycled materials'
    }
  ]

  const filteredLooks = selectedTrend === 'all' 
    ? looks 
    : looks.filter(look => look.category === selectedTrend)

  const toggleLike = (id: string) => {
    const newLiked = new Set(likedLooks)
    if (newLiked.has(id)) {
      newLiked.delete(id)
    } else {
      newLiked.add(id)
    }
    setLikedLooks(newLiked)
  }

  const addToCustomPalette = (color: string) => {
    if (!customPalette.includes(color) && customPalette.length < 6) {
      setCustomPalette([...customPalette, color])
    }
  }

  const removeFromCustomPalette = (color: string) => {
    setCustomPalette(customPalette.filter(c => c !== color))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredLooks.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredLooks.length) % filteredLooks.length)
  }

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextSlide, 4000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, filteredLooks.length])

  return (
    <section ref={sectionRef} id="style" className="py-24 relative overflow-hidden">
      {/* Dynamic Background Animation */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 opacity-5"
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 12 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
            className="absolute border border-white"
            style={{
              left: `${5 + (i * 3) % 90}%`,
              top: `${5 + (i * 4) % 80}%`,
              width: `${15 + (i % 4) * 10}px`,
              height: `${15 + (i % 4) * 10}px`,
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0' : '25%'
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
              rotateY: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Palette className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
            STYLE<br />
            <span className="text-stroke">GUIDE</span>
          </h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Your ultimate fashion compass for Free the Youth Festival. Discover editorial-quality looks, 
            trending styles, and exclusive collaborations that celebrate African youth expression.
          </motion.p>

          {/* Interactive Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { id: 'looks', name: 'Festival Looks', icon: Eye },
              { id: 'palette', name: 'Color Palette', icon: Palette },
              { id: 'trends', name: 'Trend Report', icon: TrendingUp },
              { id: 'collabs', name: 'Collaborations', icon: Star }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-black shadow-2xl'
                    : 'border-2 border-white/30 hover:border-white/50 glass-effect'
                }`}
              >
                <tab.icon className="w-6 h-6" />
                <span>{tab.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {/* Festival Looks */}
          {activeTab === 'looks' && (
            <motion.div
              key="looks"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              {/* View Controls */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row items-center justify-between mb-12 space-y-4 md:space-y-0"
              >
                <div className="flex items-center space-x-4">
                  <motion.button
                    onClick={() => setViewMode(viewMode === 'grid' ? 'carousel' : 'grid')}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-white/10 border border-white/20 rounded-2xl hover:border-white/40 transition-colors"
                  >
                    {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
                    <span>{viewMode === 'grid' ? 'Carousel View' : 'Grid View'}</span>
                  </motion.button>

                  <motion.button
                    onClick={() => setIsPlaying(!isPlaying)}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-2xl transition-colors ${
                      isPlaying 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white/10 border border-white/20 hover:border-white/40'
                    }`}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    <span>{isPlaying ? 'Pause' : 'Auto Play'}</span>
                  </motion.button>
                </div>

                {/* Trend Filter */}
                <div className="flex flex-wrap gap-3">
                  {trendCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedTrend(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        selectedTrend === category.id
                          ? 'bg-white text-black'
                          : 'bg-white/10 border border-white/20 hover:border-white/40'
                      }`}
                    >
                      {category.name} ({category.count})
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Looks Display */}
              {viewMode === 'grid' ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {filteredLooks.map((look, index) => (
                    <motion.div
                      key={look.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.03, y: -10 }}
                      onClick={() => setSelectedLook(look.id)}
                      className="group relative overflow-hidden rounded-3xl glass-effect cursor-pointer"
                    >
                      {/* Look Image */}
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center"
                        >
                          <Eye className="w-16 h-16 text-white/40" />
                        </motion.div>

                        {/* Badges */}
                        <div className="absolute top-4 left-4 space-y-2">
                          {look.featured && (
                            <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
                              FEATURED
                            </span>
                          )}
                          {look.trending && (
                            <span className="text-xs px-3 py-1 rounded-full bg-red-500 text-white font-bold">
                              TRENDING
                            </span>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleLike(look.id)
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              likedLooks.has(look.id) 
                                ? 'bg-red-500 text-white' 
                                : 'bg-white/20 text-white hover:bg-white/30'
                            }`}
                          >
                            <Heart className={`w-5 h-5 ${likedLooks.has(look.id) ? 'fill-current' : ''}`} />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
                          >
                            <Share2 className="w-5 h-5 text-white" />
                          </motion.button>
                        </div>

                        {/* Color Palette */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex space-x-1">
                            {look.colors.slice(0, 4).map((color, idx) => (
                              <div
                                key={idx}
                                className="flex-1 h-2 rounded-full"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            className="text-center"
                          >
                            <Eye className="w-12 h-12 mx-auto mb-2" />
                            <p className="text-sm font-semibold">View Details</p>
                          </motion.div>
                        </div>
                      </div>

                      {/* Look Info */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-black tracking-tight">
                              {look.title}
                            </h3>
                            <p className="text-sm text-gray-400">{look.subtitle}</p>
                          </div>
                          <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                            {look.difficulty}
                          </span>
                        </div>

                        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                          {look.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {look.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{look.budget}</span>
                          <span className="capitalize">{look.mood}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Carousel View
                <div className="relative">
                  <div className="overflow-hidden rounded-3xl">
                    <motion.div 
                      className="flex"
                      animate={{ x: `${-currentSlide * 100}%` }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {filteredLooks.map((look, index) => (
                        <div key={look.id} className="w-full flex-shrink-0 p-8 glass-effect">
                          <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center">
                              <Eye className="w-24 h-24 text-white/40" />
                            </div>
                            <div className="space-y-6">
                              <div>
                                <h3 className="text-4xl font-black mb-2">{look.title}</h3>
                                <p className="text-xl text-gray-400 mb-4">{look.subtitle}</p>
                                <p className="text-gray-300 leading-relaxed">{look.description}</p>
                              </div>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-bold mb-2">Style Elements:</h4>
                                  <div className="grid grid-cols-2 gap-2">
                                    {look.styleElements.map((element) => (
                                      <div key={element} className="flex items-center space-x-2 text-sm">
                                        <Sparkles className="w-4 h-4 text-yellow-500" />
                                        <span>{element}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="flex space-x-1">
                                  {look.colors.map((color, idx) => (
                                    <div
                                      key={idx}
                                      className="w-8 h-8 rounded-full border-2 border-white/30"
                                      style={{ backgroundColor: color }}
                                    />
                                  ))}
                                </div>

                                <div className="flex items-center justify-between">
                                  <span className="font-bold">{look.budget}</span>
                                  <motion.button
                                    onClick={() => toggleLike(look.id)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                                      likedLooks.has(look.id) 
                                        ? 'bg-red-500 text-white' 
                                        : 'bg-white/10 hover:bg-white/20'
                                    }`}
                                  >
                                    <Heart className={`w-5 h-5 ${likedLooks.has(look.id) ? 'fill-current' : ''}`} />
                                    <span>Save Look</span>
                                  </motion.button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Carousel Controls */}
                  <div className="flex items-center justify-between mt-8">
                    <motion.button
                      onClick={prevSlide}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </motion.button>

                    <div className="flex space-x-2">
                      {filteredLooks.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            currentSlide === index ? 'bg-white' : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>

                    <motion.button
                      onClick={nextSlide}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Color Palette */}
          {activeTab === 'palette' && (
            <motion.div
              key="palette"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-12">
                {/* Festival Palette */}
                <div>
                  <h3 className="text-3xl font-black mb-8 text-center">FESTIVAL COLOR PALETTE</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {moodBoard.map((color, index) => (
                      <motion.div
                        key={color.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        onClick={() => setSelectedColor(color.color)}
                        className="group cursor-pointer"
                      >
                        <div className="space-y-4">
                          <div 
                            className="aspect-square rounded-3xl border-4 border-white/20 group-hover:border-white/60 transition-all duration-300 relative overflow-hidden"
                            style={{ backgroundColor: color.color }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Plus className="w-8 h-8 text-white drop-shadow-lg" />
                            </motion.div>
                          </div>
                          <div className="text-center space-y-2">
                            <h4 className="font-black text-lg">{color.name}</h4>
                            <p className="text-sm text-gray-400">{color.description}</p>
                            <p className="text-xs text-gray-500">{color.psychology}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Custom Palette Builder */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-effect rounded-3xl p-8"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-black mb-4">CREATE YOUR PALETTE</h3>
                    <p className="text-gray-300">Build your personal color story by selecting up to 6 colors</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-center space-x-4">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <div
                          key={index}
                          className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center"
                          style={{ 
                            backgroundColor: customPalette[index] || 'transparent' 
                          }}
                        >
                          {customPalette[index] ? (
                            <motion.button
                              onClick={() => removeFromCustomPalette(customPalette[index])}
                              whileHover={{ scale: 1.1 }}
                              className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center"
                            >
                              <Minus className="w-4 h-4 text-white" />
                            </motion.button>
                          ) : (
                            <Plus className="w-6 h-6 text-white/40" />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                      <motion.button
                        onClick={() => setCustomPalette([])}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 px-6 py-3 bg-red-500/20 text-red-400 rounded-2xl hover:bg-red-500/30"
                      >
                        <RotateCcw className="w-5 h-5" />
                        <span>Reset</span>
                      </motion.button>

                      <motion.button
                        onClick={() => setShowColorPicker(!showColorPicker)}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-2xl hover:bg-gray-200"
                      >
                        <Palette className="w-5 h-5" />
                        <span>Color Picker</span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 px-6 py-3 bg-green-500/20 text-green-400 rounded-2xl hover:bg-green-500/30"
                      >
                        <Download className="w-5 h-5" />
                        <span>Save Palette</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Trend Report */}
          {activeTab === 'trends' && (
            <motion.div
              key="trends"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-12">
                <div className="text-center">
                  <h3 className="text-3xl font-black mb-6">TREND FORECAST 2025</h3>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    What&apos;s hot in African youth fashion. From street style to high fashion, 
                    discover the trends shaping the cultural landscape.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: 'TECH-WEAR FUSION',
                      description: 'Wearable technology meets traditional African aesthetics',
                      percentage: 85,
                      color: 'from-blue-500 to-cyan-500',
                      items: ['Smart fabrics', 'LED accessories', 'App-connected jewelry', 'Digital prints']
                    },
                    {
                      title: 'SUSTAINABLE LUXURY',
                      description: 'High-end fashion with ethical and environmental consciousness',
                      percentage: 92,
                      color: 'from-green-500 to-emerald-500',
                      items: ['Organic materials', 'Upcycled designs', 'Zero-waste patterns', 'Local artisans']
                    },
                    {
                      title: 'NEO-TRADITIONALISM',
                      description: 'Modern reinterpretations of traditional African garments',
                      percentage: 78,
                      color: 'from-orange-500 to-red-500',
                      items: ['Modern dashiki', 'Updated agbada', 'Tech kente', 'Urban headwraps']
                    }
                  ].map((trend, index) => (
                    <motion.div
                      key={trend.title}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="glass-effect rounded-3xl p-8 relative overflow-hidden"
                    >
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${trend.color} rounded-full opacity-20 transform translate-x-6 -translate-y-6`} />
                      
                      <div className="relative z-10">
                        <h4 className="text-xl font-black mb-4">{trend.title}</h4>
                        <p className="text-sm text-gray-300 mb-6">{trend.description}</p>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold">Trend Score</span>
                            <span className="text-lg font-black">{trend.percentage}%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${trend.percentage}%` }}
                              transition={{ duration: 1, delay: index * 0.3 }}
                              className={`h-2 bg-gradient-to-r ${trend.color} rounded-full`}
                            />
                          </div>
                          
                          <div className="space-y-2 mt-6">
                            {trend.items.map((item) => (
                              <div key={item} className="flex items-center space-x-2 text-sm">
                                <TrendingUp className="w-4 h-4 text-green-500" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Collaborations */}
          {activeTab === 'collabs' && (
            <motion.div
              key="collabs"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-12">
                <div className="text-center">
                  <h3 className="text-3xl font-black mb-6">EXCLUSIVE COLLABORATIONS</h3>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Limited-edition pieces created in partnership with iconic brands, 
                    exclusively for Free the Youth festival attendees and culture enthusiasts.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {collaborations.map((collab, index) => (
                    <motion.div
                      key={collab.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass-effect rounded-3xl overflow-hidden group cursor-pointer"
                    >
                      {/* Collaboration Image */}
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                          <Star className="w-16 h-16 text-white/40" />
                        </div>
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 right-4">
                          <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                            collab.status === 'available' ? 'bg-green-500 text-white' :
                            collab.status === 'pre-order' ? 'bg-yellow-500 text-black' :
                            collab.status === 'coming-soon' ? 'bg-blue-500 text-white' :
                            'bg-gray-500 text-white'
                          }`}>
                            {collab.status.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            className="text-center"
                          >
                            <Eye className="w-12 h-12 mx-auto mb-2" />
                            <p className="text-sm font-semibold">View Collection</p>
                          </motion.div>
                        </div>
                      </div>

                      {/* Collaboration Details */}
                      <div className="p-8 space-y-4">
                        <div>
                          <h4 className="text-2xl font-black mb-2">{collab.brand}</h4>
                          <p className="text-lg text-gray-400 mb-4">{collab.piece}</p>
                          <p className="text-sm text-gray-300 leading-relaxed">{collab.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Price Range:</span>
                            <p className="font-semibold">{collab.priceRange}</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Drop Date:</span>
                            <p className="font-semibold">{collab.dropDate}</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Designer:</span>
                            <p className="font-semibold">{collab.designer}</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Inspiration:</span>
                            <p className="font-semibold text-xs">{collab.inspiration}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 p-3 bg-green-500/20 rounded-xl">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-xs text-green-400 font-semibold">{collab.sustainability}</span>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full py-3 rounded-2xl font-semibold transition-colors ${
                            collab.status === 'available' ? 'bg-white text-black hover:bg-gray-200' :
                            collab.status === 'pre-order' ? 'bg-yellow-500 text-black hover:bg-yellow-600' :
                            'bg-white/20 border border-white/30 hover:border-white/50'
                          }`}
                        >
                          {collab.status === 'available' ? 'Shop Now' :
                           collab.status === 'pre-order' ? 'Pre-Order' :
                           collab.status === 'coming-soon' ? 'Notify Me' :
                           'Learn More'}
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 glass-effect rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Background Animation */}
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 2.5, 1],
                  opacity: [0.1, 0.4, 0.1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  delay: i * 1.5
                }}
                className="absolute w-24 h-24 border border-white rounded-full"
                style={{
                  left: `${15 + i * 10}%`,
                  top: `${25 + (i % 3) * 15}%`
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-20 h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full mx-auto mb-8 flex items-center justify-center"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-4xl font-black tracking-tight mb-6">
              FIND YOUR FESTIVAL STYLE
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Ready to make a statement? Get personalized style recommendations, shop exclusive pieces, 
              and join the fashion revolution at Free the Youth Festival 2025.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center space-x-3"
              >
                <ShoppingBag className="w-6 h-6" />
                <span>Shop Looks</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}