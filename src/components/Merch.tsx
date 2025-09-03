/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Clock, Truck, Star, Heart, Share2, Eye, Zap, Gift, Camera, Palette, Shirt, Crown, Sparkles, ArrowRight, Filter, Search, Grid, List, ShoppingCart, Check, X, Plus, Minus, RotateCcw, Maximize, Smartphone, Monitor, Headphones, Music } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Merch() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedDrop, setSelectedDrop] = useState<string>('pre-festival')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({})
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set())
  const [arMode, setArMode] = useState<boolean>(false)
  const [selectedSize, setSelectedSize] = useState<string>('M')
  const [selectedColor, setSelectedColor] = useState<string>('black')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const merchItems = [
    {
      id: 'festival-tee-burna',
      name: 'BURNA BOY X FTY TEE',
      price: '₵120',
      originalPrice: '₵150',
      category: 'artist-collab',
      drop: 'pre-festival',
      type: 'Limited Edition',
      image: '/api/placeholder/400/500',
      gallery: ['/api/placeholder/400/500', '/api/placeholder/400/600', '/api/placeholder/400/550'],
      description: 'Premium organic cotton tee featuring exclusive Burna Boy artwork created specifically for Free the Youth Festival.',
      features: ['100% Organic Cotton', 'Screen-printed Graphics', 'Unisex Fit', 'Limited to 500 pieces'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: [
        { name: 'black', hex: '#000000' },
        { name: 'white', hex: '#FFFFFF' },
        { name: 'festival-red', hex: '#DC2626' }
      ],
      preOrder: false,
      stock: 127,
      rating: 4.8,
      reviews: 234,
      artist: 'Burna Boy',
      sustainability: 'Carbon Neutral',
      arSupported: true,
      trending: false,
      newArrival: false,
      tags: ['burna-boy', 'afrobeats', 'limited-edition', 'concert-tee']
    },
    {
      id: 'designer-hoodie-studio189',
      name: 'STUDIO 189 HERITAGE HOODIE',
      price: '₵280',
      originalPrice: '₵320',
      category: 'designer-collab',
      drop: 'pre-festival',
      type: 'Designer Collab',
      image: '/api/placeholder/400/500',
      gallery: ['/api/placeholder/400/500', '/api/placeholder/400/600', '/api/placeholder/400/550'],
      description: 'Sustainable hoodie featuring traditional Kente-inspired patterns reimagined for modern streetwear.',
      features: ['Recycled Cotton Blend', 'Kente Print Details', 'Oversized Fit', 'Made in Ghana'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: [
        { name: 'earth-brown', hex: '#8B4513' },
        { name: 'forest-green', hex: '#228B22' },
        { name: 'royal-gold', hex: '#FFD700' }
      ],
      preOrder: false,
      stock: 89,
      rating: 4.9,
      reviews: 156,
      designer: 'Studio 189',
      sustainability: '100% Ethical',
      arSupported: true,
      trending: false,
      newArrival: false,
      tags: ['studio189', 'sustainable', 'kente', 'hoodie', 'heritage']
    },
    {
      id: 'bucket-hat-reversible',
      name: 'REVERSIBLE FESTIVAL BUCKET HAT',
      price: '₵85',
      originalPrice: '₵100',
      category: 'accessories',
      drop: 'festival-exclusive',
      type: 'Festival Exclusive',
      image: '/api/placeholder/400/500',
      gallery: ['/api/placeholder/400/500', '/api/placeholder/400/600'],
      description: 'Double-sided bucket hat with festival branding on one side and abstract African pattern on reverse.',
      features: ['Reversible Design', 'UV Protection', 'Water Resistant', 'Adjustable Chin Strap'],
      sizes: ['One Size'],
      colors: [
        { name: 'black-gold', hex: '#000000' },
        { name: 'white-red', hex: '#FFFFFF' },
        { name: 'camo-orange', hex: '#8FBC8F' }
      ],
      preOrder: false,
      stock: 203,
      rating: 4.7,
      reviews: 89,
      sustainability: 'Recycled Materials',
      arSupported: true,
      trending: false,
      newArrival: false,
      tags: ['bucket-hat', 'reversible', 'festival', 'sun-protection']
    },
    {
      id: 'tote-bag-eco',
      name: 'ECO-FRIENDLY FESTIVAL TOTE',
      price: '₵65',
      originalPrice: '₵75',
      category: 'accessories',
      drop: 'pre-festival',
      type: 'Eco-Friendly',
      image: '/api/placeholder/400/500',
      gallery: ['/api/placeholder/400/500', '/api/placeholder/400/600'],
      description: 'Sustainable canvas tote made from recycled materials with minimalist festival branding.',
      features: ['100% Recycled Canvas', 'Reinforced Handles', 'Large Capacity', 'Machine Washable'],
      sizes: ['One Size'],
      colors: [
        { name: 'natural', hex: '#F5F5DC' },
        { name: 'black', hex: '#000000' },
        { name: 'sage-green', hex: '#9CAF88' }
      ],
      preOrder: false,
      stock: 445,
      rating: 4.6,
      reviews: 312,
      sustainability: '100% Recycled',
      arSupported: false,
      trending: false,
      newArrival: false,
      tags: ['tote-bag', 'eco-friendly', 'sustainable', 'canvas']
    },
    {
      id: 'sneakers-jordan-fty',
      name: 'JORDAN X FTY LIMITED SNEAKERS',
      price: '₵450',
      originalPrice: '₵500',
      category: 'footwear',
      drop: 'festival-exclusive',
      type: 'Ultimate Limited',
      image: '/api/placeholder/400/500',
      gallery: ['/api/placeholder/400/500', '/api/placeholder/400/600', '/api/placeholder/400/550', '/api/placeholder/400/580'],
      description: 'Exclusive Jordan collaboration featuring African-inspired colorway and Free the Youth branding. Only 200 pairs worldwide.',
      features: ['Air Jordan Technology', 'African Colorway', 'Premium Materials', 'Numbered Edition'],
      sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
      colors: [
        { name: 'ghana-flag', hex: '#CE1126' },
        { name: 'gold-black', hex: '#FFD700' }
      ],
      preOrder: false,
      stock: 23,
      rating: 5.0,
      reviews: 67,
      collaboration: 'Jordan Brand',
      sustainability: 'Limited Production',
      arSupported: true,
      trending: false,
      newArrival: false,
      tags: ['jordan', 'sneakers', 'limited-edition', 'collaboration', 'numbered']
    },
    {
      id: 'crop-top-amaarae',
      name: 'AMAARAE ANGELS CROP TOP',
      price: '₵95',
      originalPrice: '₵110',
      category: 'artist-collab',
      drop: 'pre-festival',
      type: 'Artist Collection',
      image: '/api/placeholder/400/500',
      gallery: ['/api/placeholder/400/500', '/api/placeholder/400/600'],
      description: 'Ethereal crop top inspired by Amaarae\'s "Angels in Tibet" featuring celestial graphics and metallic accents.',
      features: ['Soft Cotton Blend', 'Metallic Print', 'Fitted Cut', 'Artist Signature'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { name: 'angel-white', hex: '#FFFFFF' },
        { name: 'heaven-blue', hex: '#87CEEB' },
        { name: 'cosmic-black', hex: '#000000' }
      ],
      preOrder: false,
      stock: 156,
      rating: 4.8,
      reviews: 198,
      artist: 'Amaarae',
      sustainability: 'Eco-Conscious',
      arSupported: true,
      trending: false,
      newArrival: false,
      tags: ['amaarae', 'crop-top', 'angels', 'metallic', 'ethereal']
    },
    {
      id: 'festival-jacket',
      name: 'FESTIVAL WINDBREAKER',
      price: '₵180',
      originalPrice: '₵220',
      category: 'outerwear',
      drop: 'festival-exclusive',
      type: 'Weather Protection',
      image: '/api/placeholder/400/500',
      gallery: ['/api/placeholder/400/500', '/api/placeholder/400/600', '/api/placeholder/400/550'],
      description: 'Lightweight windbreaker perfect for festival weather with reflective details and multiple pockets.',
      features: ['Water Resistant', 'Reflective Details', 'Multiple Pockets', 'Packable Design'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: [
        { name: 'neon-green', hex: '#39FF14' },
        { name: 'electric-blue', hex: '#0080FF' },
        { name: 'sunset-orange', hex: '#FF6347' }
      ],
      preOrder: false,
      stock: 78,
      rating: 4.5,
      reviews: 134,
      sustainability: 'Recycled Polyester',
      arSupported: true,
      trending: false,
      newArrival: false,
      tags: ['windbreaker', 'festival', 'weather-protection', 'reflective']
    },
    {
      id: 'phone-case-fty',
      name: 'FTY FESTIVAL PHONE CASE',
      price: '₵45',
      originalPrice: '₵55',
      category: 'tech',
      drop: 'post-festival',
      type: 'Tech Accessory',
      image: '/api/placeholder/400/500',
      gallery: ['/api/placeholder/400/500', '/api/placeholder/400/600'],
      description: 'Protective phone case featuring festival graphics with built-in card holder and wireless charging compatibility.',
      features: ['Drop Protection', 'Card Holder', 'Wireless Charging', 'Multiple Phone Models'],
      sizes: ['iPhone 14/15', 'Samsung Galaxy', 'Google Pixel'],
      colors: [
        { name: 'matte-black', hex: '#000000' },
        { name: 'clear-frosted', hex: '#F0F0F0' },
        { name: 'festival-gradient', hex: '#FF6B6B' }
      ],
      preOrder: false,
      stock: 289,
      rating: 4.4,
      reviews: 156,
      sustainability: 'Recyclable',
      arSupported: false,
      trending: false,
      newArrival: false,
      tags: ['phone-case', 'protection', 'wireless-charging', 'card-holder']
    }
  ]

  const drops = [
    {
      id: 'pre-festival',
      title: 'PRE-FESTIVAL DROP',
      date: 'Available Now',
      status: 'active',
      description: 'Get festival-ready with our exclusive pre-event collection featuring artist collaborations and designer pieces.',
      color: 'from-green-500 to-emerald-500',
      icon: Zap,
      itemCount: merchItems.filter(item => item.drop === 'pre-festival').length
    },
    {
      id: 'festival-exclusive',
      title: 'FESTIVAL EXCLUSIVE',
      date: 'October 15-16 Only',
      status: 'upcoming',
      description: 'On-site exclusive items only available during the festival weekend. Limited quantities, maximum hype.',
      color: 'from-purple-500 to-pink-500',
      icon: Crown,
      itemCount: merchItems.filter(item => item.drop === 'festival-exclusive').length
    },
    {
      id: 'post-festival',
      title: 'MEMORY COLLECTION',
      date: 'October 20+',
      status: 'coming-soon',
      description: 'Commemorative pieces for those who experienced the magic or missed out on the festival weekend.',
      color: 'from-orange-500 to-red-500',
      icon: Gift,
      itemCount: merchItems.filter(item => item.drop === 'post-festival').length
    }
  ]

  const categories = [
    { id: 'all', name: 'All Items', icon: Grid },
    { id: 'artist-collab', name: 'Artist Collabs', icon: Music },
    { id: 'designer-collab', name: 'Designer Pieces', icon: Palette },
    { id: 'accessories', name: 'Accessories', icon: Crown },
    { id: 'footwear', name: 'Footwear', icon: Shirt },
    { id: 'outerwear', name: 'Outerwear', icon: ShoppingBag },
    { id: 'tech', name: 'Tech', icon: Smartphone }
  ]

  const filteredItems = merchItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesDrop = selectedDrop === 'all' || item.drop === selectedDrop
    return matchesCategory && matchesDrop
  })

  const toggleLike = (id: string) => {
    const newLiked = new Set(likedItems)
    if (newLiked.has(id)) {
      newLiked.delete(id)
    } else {
      newLiked.add(id)
    }
    setLikedItems(newLiked)
  }

  const addToCart = (id: string) => {
    setCartItems(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }))
  }

  const removeFromCart = (id: string) => {
    setCartItems(prev => {
      const newCart = { ...prev }
      if (newCart[id] > 1) {
        newCart[id] -= 1
      } else {
        delete newCart[id]
      }
      return newCart
    })
  }

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((sum, count) => sum + count, 0)
  }

  const ProductCard = ({ item, index }: { item: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      // onHoverStart={() => setHoveredProduct(item.id)}
      onHoverEnd={() => setHoveredProduct(null)}
      className="group relative overflow-hidden rounded-3xl glass-effect bg-white/5 cursor-pointer"
    >
      {/* Product Image Container */}
      <div className="aspect-[3/4] relative overflow-hidden">
        {/* Main Image */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative"
        >
          <ShoppingBag className="w-16 h-16 text-white/40" />

          {/* Overlay Effects */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />


          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            {item.newArrival && (
              <span className="text-xs px-3 py-1 rounded-full bg-green-500 text-white font-bold">
                NEW
              </span>
            )}
            {item.trending && (
              <span className="text-xs px-3 py-1 rounded-full bg-red-500 text-white font-bold">
                TRENDING
              </span>
            )}
            {item.preOrder && (
              <span className="text-xs px-3 py-1 rounded-full bg-yellow-500 text-black font-bold">
                PRE-ORDER
              </span>
            )}
            {item.stock < 50 && (
              <span className="text-xs px-3 py-1 rounded-full bg-orange-500 text-white font-bold">
                LOW STOCK
              </span>
            )}
          </div>

          {/* Stock Indicator */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-xs text-white/80 mb-2">
              <span>Stock: {item.stock}</span>
              <span>{item.rating} ⭐ ({item.reviews})</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-1">
              <div
                className="bg-white rounded-full h-1 transition-all duration-300"
                style={{ width: `${(item.stock / 500) * 100}%` }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-black text-lg tracking-tight line-clamp-2">
                {item.name}
              </h3>
              <p className="text-sm text-gray-400">{item.type}</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-black">{item.price}</div>
              {item.originalPrice && (
                <div className="text-sm text-gray-500 line-through">{item.originalPrice}</div>
              )}
            </div>
          </div>

          {/* Artist/Designer Credit */}
          {(item.artist || item.designer) && (
            <div className="text-xs text-gray-400 mb-3">
              by {item.artist || item.designer}
            </div>
          )}
        </div>

        {/* Color Options */}
        <div className="flex items-center space-x-3">
          <span className="text-xs text-gray-400">Colors:</span>
          <div className="flex space-x-2">
            {item.colors.slice(0, 3).map((color: any) => (
              <div
                key={color.name}
                className="w-6 h-6 rounded-full border-2 border-white/30 cursor-pointer hover:border-white/60 transition-colors"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {item.colors.length > 3 && (
              <div className="w-6 h-6 rounded-full border-2 border-white/30 bg-white/10 flex items-center justify-center">
                <span className="text-xs text-white">+{item.colors.length - 3}</span>
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-1">
          {item.features.slice(0, 2).map((feature: string) => (
            <div key={feature} className="flex items-center space-x-2 text-sm text-gray-400">
              <Check className="w-4 h-4 text-green-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Sustainability Badge */}
        {item.sustainability && (
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-500/20 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-xs text-green-400 font-semibold">{item.sustainability}</span>
          </div>
        )}

        {/* Add to Cart */}
        <div className="flex items-center space-x-3">
          {cartItems[item.id] ? (
            <div className="flex items-center space-x-3 flex-1">
              <motion.button
                onClick={() => removeFromCart(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
              >
                <Minus className="w-5 h-5" />
              </motion.button>
              <span className="text-lg font-bold">{cartItems[item.id]}</span>
              <motion.button
                onClick={() => addToCart(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
              >
                <Plus className="w-5 h-5" />
              </motion.button>
            </div>
          ) : (
            <motion.button
              // onClick={}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onTap={() => window.open("https://freetheyouth.net/", "_blank")}
              className="flex-1 bg-white text-black py-3 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Shop Collection
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="merch" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 25 }).map((_, i) => (
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
              width: `${20 + (i % 5) * 10}px`,
              height: `${20 + (i % 5) * 10}px`,
              borderRadius: i % 4 === 0 ? '50%' : '0'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">
            CAPSULE<br />
            <span className="text-stroke">COLLECTION</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Limited drops tied to the festival. Exclusive pieces that celebrate the intersection of music, fashion, and culture.
            Each item tells a story of African creativity and youth expression.
          </p>

          {/* Shopping Cart Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center space-x-4 glass-effect px-6 py-3 rounded-2xl"
          >
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold"
                >
                  {getTotalItems()}
                </motion.div>
              )}
            </div>
            <span className="text-sm font-semibold">
              {getTotalItems()} items in cart
            </span>
          </motion.div>
        </motion.div>

        {/* Drop Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {drops.map((drop, index) => (
            <motion.div
              key={drop.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setSelectedDrop(drop.id)}
              className={`relative p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer ${selectedDrop === drop.id
                ? 'border-white bg-white text-black'
                : 'border-white/20 glass-effect hover:border-white/40'
                }`}
            >
              {/* Background Gradient */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                className={`absolute inset-0 bg-gradient-to-br ${drop.color} rounded-3xl`}
              />

              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`inline-block p-4 bg-gradient-to-r ${drop.color} rounded-2xl mb-6`}
                >
                  <drop.icon className="w-8 h-8 text-white" />
                </motion.div>

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-black tracking-tight">
                    {drop.title}
                  </h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-bold ${drop.status === 'active' ? 'bg-green-500 text-white' :
                    drop.status === 'upcoming' ? 'bg-yellow-500 text-black' :
                      'bg-gray-500 text-white'
                    }`}>
                    {drop.date}
                  </span>
                </div>

                <p className={`text-sm mb-4 ${selectedDrop === drop.id ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                  {drop.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">
                    {drop.itemCount} items
                  </span>
                  <ArrowRight className={`w-5 h-5 ${selectedDrop === drop.id ? 'text-black' : 'text-white'
                    }`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mb-12"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-white text-black'
                  : 'bg-white/10 border border-white/20 hover:border-white/40'
                  }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className={
          viewMode === 'grid'
            ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            : "space-y-8"
        }>
          {filteredItems.map((item, index) => (
            <ProductCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <ShoppingBag className="w-16 h-16 text-white/40 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">No items found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your filters or check back later for new drops.</p>
            <motion.button
              onClick={() => {
                setSelectedCategory('all')
                setSelectedDrop('pre-festival')
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-8 py-3 rounded-2xl font-semibold"
            >
              Reset Filters
            </motion.button>
          </motion.div>
        )}

        {/* Shopping Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 glass-effect rounded-3xl p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto flex items-center justify-center"
              >
                <ShoppingBag className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-black tracking-tight">PRE-ORDER ONLINE</h3>
              <p className="text-sm text-gray-400">
                Order now, pick up on-site or have it shipped after the festival
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto flex items-center justify-center"
              >
                <Truck className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-black tracking-tight">ON-SITE PICKUP</h3>
              <p className="text-sm text-gray-400">
                Dedicated merchandise booths throughout the festival grounds
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center"
              >
                <Clock className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-black tracking-tight">LIMITED QUANTITIES</h3>
              <p className="text-sm text-gray-400">
                All items are limited edition - once they&apos;re gone, they&apos;re gone forever
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto flex items-center justify-center"
              >
                <Camera className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-black tracking-tight">AR TRY-ON</h3>
              <p className="text-sm text-gray-400">
                Virtual fitting room technology for supported items before you buy
              </p>
            </div>
          </div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-12 mb-8"
          />

          <div className="text-center space-y-6">
            <h3 className="text-2xl font-black">EXCLUSIVE FESTIVAL PERKS</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>VIP early access to drops</span>
              </div>
              <div className="flex items-center space-x-3">
                <Gift className="w-5 h-5 text-purple-500" />
                <span>Surprise items in VIP packages</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Artist meet & greet opportunities</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onTap={() => window.open("https://freetheyouth.net/", "_blank")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              SHOP COLLECTION
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}