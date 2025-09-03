/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Instagram, Twitter, Hash, Users, Camera, MessageCircle, Youtube, Heart, Share2, Play, Pause, Volume2, VolumeX, Zap, Star, Crown, Gift, Sparkles, Award, Globe, Smartphone, Monitor, Headphones, Eye, ThumbsUp, Send, Plus, Minus, Filter, Search, Grid, List, Shuffle, RotateCcw, Download, Bell, Calendar, MapPin, Clock, Flame, User, UserCheck, UserPlus, Music, Palette, Shirt, ChevronRight, ChevronLeft, ExternalLink, CheckCircle, TrendingUp, Trophy } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function Community() {
  const [activeTab, setActiveTab] = useState<'feed' | 'creators' | 'challenges' | 'leaderboard'>('feed')
  const [selectedHashtag, setSelectedHashtag] = useState<string>('#freetheyouthfits')
  const [feedFilter, setFeedFilter] = useState<'all' | 'photos' | 'videos' | 'stories'>('all')
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set())
  const [followedCreators, setFollowedCreators] = useState<Set<string>>(new Set())
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null)
  const [showSubmissionModal, setShowSubmissionModal] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [autoPlay, setAutoPlay] = useState<boolean>(true)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const socialStats = [
    { 
      platform: 'Instagram', 
      followers: '1.2M', 
      icon: Instagram, 
      growth: '+25%',
      engagement: '8.4%',
      posts: '2.1K',
      color: 'from-pink-500 to-purple-500',
      verified: true
    },
    { 
      platform: 'TikTok', 
      followers: '890K', 
      icon: Music, 
      growth: '+45%',
      engagement: '12.7%',
      posts: '456',
      color: 'from-black to-red-500',
      verified: true
    },
    { 
      platform: 'Twitter', 
      followers: '567K', 
      icon: Twitter, 
      growth: '+15%',
      engagement: '6.2%',
      posts: '1.8K',
      color: 'from-blue-400 to-cyan-500',
      verified: true
    },
    { 
      platform: 'YouTube', 
      followers: '234K', 
      icon: Youtube, 
      growth: '+32%',
      engagement: '9.1%',
      posts: '89',
      color: 'from-red-500 to-pink-500',
      verified: false
    }
  ]

  const trendingHashtags = [
    { tag: '#freetheyouthfits', posts: '45.2K', trending: 'up' },
    { tag: '#festivalfashion2025', posts: '32.8K', trending: 'up' },
    { tag: '#africanyouthstyle', posts: '28.1K', trending: 'up' },
    { tag: '#sustainablefestival', posts: '19.7K', trending: 'steady' },
    { tag: '#streetstyleaccra', posts: '15.3K', trending: 'up' },
    { tag: '#culturefusion', posts: '12.9K', trending: 'up' },
    { tag: '#festivalready', posts: '8.6K', trending: 'down' },
    { tag: '#youthexpression', posts: '7.2K', trending: 'steady' }
  ]

  const featuredCreators = [
    {
      id: 'creator-1',
      name: 'Ama Serwaa',
      handle: '@amaserwaa_style',
      platform: 'Instagram',
      followers: '125K',
      bio: 'Fashion stylist & cultural advocate. Mixing traditional Ghanaian prints with modern streetwear.',
      avatar: '/api/placeholder/80/80',
      verified: true,
      category: 'Fashion',
      engagement: '9.2%',
      posts: 847,
      featuredPost: {
        id: 'post-1',
        type: 'photo',
        caption: 'Festival prep mode activated! 🔥 Which look should I wear to @freetheyouth? Swipe for all options! #FreeTheYouthFits',
        likes: '12.4K',
        comments: '346',
        shares: '89',
        timestamp: '2 hours ago',
        hashtags: ['#freetheyouthfits', '#festivalfashion', '#kente']
      },
      achievements: ['Festival Ambassador', 'Style Influencer', 'Cultural Advocate'],
      collaboration: true,
      tier: 'gold'
    },
    {
      id: 'creator-2',
      name: 'Kofi Mensah',
      handle: '@kofi.creative',
      platform: 'TikTok',
      followers: '89K',
      bio: 'Visual storyteller documenting African youth culture through dance and fashion.',
      avatar: '/api/placeholder/80/80',
      verified: true,
      category: 'Content',
      engagement: '15.7%',
      posts: 234,
      featuredPost: {
        id: 'post-2',
        type: 'video',
        caption: 'Teaching you the #FreeTheYouthChallenge dance! Tag 3 friends to join 💃🕺',
        likes: '45.7K',
        comments: '1.2K',
        shares: '567',
        timestamp: '4 hours ago',
        hashtags: ['#freetheyouthchallenge', '#dance', '#festival']
      },
      achievements: ['Viral Creator', 'Dance Innovator', 'Cultural Ambassador'],
      collaboration: true,
      tier: 'platinum'
    },
    {
      id: 'creator-3',
      name: 'Adwoa Designs',
      handle: '@adwoadesigns',
      platform: 'Instagram',
      followers: '67K',
      bio: 'Sustainable fashion designer creating pieces inspired by Ghanaian heritage.',
      avatar: '/api/placeholder/80/80',
      verified: false,
      category: 'Fashion',
      engagement: '11.3%',
      posts: 456,
      featuredPost: {
        id: 'post-3',
        type: 'photo',
        caption: 'Behind the scenes of my festival collection! Every piece tells a story 🧵✨',
        likes: '8.9K',
        comments: '234',
        shares: '67',
        timestamp: '6 hours ago',
        hashtags: ['#sustainablefashion', '#madeinghana', '#heritage']
      },
      achievements: ['Rising Designer', 'Sustainability Advocate'],
      collaboration: false,
      tier: 'silver'
    },
    {
      id: 'creator-4',
      name: 'Street Style GH',
      handle: '@streetstylegh',
      platform: 'Instagram',
      followers: '156K',
      bio: 'Documenting the best street style across Ghana. DM for features!',
      avatar: '/api/placeholder/80/80',
      verified: true,
      category: 'Photography',
      engagement: '7.8%',
      posts: 1203,
      featuredPost: {
        id: 'post-4',
        type: 'photo',
        caption: 'The streets of Accra never disappoint! This look is everything 🔥📸',
        likes: '23.1K',
        comments: '567',
        shares: '189',
        timestamp: '8 hours ago',
        hashtags: ['#streetstyle', '#accrafashion', '#photography']
      },
      achievements: ['Street Style Expert', 'Photography Master', 'Community Builder'],
      collaboration: true,
      tier: 'gold'
    },
    {
      id: 'creator-5',
      name: 'Culture Connect',
      handle: '@culture.connect',
      platform: 'YouTube',
      followers: '78K',
      bio: 'Exploring the intersection of traditional African culture and modern youth expression.',
      avatar: '/api/placeholder/80/80',
      verified: false,
      category: 'Education',
      engagement: '13.4%',
      posts: 89,
      featuredPost: {
        id: 'post-5',
        type: 'video',
        caption: 'The History Behind Modern African Festival Fashion - New video is live!',
        likes: '15.6K',
        comments: '892',
        shares: '234',
        timestamp: '12 hours ago',
        hashtags: ['#africanculture', '#education', '#fashion']
      },
      achievements: ['Cultural Educator', 'Content Creator'],
      collaboration: false,
      tier: 'bronze'
    },
    {
      id: 'creator-6',
      name: 'Rhythm & Threads',
      handle: '@rhythmandthreads',
      platform: 'TikTok',
      followers: '234K',
      bio: 'Where music meets fashion. Creating viral content about festival style and Afrobeats.',
      avatar: '/api/placeholder/80/80',
      verified: true,
      category: 'Music',
      engagement: '18.9%',
      posts: 567,
      featuredPost: {
        id: 'post-6',
        type: 'video',
        caption: 'Styling outfits to different Afrobeats songs! Which combo was your favorite?',
        likes: '67.8K',
        comments: '2.3K',
        shares: '1.1K',
        timestamp: '1 day ago',
        hashtags: ['#afrobeats', '#styling', '#music']
      },
      achievements: ['Viral Creator', 'Music Influencer', 'Style Expert'],
      collaboration: true,
      tier: 'platinum'
    }
  ]

  const communityFeed = [
    {
      id: 'post-101',
      user: {
        name: 'Nana Akoto',
        handle: '@nana_akoto',
        avatar: '/api/placeholder/50/50',
        verified: false
      },
      type: 'photo',
      content: {
        image: '/api/placeholder/400/500',
        caption: 'Festival countdown begins! 🎉 Who else is getting their outfits ready? This Kente-inspired look is definitely making it to my festival wardrobe! ✨'
      },
      engagement: {
        likes: '1.2K',
        comments: '89',
        shares: '23'
      },
      hashtags: ['#freetheyouthfits', '#kente', '#festivalready'],
      timestamp: '30 min ago',
      trending: true
    },
    {
      id: 'post-102',
      user: {
        name: 'Kwame Fresh',
        handle: '@kwame_fresh',
        avatar: '/api/placeholder/50/50',
        verified: true
      },
      type: 'video',
      content: {
        video: '/api/placeholder/400/600',
        caption: 'Teaching my little sister the #FreeTheYouthChallenge! The next generation is ready 💃🔥'
      },
      engagement: {
        likes: '8.7K',
        comments: '234',
        shares: '156'
      },
      hashtags: ['#freetheyouthchallenge', '#dance', '#family'],
      timestamp: '1 hour ago',
      trending: true
    },
    {
      id: 'post-103',
      user: {
        name: 'Esi Creative',
        handle: '@esi.creative',
        avatar: '/api/placeholder/50/50',
        verified: false
      },
      type: 'photo',
      content: {
        image: '/api/placeholder/400/500',
        caption: 'DIY festival accessories using traditional beads and modern materials. Sustainability meets style! 🌿✨ Tutorial link in bio!'
      },
      engagement: {
        likes: '567',
        comments: '45',
        shares: '12'
      },
      hashtags: ['#diy', '#sustainablefashion', '#tutorial'],
      timestamp: '2 hours ago',
      trending: false
    },
    {
      id: 'post-104',
      user: {
        name: 'Festival Diaries',
        handle: '@festival.diaries',
        avatar: '/api/placeholder/50/50',
        verified: true
      },
      type: 'story',
      content: {
        story: '/api/placeholder/300/500',
        caption: 'Behind the scenes at Free the Youth setup! The energy is already incredible 🎪⚡'
      },
      engagement: {
        likes: '3.4K',
        comments: '123',
        shares: '67'
      },
      hashtags: ['#behindthescenes', '#festival', '#setup'],
      timestamp: '3 hours ago',
      trending: true
    }
  ]

  const challenges = [
    {
      id: 'challenge-1',
      title: '#FreeTheYouthFits',
      description: 'Show off your festival-ready outfit and inspire others with your unique style!',
      type: 'Fashion',
      participants: '23.4K',
      posts: '45.2K',
      prize: 'VIP Festival Pass + ₵1,000 shopping voucher',
      deadline: '3 days left',
      difficulty: 'Easy',
      status: 'active',
      rules: [
        'Post a photo of your festival outfit',
        'Use hashtag #FreeTheYouthFits',
        'Tag 3 friends to participate',
        'Include your style inspiration in caption'
      ],
      winners: ['@amaserwaa_style', '@kofi.creative', '@streetstylegh'],
      trending: true
    },
    {
      id: 'challenge-2',
      title: '#FreeTheYouthChallenge',
      description: 'Learn and perform the official Free the Youth dance challenge!',
      type: 'Dance',
      participants: '67.8K',
      posts: '128.9K',
      prize: 'Meet & Greet with Festival Headliners',
      deadline: '1 week left',
      difficulty: 'Medium',
      status: 'active',
      rules: [
        'Learn the official dance routine',
        'Film your performance',
        'Use hashtag #FreeTheYouthChallenge',
        'Challenge 5 friends to join'
      ],
      winners: ['@rhythmandthreads', '@dance.ghana', '@afro.moves'],
      trending: true
    },
    {
      id: 'challenge-3',
      title: '#SustainableStyle',
      description: 'Create an amazing festival look using only sustainable or upcycled materials!',
      type: 'Sustainability',
      participants: '12.1K',
      posts: '19.7K',
      prize: 'Feature in Festival Sustainability Campaign',
      deadline: '5 days left',
      difficulty: 'Advanced',
      status: 'active',
      rules: [
        'Use only sustainable/upcycled materials',
        'Document your creation process',
        'Use hashtag #SustainableStyle',
        'Explain your sustainable choices'
      ],
      winners: ['@adwoadesigns', '@eco.fashion.gh', '@green.style'],
      trending: false
    },
    {
      id: 'challenge-4',
      title: '#CultureMix',
      description: 'Blend traditional African elements with modern fashion in creative ways!',
      type: 'Culture',
      participants: '8.9K',
      posts: '15.3K',
      prize: 'Collaboration with Festival Designers',
      deadline: '2 weeks left',
      difficulty: 'Medium',
      status: 'active',
      rules: [
        'Incorporate traditional African elements',
        'Mix with modern fashion pieces',
        'Use hashtag #CultureMix',
        'Share the cultural significance'
      ],
      winners: ['@heritage.style', '@modern.africa', '@culture.fusion'],
      trending: false
    }
  ]

  const leaderboard = [
    {
      rank: 1,
      user: {
        name: 'Rhythm & Threads',
        handle: '@rhythmandthreads',
        avatar: '/api/placeholder/60/60',
        verified: true
      },
      points: 15420,
      badges: ['Viral Creator', 'Dance Master', 'Community Leader'],
      streak: 45,
      tier: 'platinum',
      change: 'up'
    },
    {
      rank: 2,
      user: {
        name: 'Ama Serwaa',
        handle: '@amaserwaa_style',
        avatar: '/api/placeholder/60/60',
        verified: true
      },
      points: 14890,
      badges: ['Style Icon', 'Fashion Expert', 'Trendsetter'],
      streak: 38,
      tier: 'gold',
      change: 'down'
    },
    {
      rank: 3,
      user: {
        name: 'Street Style GH',
        handle: '@streetstylegh',
        avatar: '/api/placeholder/60/60',
        verified: true
      },
      points: 13567,
      badges: ['Photography Pro', 'Style Curator', 'Community Builder'],
      streak: 52,
      tier: 'gold',
      change: 'up'
    },
    {
      rank: 4,
      user: {
        name: 'Kofi Mensah',
        handle: '@kofi.creative',
        avatar: '/api/placeholder/60/60',
        verified: true
      },
      points: 12234,
      badges: ['Creative Genius', 'Video Expert', 'Cultural Ambassador'],
      streak: 29,
      tier: 'gold',
      change: 'steady'
    },
    {
      rank: 5,
      user: {
        name: 'Culture Connect',
        handle: '@culture.connect',
        avatar: '/api/placeholder/60/60',
        verified: false
      },
      points: 10987,
      badges: ['Education Expert', 'Culture Advocate', 'Content Creator'],
      streak: 21,
      tier: 'silver',
      change: 'up'
    }
  ]

  const toggleLike = (postId: string) => {
    const newLiked = new Set(likedPosts)
    if (newLiked.has(postId)) {
      newLiked.delete(postId)
    } else {
      newLiked.add(postId)
    }
    setLikedPosts(newLiked)
  }

  const toggleFollow = (creatorId: string) => {
    const newFollowed = new Set(followedCreators)
    if (newFollowed.has(creatorId)) {
      newFollowed.delete(creatorId)
    } else {
      newFollowed.add(creatorId)
    }
    setFollowedCreators(newFollowed)
  }

  const toggleVideoPlay = (videoId: string) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId)
  }

  const filteredFeed = feedFilter === 'all' 
    ? communityFeed 
    : communityFeed.filter(post => post.type === feedFilter)

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredCreators.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [autoPlay, featuredCreators.length])

  return (
    <section ref={sectionRef} id="community" className="py-24 relative overflow-hidden">
      {/* Dynamic Background Animation */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 opacity-5"
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{ 
              duration: 20 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
            className="absolute border border-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${10 + (i % 6) * 5}px`,
              height: `${10 + (i % 6) * 5}px`,
              borderRadius: i % 4 === 0 ? '50%' : i % 4 === 1 ? '25%' : '0'
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
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <Users className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
            COMMUNITY &<br />
            <span className="text-stroke">HYPE</span>
          </h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Join the movement. Share your style, connect with creators, participate in challenges, 
            and be part of the cultural conversation that&apos;s shaping African youth expression.
          </motion.p>

          {/* Trending Hashtag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="inline-flex items-center space-x-3 glass-effect px-8 py-4 rounded-2xl"
          >
            <Hash className="w-6 h-6 text-pink-500" />
            <span className="text-xl font-bold tracking-wide">{selectedHashtag.toUpperCase()}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center space-x-1 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold"
            >
              <Flame className="w-4 h-4" />
              <span>TRENDING</span>
            </motion.div>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {[
              { id: 'feed', name: 'Community Feed', icon: Camera },
              { id: 'creators', name: 'Featured Creators', icon: Star },
              { id: 'challenges', name: 'Active Challenges', icon: Trophy },
              { id: 'leaderboard', name: 'Leaderboard', icon: Crown }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                  activeTab === tab.id
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

        {/* Social Media Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {socialStats.map((stat, index) => (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="glass-effect rounded-3xl p-8 text-center relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                className={`absolute inset-0 bg-gradient-to-br ${stat.color}`}
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`inline-block p-4 bg-gradient-to-r ${stat.color} rounded-2xl mb-6`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <h3 className="text-2xl font-black">{stat.followers}</h3>
                    {stat.verified && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                      </motion.div>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">{stat.platform} Followers</p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-lg font-bold text-green-500">{stat.growth}</p>
                      <p className="text-xs text-gray-400">Growth</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-blue-500">{stat.engagement}</p>
                      <p className="text-xs text-gray-400">Engagement</p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-4 py-2 bg-white/10 border border-white/20 rounded-xl hover:border-white/40 transition-colors text-sm font-semibold"
                  >
                    Follow @freetheyouth
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {/* Community Feed */}
          {activeTab === 'feed' && (
            <motion.div
              key="feed"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Feed Controls */}
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex flex-wrap gap-3">
                  {trendingHashtags.slice(0, 4).map((hashtag) => (
                    <motion.button
                      key={hashtag.tag}
                      onClick={() => setSelectedHashtag(hashtag.tag)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                        selectedHashtag === hashtag.tag
                          ? 'bg-white text-black'
                          : 'bg-white/10 border border-white/20 hover:border-white/40'
                      }`}
                    >
                      <span>{hashtag.tag}</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs">{hashtag.posts}</span>
                        {hashtag.trending === 'up' && <TrendingUp className="w-3 h-3 text-green-500" />}
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  {/* Filter Buttons */}
                  <div className="flex space-x-2">
                    {[
                      { id: 'all', label: 'All', icon: Grid },
                      { id: 'photos', label: 'Photos', icon: Camera },
                      { id: 'videos', label: 'Videos', icon: Play },
                      { id: 'stories', label: 'Stories', icon: Eye }
                    ].map((filter) => (
                      <motion.button
                        key={filter.id}
                        onClick={() => setFeedFilter(filter.id as any)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-2 rounded-lg transition-colors ${
                          feedFilter === filter.id
                            ? 'bg-white text-black'
                            : 'bg-white/10 hover:bg-white/20'
                        }`}
                      >
                        <filter.icon className="w-5 h-5" />
                      </motion.button>
                    ))}
                  </div>

                  {/* View Mode */}
                  <motion.button
                    onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
                  </motion.button>
                </div>
              </div>

              {/* Community Feed Posts */}
              <div className={viewMode === 'grid' 
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-6"
              }>
                {filteredFeed.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-effect rounded-3xl overflow-hidden group"
                  >
                    {/* Post Header */}
                    <div className="p-6 pb-0">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white/60" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-bold">{post.user.name}</h4>
                            {post.user.verified && (
                              <CheckCircle className="w-4 h-4 text-blue-500" />
                            )}
                            {post.trending && (
                              <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-bold"
                              >
                                HOT
                              </motion.div>
                            )}
                          </div>
                          <p className="text-sm text-gray-400">{post.user.handle}</p>
                        </div>
                        <span className="text-xs text-gray-500">{post.timestamp}</span>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="px-6">
                      {post.type === 'photo' && (
                        <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-4 relative overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center">
                            <Camera className="w-12 h-12 text-white/40" />
                          </div>
                          {/* Heart Animation on Double Tap */}
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            whileTap={{ scale: 1.2 }}
                          >
                            <Heart className="w-16 h-16 text-red-500 fill-current drop-shadow-lg" />
                          </motion.div>
                        </div>
                      )}

                      {post.type === 'video' && (
                        <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-4 relative overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center">
                            <Play className="w-12 h-12 text-white/40" />
                          </div>
                          <motion.button
                            onClick={() => toggleVideoPlay(post.id)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-4 right-4 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center"
                          >
                            {playingVideo === post.id ? 
                              <Pause className="w-5 h-5 text-white" /> : 
                              <Play className="w-5 h-5 text-white ml-0.5" />
                            }
                          </motion.button>
                        </div>
                      )}

                      {post.type === 'story' && (
                        <div className="aspect-[9/16] max-h-96 bg-gradient-to-br from-purple-800 to-pink-800 rounded-2xl mb-4 relative overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center">
                            <Eye className="w-12 h-12 text-white/40" />
                          </div>
                          <div className="absolute top-4 left-4 right-4">
                            <div className="w-full h-1 bg-white/20 rounded-full">
                              <motion.div 
                                className="h-1 bg-white rounded-full"
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, repeat: Infinity }}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                        {post.content.caption}
                      </p>

                      {/* Hashtags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.hashtags.map((hashtag) => (
                          <motion.button
                            key={hashtag}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedHashtag(hashtag)}
                            className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full hover:bg-blue-500/30 transition-colors"
                          >
                            {hashtag}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Post Engagement */}
                    <div className="p-6 pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <motion.button
                            onClick={() => toggleLike(post.id)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`flex items-center space-x-2 ${
                              likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                            }`}
                          >
                            <Heart className={`w-5 h-5 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                            <span className="text-sm font-semibold">{post.engagement.likes}</span>
                          </motion.button>
                          
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center space-x-2 text-gray-400 hover:text-blue-500"
                          >
                            <MessageCircle className="w-5 h-5" />
                            <span className="text-sm font-semibold">{post.engagement.comments}</span>
                          </motion.button>
                          
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center space-x-2 text-gray-400 hover:text-green-500"
                          >
                            <Share2 className="w-5 h-5" />
                            <span className="text-sm font-semibold">{post.engagement.shares}</span>
                          </motion.button>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-400 hover:text-white"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-3 rounded-2xl font-bold hover:bg-gray-200 transition-colors"
                >
                  Load More Posts
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Featured Creators */}
          {activeTab === 'creators' && (
            <motion.div
              key="creators"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Creator Carousel Controls */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-black mb-2">FEATURED CREATORS</h3>
                  <p className="text-gray-400">Discover the voices shaping our community</p>
                </div>
                <div className="flex items-center space-x-4">
                  <motion.button
                    onClick={() => setAutoPlay(!autoPlay)}
                    whileHover={{ scale: 1.1 }}
                    className={`p-2 rounded-lg transition-colors ${
                      autoPlay ? 'bg-green-500 text-white' : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {autoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </motion.button>
                  <motion.button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredCreators.length) % featuredCreators.length)}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredCreators.length)}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Featured Creator Spotlight */}
              <div className="glass-effect rounded-3xl p-8 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-8 items-center"
                  >
                    {/* Creator Info */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                          <User className="w-10 h-10 text-white/60" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="text-2xl font-black">{featuredCreators[currentSlide].name}</h4>
                            {featuredCreators[currentSlide].verified && (
                              <CheckCircle className="w-6 h-6 text-blue-500" />
                            )}
                            <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                              featuredCreators[currentSlide].tier === 'platinum' ? 'bg-purple-500 text-white' :
                              featuredCreators[currentSlide].tier === 'gold' ? 'bg-yellow-500 text-black' :
                              featuredCreators[currentSlide].tier === 'silver' ? 'bg-gray-400 text-black' :
                              'bg-orange-600 text-white'
                            }`}>
                              {featuredCreators[currentSlide].tier.toUpperCase()}
                            </span>
                          </div>
                          <p className="text-gray-400">{featuredCreators[currentSlide].handle}</p>
                          <p className="text-sm text-gray-500">{featuredCreators[currentSlide].platform}</p>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {featuredCreators[currentSlide].bio}
                      </p>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-black text-purple-500">{featuredCreators[currentSlide].followers}</p>
                          <p className="text-xs text-gray-400">Followers</p>
                        </div>
                        <div>
                          <p className="text-2xl font-black text-green-500">{featuredCreators[currentSlide].engagement}</p>
                          <p className="text-xs text-gray-400">Engagement</p>
                        </div>
                        <div>
                          <p className="text-2xl font-black text-blue-500">{featuredCreators[currentSlide].posts}</p>
                          <p className="text-xs text-gray-400">Posts</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h5 className="font-bold">Achievements:</h5>
                        <div className="flex flex-wrap gap-2">
                          {featuredCreators[currentSlide].achievements.map((achievement) => (
                            <span key={achievement} className="text-xs bg-white/10 px-3 py-1 rounded-full">
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <motion.button
                          onClick={() => toggleFollow(featuredCreators[currentSlide].id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-colors ${
                            followedCreators.has(featuredCreators[currentSlide].id)
                              ? 'bg-green-500 text-white hover:bg-green-600'
                              : 'bg-white text-black hover:bg-gray-200'
                          }`}
                        >
                          {followedCreators.has(featuredCreators[currentSlide].id) ? (
                            <UserCheck className="w-5 h-5" />
                          ) : (
                            <UserPlus className="w-5 h-5" />
                          )}
                          <span>
                            {followedCreators.has(featuredCreators[currentSlide].id) ? 'Following' : 'Follow'}
                          </span>
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="border-2 border-white/30 px-6 py-3 rounded-2xl font-semibold hover:border-white/50 transition-colors"
                        >
                          View Profile
                        </motion.button>
                      </div>
                    </div>

                    {/* Featured Post */}
                    <div className="glass-effect rounded-2xl p-6">
                      <h5 className="font-bold mb-4">Latest Post</h5>
                      <div className="space-y-4">
                        <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl relative overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center">
                            {featuredCreators[currentSlide].featuredPost.type === 'photo' ? (
                              <Camera className="w-8 h-8 text-white/40" />
                            ) : (
                              <Play className="w-8 h-8 text-white/40" />
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-300">
                          {featuredCreators[currentSlide].featuredPost.caption}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex space-x-4">
                            <span>❤️ {featuredCreators[currentSlide].featuredPost.likes}</span>
                            <span>💬 {featuredCreators[currentSlide].featuredPost.comments}</span>
                            <span>↗️ {featuredCreators[currentSlide].featuredPost.shares}</span>
                          </div>
                          <span className="text-gray-500">{featuredCreators[currentSlide].featuredPost.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2 mt-8">
                  {featuredCreators.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      whileHover={{ scale: 1.2 }}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentSlide === index ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* All Creators Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredCreators.map((creator, index) => (
                  <motion.div
                    key={creator.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="glass-effect rounded-2xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="w-8 h-8 text-white/60" />
                    </div>

                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <h4 className="font-bold">{creator.name}</h4>
                      {creator.verified && <CheckCircle className="w-4 h-4 text-blue-500" />}
                    </div>
                    <p className="text-sm text-gray-400 mb-1">{creator.handle}</p>
                    <p className="text-xs text-gray-500 mb-4">{creator.category}</p>

                    <div className="flex justify-center space-x-4 text-sm mb-4">
                      <div>
                        <p className="font-bold text-purple-500">{creator.followers}</p>
                        <p className="text-xs text-gray-400">Followers</p>
                      </div>
                      <div>
                        <p className="font-bold text-green-500">{creator.engagement}</p>
                        <p className="text-xs text-gray-400">Engagement</p>
                      </div>
                    </div>

                    <motion.button
                      onClick={() => toggleFollow(creator.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-2 rounded-xl font-semibold transition-colors ${
                        followedCreators.has(creator.id)
                          ? 'bg-green-500 text-white'
                          : 'bg-white text-black hover:bg-gray-200'
                      }`}
                    >
                      {followedCreators.has(creator.id) ? 'Following' : 'Follow'}
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 glass-effect rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10" />
          
          <div className="relative z-10">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-8 flex items-center justify-center"
            >
              <Bell className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-4xl font-black tracking-tight mb-6">
              JOIN THE MOVEMENT
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Stay connected with our community. Get exclusive content, early access to challenges, 
              and be the first to know about festival updates and drops.
            </p>
            
            <div className="max-w-lg mx-auto mb-8">
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300"
                >
                  JOIN
                </motion.button>
              </div>
            </div>

            <div className="flex justify-center space-x-8">
              {[
                { icon: Instagram, label: '@freetheyouth', followers: '1.2M' },
                { icon: Music, label: '@freetheyouth', followers: '890K' },
                { icon: Twitter, label: '@freetheyouth', followers: '567K' },
                { icon: Youtube, label: 'Free the Youth', followers: '234K' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center space-y-2 text-center group"
                >
                  <div className="w-14 h-14 border-2 border-white/20 rounded-full flex items-center justify-center group-hover:border-white/40 transition-colors">
                    <social.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{social.label}</p>
                    <p className="text-xs text-gray-400">{social.followers}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}