'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ShoppingBag, Instagram, Music, Pause, Volume2, Heart, Share2, Filter, Search, Users, Star, Calendar, MapPin } from 'lucide-react'

export default function Lineup() {
  const [activeTab, setActiveTab] = useState<'artists' | 'designers'>('artists')
  const [selectedGenre, setSelectedGenre] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [playingTrack, setPlayingTrack] = useState<string | null>(null)
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set())
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid')

  const artists = [
    {
      id: 'amaarae',
      name: 'AMAARAE',
      type: 'Headliner',
      genre: 'Afropop',
      image: '/api/placeholder/400/500',
      bio: 'Ghanaian-American singer redefining Afropop with her ethereal sound and bold fashion choices.',
      collab: 'Limited Edition Tees',
      collaborationPrice: '₵85',
      social: '@amaarae',
      followers: '2.1M',
      topSong: 'Angels in Tibet',
      performanceTime: 'Day 1 - 9:30 PM',
      stage: 'Main Stage',
      stats: { streams: '50M+', awards: '3', collaborations: '12' },
      fashionStyle: 'Futuristic Streetwear',
      preview: '/audio/amaarae-preview.mp3'
    },
    {
      id: 'burna',
      name: 'BURNA BOY',
      type: 'Headliner',
      genre: 'Afrobeats',
      image: '/api/placeholder/400/500',
      bio: 'Grammy-winning Nigerian superstar bringing Afrobeats to the global stage.',
      collab: 'Exclusive Cap Collection',
      collaborationPrice: '₵120',
      social: '@burnaboygram',
      followers: '12.3M',
      topSong: 'Last Last',
      performanceTime: 'Day 2 - 10:00 PM',
      stage: 'Main Stage',
      stats: { streams: '2B+', awards: '15', collaborations: '30' },
      fashionStyle: 'Luxury Streetwear',
      preview: '/audio/burna-preview.mp3'
    },
    {
      id: 'stonebwoy',
      name: 'STONEBWOY',
      type: 'Artist',
      genre: 'Dancehall',
      image: '/api/placeholder/400/500',
      bio: 'Ghanaian reggae-dancehall artist and fashion icon.',
      collab: 'Streetwear Collaboration',
      collaborationPrice: '₵95',
      social: '@stonebwoyb',
      followers: '4.8M',
      topSong: 'Therapy',
      performanceTime: 'Day 1 - 7:00 PM',
      stage: 'Cultural Stage',
      stats: { streams: '200M+', awards: '8', collaborations: '18' },
      fashionStyle: 'Reggae-Inspired',
      preview: '/audio/stonebwoy-preview.mp3'
    },
    {
      id: 'shatta',
      name: 'SHATTA WALE',
      type: 'Artist',
      genre: 'Dancehall',
      image: '/api/placeholder/400/500',
      bio: 'Self-proclaimed King of African dancehall with bold fashion statements.',
      collab: 'King Collection',
      collaborationPrice: '₵110',
      social: '@shattawalenima',
      followers: '6.2M',
      topSong: 'On God',
      performanceTime: 'Day 2 - 6:30 PM',
      stage: 'Main Stage',
      stats: { streams: '300M+', awards: '5', collaborations: '25' },
      fashionStyle: 'Bold Streetwear',
      preview: '/audio/shatta-preview.mp3'
    },
    {
      id: 'gyakie',
      name: 'GYAKIE',
      type: 'Rising Star',
      genre: 'Afropop',
      image: '/api/placeholder/400/500',
      bio: 'Ghana\'s R&B princess blending traditional sounds with contemporary fashion.',
      collab: 'Princess Collection',
      collaborationPrice: '₵75',
      social: '@gyakie_',
      followers: '1.5M',
      topSong: 'Forever',
      performanceTime: 'Day 1 - 5:30 PM',
      stage: 'Intimate Stage',
      stats: { streams: '80M+', awards: '2', collaborations: '8' },
      fashionStyle: 'Elegant Streetwear',
      preview: '/audio/gyakie-preview.mp3'
    },
    {
      id: 'kwesi',
      name: 'KWESI ARTHUR',
      type: 'Artist',
      genre: 'Hip-Hop',
      image: '/api/placeholder/400/500',
      bio: 'Ghanaian rapper known for his conscious lyrics and fashion-forward style.',
      collab: 'Hip-Hop Heritage Line',
      collaborationPrice: '₵90',
      social: '@kwesiarthur_',
      followers: '2.8M',
      topSong: 'Baajo',
      performanceTime: 'Day 2 - 8:00 PM',
      stage: 'Cultural Stage',
      stats: { streams: '150M+', awards: '4', collaborations: '20' },
      fashionStyle: 'Conscious Streetwear',
      preview: '/audio/kwesi-preview.mp3'
    }
  ]

  const designers = [
    {
      id: 'studio189',
      name: 'STUDIO 189',
      type: 'Sustainable Fashion',
      specialty: 'African Heritage Fashion',
      image: '/api/placeholder/400/500',
      bio: 'Founded by Rosario Dawson and Abrima Erwiah, championing African artisans and sustainable fashion.',
      collection: 'Heritage Redefined',
      social: '@studio189',
      followers: '890K',
      showTime: 'Day 1 - 3:00 PM',
      runway: 'Main Runway',
      priceRange: '₵200-₵800',
      sustainability: '100% Ethical',
      featured: ['Kente Fusion', 'Sustainable Denim', 'Artisan Crafts'],
      awards: '5 Sustainability Awards'
    },
    {
      id: 'christie',
      name: 'CHRISTIE BROWN',
      type: 'Contemporary Designer',
      specialty: 'Luxury Womenswear',
      image: '/api/placeholder/400/500',
      bio: 'Ghanaian designer creating contemporary pieces that celebrate African femininity.',
      collection: 'Urban Royalty',
      social: '@christiebrown',
      followers: '456K',
      showTime: 'Day 2 - 4:00 PM',
      runway: 'Fashion Runway',
      priceRange: '₵300-₵1200',
      sustainability: 'Eco-Conscious',
      featured: ['Royal Prints', 'Modern Silhouettes', 'Gold Accents'],
      awards: 'ARISE Fashion Week Winner'
    },
    {
      id: 'orange',
      name: 'ORANGE CULTURE',
      type: 'Gender-Neutral',
      specialty: 'Progressive Fashion',
      image: '/api/placeholder/400/500',
      bio: 'Nigerian brand breaking gender boundaries in African fashion.',
      collection: 'Future Folklore',
      social: '@orangeculture',
      followers: '723K',
      showTime: 'Day 1 - 5:00 PM',
      runway: 'Innovation Stage',
      priceRange: '₵180-₵600',
      sustainability: 'Gender Inclusive',
      featured: ['Gender Neutral', 'Bold Colors', 'Cultural Fusion'],
      awards: 'Fashion Innovation Award'
    },
    {
      id: 'maxivive',
      name: 'MAXIVIVE',
      type: 'Streetwear',
      specialty: 'Urban African Wear',
      image: '/api/placeholder/400/500',
      bio: 'Ghanaian streetwear brand mixing traditional prints with urban aesthetics.',
      collection: 'Street Heritage',
      social: '@maxivive',
      followers: '234K',
      showTime: 'Day 2 - 2:30 PM',
      runway: 'Street Style Stage',
      priceRange: '₵120-₵400',
      sustainability: 'Local Sourced',
      featured: ['Kente Streetwear', 'Urban Prints', 'Youth Culture'],
      awards: 'Emerging Designer Award'
    },
    {
      id: 'kiki',
      name: 'KIKI CLOTHING',
      type: 'Emerging Designer',
      specialty: 'Vintage Modern',
      image: '/api/placeholder/400/500',
      bio: 'Young Ghanaian designer reimagining vintage African fashion for modern youth.',
      collection: 'Retro Revival',
      social: '@kikiclothing',
      followers: '156K',
      showTime: 'Day 1 - 6:30 PM',
      runway: 'Emerging Runway',
      priceRange: '₵80-₵300',
      sustainability: 'Upcycled Materials',
      featured: ['Vintage Reimagined', 'Youth Focus', 'Retro Prints'],
      awards: 'Youth Designer of the Year'
    }
  ]

  const genres = ['all', 'Afropop', 'Afrobeats', 'Dancehall', 'Hip-Hop']
  const designerTypes = ['all', 'Sustainable Fashion', 'Contemporary Designer', 'Gender-Neutral', 'Streetwear', 'Emerging Designer']

  const filteredArtists = artists.filter(artist => {
    const matchesGenre = selectedGenre === 'all' || artist.genre === selectedGenre
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.bio.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesGenre && matchesSearch
  })

  const filteredDesigners = designers.filter(designer => {
    const matchesType = selectedGenre === 'all' || designer.type === selectedGenre
    const matchesSearch = designer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      designer.bio.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesSearch
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

  const togglePlay = (trackId: string) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId)
  }

  const TabButton = ({ active, onClick, children, count }: {
    active: boolean,
    onClick: () => void,
    children: React.ReactNode,
    count: number
  }) => (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${active
          ? 'bg-white text-black shadow-2xl'
          : 'border-2 border-white/20 hover:border-white/40 glass-effect'
        }`}
    >
      {children}
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-black flex items-center justify-center ${active ? 'bg-black text-white' : 'bg-white/20 text-white'
          }`}
      >
        {count}
      </motion.span>
    </motion.button>
  )

  return (
    <section id="lineup" className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute w-32 h-32 border border-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
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
          className="text-center mb-16"
        >
          <motion.div className="inline-block mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-16 h-16 border-4 border-white rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <Music className="w-8 h-8" />
            </motion.div>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">
            LINEUP MEETS<br />
            <span className="text-stroke">RUNWAY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Where sound meets style. Experience exclusive performances and runway shows featuring Africa&apos;s most innovative artists and designers, all in one unforgettable weekend.
          </p>

          {/* Search and Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search artists, designers, or styles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-white/40 w-80"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setViewMode(viewMode === 'grid' ? 'timeline' : 'grid')}
              className="flex items-center space-x-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full hover:border-white/40 transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span>{viewMode === 'grid' ? 'Timeline View' : 'Grid View'}</span>
            </motion.button>
          </motion.div>

          {/* Enhanced Tab Navigation */}
          <div className="flex items-center justify-center space-x-6">
            <TabButton
              active={activeTab === 'artists'}
              onClick={() => setActiveTab('artists')}
              count={filteredArtists.length}
            >
              <Music className="w-5 h-5 inline-block mr-2" />
              ARTISTS
            </TabButton>
            <TabButton
              active={activeTab === 'designers'}
              onClick={() => setActiveTab('designers')}
              count={filteredDesigners.length}
            >
              <ShoppingBag className="w-5 h-5 inline-block mr-2" />
              DESIGNERS
            </TabButton>
          </div>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {(activeTab === 'artists' ? genres : designerTypes).map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedGenre(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${selectedGenre === filter
                  ? 'bg-white text-black'
                  : 'bg-white/10 border border-white/20 hover:border-white/40'
                }`}
            >
              {filter === 'all' ? 'All' : filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          {activeTab === 'artists' && (
            <motion.div
              key="artists"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className={viewMode === 'grid' ?
                "grid md:grid-cols-2 lg:grid-cols-3 gap-8" :
                "space-y-8"
              }
            >
              {filteredArtists.map((artist, index) => (
                <motion.div
                  key={artist.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-3xl glass-effect p-6"
                >
                  {/* Artist Image */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl relative overflow-hidden mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full bg-white/5 flex items-center justify-center relative"
                    >
                      <Music className="w-16 h-16 text-white/40" />

                      {/* Play/Pause Overlay */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center"
                      >
                        <motion.button
                          onClick={() => togglePlay(artist.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-20 h-20 bg-white rounded-full flex items-center justify-center"
                        >
                          {playingTrack === artist.id ?
                            <Pause className="w-8 h-8 text-black" /> :
                            <Play className="w-8 h-8 text-black ml-1" />
                          }
                        </motion.button>
                      </motion.div>
                    </motion.div>

                    {/* Status Badges */}
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className={`text-xs px-3 py-1 rounded-full font-bold ${artist.type === 'Headliner' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' :
                          artist.type === 'Rising Star' ? 'bg-gradient-to-r from-green-400 to-blue-500 text-black' :
                            'bg-white/20 text-white'
                        }`}>
                        {artist.type}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-black/60 text-white font-semibold">
                        {artist.genre}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <motion.button
                        onClick={() => toggleLike(artist.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${likedItems.has(artist.id)
                            ? 'bg-red-500 text-white'
                            : 'bg-white/20 text-white hover:bg-white/30'
                          }`}
                      >
                        <Heart className={`w-5 h-5 ${likedItems.has(artist.id) ? 'fill-current' : ''}`} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
                      >
                        <Share2 className="w-5 h-5" />
                      </motion.button>
                    </div>

                    {/* Live Audio Visualizer */}
                    {playingTrack === artist.id && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center space-x-1 h-8">
                          {Array.from({ length: 20 }).map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{
                                scaleY: [0.5, Math.random() + 0.5, 0.5],
                                opacity: [0.6, 1, 0.6]
                              }}
                              transition={{
                                duration: 0.5 + Math.random() * 0.5,
                                repeat: Infinity
                              }}
                              className="flex-1 bg-white rounded-full min-h-[4px]"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Artist Details */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-2xl font-black tracking-tight">
                            {artist.name}
                          </h3>
                          <p className="text-sm text-gray-400">{artist.topSong}</p>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-400">
                          <Users className="w-4 h-4" />
                          <span>{artist.followers}</span>
                        </div>
                      </div>

                      {/* Performance Info */}
                      <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{artist.performanceTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{artist.stage}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
                      {artist.bio}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 p-3 bg-white/5 rounded-xl">
                      <div className="text-center">
                        <div className="text-lg font-black">{artist.stats.streams}</div>
                        <div className="text-xs text-gray-400">Streams</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-black">{artist.stats.awards}</div>
                        <div className="text-xs text-gray-400">Awards</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-black">{artist.stats.collaborations}</div>
                        <div className="text-xs text-gray-400">Collabs</div>
                      </div>
                    </div>

                    {/* Collaboration */}
                    <div className="p-4 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-sm">{artist.collab}</h4>
                          <p className="text-xs text-gray-400">{artist.fashionStyle}</p>
                        </div>
                        <span className="font-black">{artist.collaborationPrice}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onTap={() => window.open("https://freetheyouth.net/", "_blank")}
                        className="w-full bg-white text-black py-2 rounded-xl font-semibold text-sm hover:bg-gray-200 transition-colors"
                      >
                        Shop Collection
                      </motion.button>
                    </div>

                    {/* Social */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Instagram className="w-4 h-4" />
                        <span>{artist.social}</span>
                      </div>
                      <div className="flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="text-xs bg-white/10 px-3 py-1 rounded-full"
                        >
                          Follow
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="text-xs bg-white/10 px-3 py-1 rounded-full"
                        >
                          Notify Me
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'designers' && (
            <motion.div
              key="designers"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={viewMode === 'grid' ?
                "grid md:grid-cols-2 lg:grid-cols-3 gap-8" :
                "space-y-8"
              }
            >
              {filteredDesigners.map((designer, index) => (
                <motion.div
                  key={designer.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-3xl glass-effect p-6"
                >
                  {/* Designer Image */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl relative overflow-hidden mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full bg-white/5 flex items-center justify-center"
                    >
                      <ShoppingBag className="w-16 h-16 text-white/40" />
                    </motion.div>

                    {/* Collection Badge */}
                    <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold">{designer.collection}</span>
                    </div>

                    {/* Sustainability Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400 font-semibold">
                        {designer.sustainability}
                      </span>
                    </div>

                    {/* Show Time */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 rounded-xl p-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold">{designer.showTime}</span>
                        <span className="text-gray-300">{designer.runway}</span>
                      </div>
                    </div>
                  </div>

                  {/* Designer Details */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-2xl font-black tracking-tight">
                            {designer.name}
                          </h3>
                          <p className="text-sm text-gray-400">{designer.specialty}</p>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-400">
                          <Users className="w-4 h-4" />
                          <span>{designer.followers}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10">
                          {designer.type}
                        </span>
                        <span className="text-xs text-gray-400">{designer.priceRange}</span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
                      {designer.bio}
                    </p>

                    {/* Featured Items */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-gray-300">Featured in Collection:</h4>
                      <div className="flex flex-wrap gap-2">
                        {designer.featured.map((item) => (
                          <span key={item} className="text-xs px-2 py-1 rounded-full bg-white/10">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Awards */}
                    <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm font-semibold">{designer.awards}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                      >
                        View Collection
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border border-white/30 rounded-xl hover:border-white/50 transition-colors"
                      >
                        Follow
                      </motion.button>
                    </div>

                    {/* Social */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Instagram className="w-4 h-4" />
                        <span>{designer.social}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="text-xs bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors"
                      >
                        Runway Alert
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 glass-effect rounded-3xl p-8 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center"
          >
            <Volume2 className="w-8 h-8" />
          </motion.div>

          <h3 className="text-3xl font-black tracking-tight mb-4">
            DON&apos;T MISS THE SHOW
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive access to artist meet & greets, designer showcases, and limited edition collaborations.
            VIP tickets include backstage access to both music and fashion shows.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Get VIP Access
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 px-8 py-4 rounded-2xl font-bold text-lg hover:border-white/50 transition-all duration-300"
            >
              View Full Schedule
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}