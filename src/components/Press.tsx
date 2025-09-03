/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Award, Users, Mail, Download, ExternalLink, Star, Calendar, MapPin, Globe, TrendingUp, Zap, Crown, Gift, Camera, Mic, Headphones, Monitor, Smartphone, Play, Pause, Volume2, Eye, Share2, Phone, MessageCircle, FileText, Image, Video, Music, Palette, Shirt, Coffee, Car, Plane, Building, DollarSign, BarChart3, PieChart, LineChart, Target, Briefcase, HandHeart, Lightbulb, Megaphone, Users2, ThumbsUp, MessageSquare, Hash, AtSign, Clock, CheckCircle, AlertCircle, Info, ArrowRight, ChevronDown, ChevronUp, Filter, Search, SortAsc, Grid, List, Maximize2, Send, User, Sparkles } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Logo from "next/image";

export default function Press() {
  const [selectedTab, setSelectedTab] = useState<'coverage' | 'partners' | 'statistics' | 'media-kit' | 'contact'>('coverage')
  const [selectedYear, setSelectedYear] = useState<'2025' | '2024' | '2023'>('2025')
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null)
  const [selectedPartnerCategory, setSelectedPartnerCategory] = useState<'all' | 'title' | 'media' | 'fashion' | 'tech' | 'food'>('all')
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const [downloadingKit, setDownloadingKit] = useState<string | null>(null)
  const [contactForm, setContactForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'date' | 'impact' | 'reach'>('date')
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -75])

  const festivalStats = [
    {
      metric: '50K+',
      label: 'Expected Attendees',
      growth: '+25%',
      description: '2025 projected attendance',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      metric: '150+',
      label: 'Media Partners',
      growth: '+40%',
      description: 'Global and local coverage',
      icon: Monitor,
      color: 'from-purple-500 to-pink-500'
    },
    {
      metric: '25+',
      label: 'Performing Artists',
      growth: '+15%',
      description: 'International and local talent',
      icon: Music,
      color: 'from-green-500 to-emerald-500'
    },
    {
      metric: '100+',
      label: 'Fashion Brands',
      growth: '+60%',
      description: 'Participating designers',
      icon: Shirt,
      color: 'from-orange-500 to-red-500'
    },
    {
      metric: '₵15M',
      label: 'Economic Impact',
      growth: '+35%',
      description: 'Estimated local economic contribution',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      metric: '2.5M+',
      label: 'Social Reach',
      growth: '+80%',
      description: 'Combined social media impressions',
      icon: TrendingUp,
      color: 'from-pink-500 to-purple-500'
    },
    {
      metric: '15',
      label: 'Countries',
      growth: '+25%',
      description: 'International representation',
      icon: Globe,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      metric: '72hrs',
      label: 'Festival Duration',
      growth: '+20%',
      description: 'Extended programming',
      icon: Clock,
      color: 'from-red-500 to-pink-500'
    }
  ]

  const pressHighlights = [
    {
      id: 'article-1',
      outlet: 'VOGUE AFRICA',
      headline: 'Free the Youth: The Festival Redefining African Fashion on the Global Stage',
      type: 'Feature Article',
      date: '2024-12-15',
      author: 'Amara Okonkwo',
      readTime: '8 min read',
      reach: '2.3M readers',
      image: '/api/placeholder/600/400',
      excerpt: 'As Africa\'s fashion industry gains global recognition, Free the Youth Festival emerges as a pivotal platform showcasing the continent\'s most innovative designers and cultural expressions...',
      tags: ['Fashion', 'Culture', 'Innovation', 'Africa'],
      impact: 'high',
      featured: true,
      url: '#'
    },
    {
      id: 'article-2',
      outlet: 'CNN AFRICA',
      headline: 'Ghana\'s Free the Youth Festival: Where Music, Fashion, and Culture Converge',
      type: 'News Coverage',
      date: '2024-11-28',
      author: 'Kwame Asante',
      readTime: '5 min read',
      reach: '5.8M viewers',
      image: '/api/placeholder/600/400',
      excerpt: 'The annual Free the Youth Festival in Accra has become a cultural phenomenon, drawing international attention to Ghana\'s vibrant creative scene...',
      tags: ['News', 'Culture', 'Ghana', 'Festival'],
      impact: 'high',
      featured: true,
      url: '#'
    },
    {
      id: 'article-3',
      outlet: 'HYPEBEAST',
      headline: 'Street Style Meets High Fashion at Free the Youth Festival 2024',
      type: 'Photo Essay',
      date: '2024-07-18',
      author: 'Marcus Thompson',
      readTime: '3 min read',
      reach: '1.9M readers',
      image: '/api/placeholder/600/400',
      excerpt: 'Our photographers captured the most striking looks from this year\'s Free the Youth Festival, where traditional African aesthetics merged seamlessly with contemporary streetwear...',
      tags: ['Street Style', 'Photography', 'Fashion'],
      impact: 'medium',
      featured: false,
      url: '#'
    },
    {
      id: 'article-4',
      outlet: 'COMPLEX',
      headline: 'The Rise of Afrofuturism: How Free the Youth is Shaping Youth Culture',
      type: 'Culture Feature',
      date: '2024-06-22',
      author: 'Nia Williams',
      readTime: '7 min read',
      reach: '1.4M readers',
      image: '/api/placeholder/600/400',
      excerpt: 'Beyond the music and fashion, Free the Youth Festival represents a new wave of African cultural expression that\'s influencing global youth movements...',
      tags: ['Afrofuturism', 'Youth Culture', 'Identity'],
      impact: 'high',
      featured: false,
      url: '#'
    },
    {
      id: 'article-5',
      outlet: 'FORBES AFRICA',
      headline: 'The Business of Culture: Free the Youth\'s Economic Impact on Ghana',
      type: 'Business Analysis',
      date: '2024-08-10',
      author: 'David Mensah',
      readTime: '6 min read',
      reach: '890K readers',
      image: '/api/placeholder/600/400',
      excerpt: 'An in-depth analysis of how cultural festivals like Free the Youth are driving economic growth and positioning Ghana as a creative economy hub...',
      tags: ['Business', 'Economics', 'Creative Industry'],
      impact: 'medium',
      featured: false,
      url: '#'
    },
    {
      id: 'article-6',
      outlet: 'BRITISH VOGUE',
      headline: 'Sustainable Fashion Takes Center Stage at Free the Youth',
      type: 'Sustainability Feature',
      date: '2024-05-15',
      author: 'Sarah Johnson',
      readTime: '5 min read',
      reach: '3.2M readers',
      image: '/api/placeholder/600/400',
      excerpt: 'The festival\'s commitment to sustainability and ethical fashion practices is setting new standards for events worldwide...',
      tags: ['Sustainability', 'Fashion', 'Environment'],
      impact: 'high',
      featured: true,
      url: '#'
    }
  ]

  const partners = [
    {
      id: 'partner-1',
      name: 'JORDAN BRAND',
      category: 'title',
      type: 'Title Partner',
      logo: '/api/placeholder/200/100',
      description: 'Exclusive footwear partner bringing limited-edition releases and athlete appearances.',
      partnership: 'Multi-year exclusive partnership',
      investment: '₵2.5M',
      benefits: ['Exclusive product launches', 'Athlete endorsements', 'Premium activation spaces'],
      duration: '2023-2026',
      status: 'active',
      tier: 'platinum',
      featured: true
    },
    {
      id: 'partner-2',
      name: 'COCA-COLA',
      category: 'title',
      type: 'Beverage Partner',
      logo: '/api/placeholder/200/100',
      description: 'Official beverage sponsor providing refreshments and branded experiences.',
      partnership: 'Regional partnership',
      investment: '₵1.8M',
      benefits: ['Exclusive beverage rights', 'Sampling activations', 'Brand integration'],
      duration: '2024-2025',
      status: 'active',
      tier: 'gold',
      featured: true
    },
    {
      id: 'partner-3',
      name: 'BBC AFRICA',
      category: 'media',
      type: 'Media Partner',
      logo: '/api/placeholder/200/100',
      description: 'Exclusive broadcast partner for international distribution.',
      partnership: 'Content distribution rights',
      investment: 'Content value',
      benefits: ['Live broadcast', 'Documentary production', 'Digital content'],
      duration: '2024-2025',
      status: 'active',
      tier: 'platinum',
      featured: true
    },
    {
      id: 'partner-4',
      name: 'STUDIO 189',
      category: 'fashion',
      type: 'Fashion Partner',
      logo: '/api/placeholder/200/100',
      description: 'Sustainable fashion showcase and designer collaboration platform.',
      partnership: 'Creative collaboration',
      investment: 'In-kind value',
      benefits: ['Runway showcase', 'Designer mentorship', 'Sustainable practices'],
      duration: '2023-2025',
      status: 'active',
      tier: 'gold',
      featured: false
    },
    {
      id: 'partner-5',
      name: 'SPOTIFY',
      category: 'tech',
      type: 'Music Partner',
      logo: '/api/placeholder/200/100',
      description: 'Official streaming partner for music discovery and playlist curation.',
      partnership: 'Technology integration',
      investment: '₵500K',
      benefits: ['Playlist features', 'Artist promotion', 'Data insights'],
      duration: '2024-2026',
      status: 'active',
      tier: 'silver',
      featured: false
    },
    {
      id: 'partner-6',
      name: 'UBER',
      category: 'tech',
      type: 'Transportation Partner',
      logo: '/api/placeholder/200/100',
      description: 'Official ride-sharing partner providing seamless transportation solutions.',
      partnership: 'Service partnership',
      investment: '₵300K',
      benefits: ['Dedicated pickup zones', 'Promotional codes', 'VIP services'],
      duration: '2024-2025',
      status: 'active',
      tier: 'bronze',
      featured: false
    },
    {
      id: 'partner-7',
      name: 'JOLLOF KINGS',
      category: 'food',
      type: 'Culinary Partner',
      logo: '/api/placeholder/200/100',
      description: 'Premium food vendor providing authentic African cuisine experiences.',
      partnership: 'Culinary showcase',
      investment: 'Revenue share',
      benefits: ['Food court presence', 'VIP catering', 'Cultural programming'],
      duration: '2024-2025',
      status: 'active',
      tier: 'bronze',
      featured: false
    },
    {
      id: 'partner-8',
      name: 'SAMSUNG',
      category: 'tech',
      type: 'Technology Partner',
      logo: '/api/placeholder/200/100',
      description: 'Cutting-edge technology integration and device experiences.',
      partnership: 'Innovation partnership',
      investment: '₵1.2M',
      benefits: ['Tech installations', 'Device experiences', 'Content creation'],
      duration: '2025-2027',
      status: 'active',
      tier: 'gold',
      featured: true
    }
  ]

  const mediaKitItems = [
    {
      id: 'brand-guidelines',
      title: 'Brand Guidelines',
      description: 'Complete brand identity guidelines including logos, colors, typography, and usage rules.',
      type: 'PDF',
      size: '15.2 MB',
      lastUpdated: '2024-12-01',
      downloads: 1247,
      category: 'branding',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 'high-res-images',
      title: 'High-Resolution Images',
      description: 'Professional photography from previous events, artist portraits, and venue shots.',
      type: 'ZIP',
      size: '850 MB',
      lastUpdated: '2024-11-15',
      downloads: 892,
      category: 'images',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 'press-releases',
      title: 'Press Releases 2024-2025',
      description: 'All official press releases, announcements, and festival updates.',
      type: 'PDF Pack',
      size: '8.7 MB',
      lastUpdated: '2024-12-20',
      downloads: 2156,
      category: 'documents',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 'artist-bios',
      title: 'Artist & Designer Bios',
      description: 'Detailed biographies, high-resolution photos, and press materials for all participants.',
      type: 'PDF Pack',
      size: '45 MB',
      lastUpdated: '2024-11-30',
      downloads: 634,
      category: 'documents',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 'video-assets',
      title: 'Video Content Package',
      description: 'Promotional videos, artist performances, and behind-the-scenes footage.',
      type: 'MP4 Pack',
      size: '2.1 GB',
      lastUpdated: '2024-10-22',
      downloads: 445,
      category: 'video',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 'social-assets',
      title: 'Social Media Assets',
      description: 'Ready-to-use social media graphics, templates, and branded content.',
      type: 'AI/PNG Pack',
      size: '125 MB',
      lastUpdated: '2024-12-10',
      downloads: 1789,
      category: 'graphics',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 'fact-sheet',
      title: 'Festival Fact Sheet 2025',
      description: 'Key statistics, dates, venue information, and festival overview.',
      type: 'PDF',
      size: '2.1 MB',
      lastUpdated: '2024-12-18',
      downloads: 3421,
      category: 'documents',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 'sustainability-report',
      title: 'Sustainability Impact Report',
      description: 'Detailed report on environmental initiatives and community impact.',
      type: 'PDF',
      size: '12.8 MB',
      lastUpdated: '2024-09-15',
      downloads: 567,
      category: 'documents',
      thumbnail: '/api/placeholder/300/200'
    }
  ]

  const contactTeam = [
    {
      id: 'press-lead',
      name: 'Ama Asante',
      role: 'Press & Communications Director',
      email: 'press@freetheyouth.com',
      phone: '+233 24 123 4567',
      bio: 'Leading press relations with 10+ years in entertainment PR',
      specialties: ['Media Relations', 'Crisis Communications', 'Content Strategy'],
      availability: 'Mon-Fri 9AM-6PM GMT',
      languages: ['English', 'Twi', 'French'],
      photo: '/api/placeholder/150/150'
    },
    {
      id: 'partnerships-lead',
      name: 'Kofi Mensah',
      role: 'Partnerships & Sponsorship Director',
      email: 'partnerships@freetheyouth.com',
      phone: '+233 24 765 4321',
      bio: 'Building strategic partnerships across entertainment and fashion industries',
      specialties: ['Brand Partnerships', 'Sponsorship Deals', 'Collaboration Strategy'],
      availability: 'Mon-Fri 8AM-7PM GMT',
      languages: ['English', 'Twi', 'German'],
      photo: '/api/placeholder/150/150'
    },
    {
      id: 'content-lead',
      name: 'Efua Owusu',
      role: 'Content & Digital Media Manager',
      email: 'content@freetheyouth.com',
      phone: '+233 24 555 7890',
      bio: 'Managing digital content strategy and creator relationships',
      specialties: ['Content Creation', 'Social Media', 'Digital Strategy'],
      availability: 'Mon-Sun 10AM-8PM GMT',
      languages: ['English', 'Twi', 'Spanish'],
      photo: '/api/placeholder/150/150'
    },
    {
      id: 'general-inquiries',
      name: 'Festival Info Team',
      role: 'General Inquiries',
      email: 'info@freetheyouth.com',
      phone: '+233 24 000 1234',
      bio: 'General information, ticketing, and attendee support',
      specialties: ['General Info', 'Ticketing', 'Attendee Support'],
      availability: '24/7 during festival season',
      languages: ['English', 'Twi'],
      photo: '/api/placeholder/150/150'
    }
  ]

  const filteredPartners = selectedPartnerCategory === 'all'
    ? partners
    : partners.filter(partner => partner.category === selectedPartnerCategory)

  const handleDownload = (itemId: string) => {
    setDownloadingKit(itemId)
    // Simulate download
    setTimeout(() => {
      setDownloadingKit(null)
    }, 2000)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Contact form submitted:', contactForm)
  }

  return (
    <section ref={sectionRef} id="press" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 opacity-5"
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 18 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
            className="absolute border border-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${15 + (i % 5) * 8}px`,
              height: `${15 + (i % 5) * 8}px`,
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '25%' : '0'
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
              rotateZ: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-red-500 rounded-3xl flex items-center justify-center">
              <Megaphone className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
            PRESS &<br />
            <span className="text-stroke">PARTNERS</span>
          </h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Media coverage, strategic partnerships, and press resources that amplify African youth culture
            on the global stage. Join us in telling the story of a generation.
          </motion.p>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { id: 'coverage', name: 'Media Coverage', icon: Monitor },
              { id: 'partners', name: 'Partners', icon: Briefcase },
              { id: 'statistics', name: 'Impact Stats', icon: BarChart3 },
              { id: 'media-kit', name: 'Media Kit', icon: Download },
              { id: 'contact', name: 'Press Contact', icon: Mail }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${selectedTab === tab.id
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

        {/* Festival Impact Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-20"
        >
          {festivalStats.slice(0, 4).map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-2xl p-6 text-center relative overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                className={`absolute inset-0 bg-gradient-to-br ${stat.color}`}
              />

              <div className="relative z-10">
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-white/80" />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-3xl font-black mb-2"
                >
                  {stat.metric}
                </motion.div>
                <p className="text-sm text-gray-400 mb-2">{stat.label}</p>
                <div className={`text-xs px-2 py-1 rounded-full inline-block bg-green-500/20 text-green-400`}>
                  {stat.growth} from 2024
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {/* Media Coverage */}
          {selectedTab === 'coverage' && (
            <motion.div
              key="coverage"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Coverage Controls */}
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div>
                  <h3 className="text-3xl font-black mb-2">MEDIA COVERAGE</h3>
                  <p className="text-gray-400">Stories that shaped our narrative</p>
                </div>
                <div className="flex items-center space-x-4">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value as any)}
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-white/40"
                  >
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                  </select>

                  <motion.button
                    onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
                  </motion.button>
                </div>
              </div>

              {/* Featured Coverage */}
              <div className="space-y-8">
                <h4 className="text-2xl font-black">Featured Stories</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  {pressHighlights.filter(article => article.featured).map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass-effect rounded-3xl overflow-hidden group cursor-pointer"
                      onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                    >
                      {/* Article Image */}
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                          <FileText className="w-16 h-16 text-white/40" />
                        </div>

                        {/* Impact Badge */}
                        <div className="absolute top-4 right-4">
                          <span className={`text-xs px-3 py-1 rounded-full font-bold ${article.impact === 'high' ? 'bg-red-500 text-white' :
                              article.impact === 'medium' ? 'bg-yellow-500 text-black' :
                                'bg-green-500 text-white'
                            }`}>
                            {article.impact.toUpperCase()} IMPACT
                          </span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            className="text-center"
                          >
                            <Eye className="w-12 h-12 mx-auto mb-2" />
                            <p className="text-sm font-semibold">Read Article</p>
                          </motion.div>
                        </div>
                      </div>

                      {/* Article Content */}
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
                              {article.outlet}
                            </span>
                            <span className="text-xs text-gray-400">{article.type}</span>
                          </div>
                          <span className="text-xs text-gray-500">{article.date}</span>
                        </div>

                        <h4 className="text-xl font-black mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                          {article.headline}
                        </h4>

                        <p className="text-sm text-gray-300 mb-6 line-clamp-3">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>{article.readTime}</span>
                            <span>•</span>
                            <span>{article.reach}</span>
                          </div>
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        </div>

                        {/* Expanded Content */}
                        <AnimatePresence>
                          {expandedArticle === article.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-6 pt-6 border-t border-white/20"
                            >
                              <div className="space-y-4">
                                <div className="flex items-center space-x-3 text-sm">
                                  <span className="text-gray-400">Author:</span>
                                  <span className="font-semibold">{article.author}</span>
                                </div>

                                <div>
                                  <span className="text-gray-400 text-sm">Tags:</span>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {article.tags.map((tag) => (
                                      <span key={tag} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="w-full bg-white text-black py-3 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
                                >
                                  Read Full Article
                                </motion.button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* All Coverage */}
              <div className="space-y-8">
                <h4 className="text-2xl font-black">All Coverage</h4>
                <div className={viewMode === 'grid'
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-6"
                }>
                  {pressHighlights.filter(article => !article.featured).map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -3 }}
                      className={`glass-effect rounded-2xl p-6 cursor-pointer group ${viewMode === 'list' ? 'flex space-x-6' : ''
                        }`}
                    >
                      <div className={viewMode === 'list' ? 'w-32 flex-shrink-0' : 'mb-4'}>
                        <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center ${viewMode === 'list' ? 'w-32 h-20' : 'aspect-video'
                          }`}>
                          <FileText className="w-8 h-8 text-white/40" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded-full">
                            {article.outlet}
                          </span>
                          <span className="text-xs text-gray-500">{article.date}</span>
                        </div>

                        <h5 className="font-bold mb-2 line-clamp-2 group-hover:text-gray-300 transition-colors">
                          {article.headline}
                        </h5>

                        <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{article.readTime}</span>
                          <span>{article.reach}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Partners */}
          {selectedTab === 'partners' && (
            <motion.div
              key="partners"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Partner Categories */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[
                  { id: 'all', name: 'All Partners', count: partners.length },
                  { id: 'title', name: 'Title Sponsors', count: partners.filter(p => p.category === 'title').length },
                  { id: 'media', name: 'Media Partners', count: partners.filter(p => p.category === 'media').length },
                  { id: 'fashion', name: 'Fashion', count: partners.filter(p => p.category === 'fashion').length },
                  { id: 'tech', name: 'Technology', count: partners.filter(p => p.category === 'tech').length },
                  { id: 'food', name: 'Food & Beverage', count: partners.filter(p => p.category === 'food').length }
                ].map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedPartnerCategory(category.id as any)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${selectedPartnerCategory === category.id
                        ? 'bg-white text-black'
                        : 'bg-white/10 border border-white/20 hover:border-white/40'
                      }`}
                  >
                    {category.name} ({category.count})
                  </motion.button>
                ))}
              </div>

              {/* Featured Partners */}
              <div className="space-y-8">
                <h3 className="text-3xl font-black text-center">OUR PARTNERS</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPartners.map((partner, index) => (
                    <motion.div
                      key={partner.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="glass-effect rounded-3xl p-8 relative overflow-hidden group"
                    >
                      {/* Partner Tier Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`text-xs px-3 py-1 rounded-full font-bold ${partner.tier === 'platinum' ? 'bg-purple-500 text-white' :
                            partner.tier === 'gold' ? 'bg-yellow-500 text-black' :
                              partner.tier === 'silver' ? 'bg-gray-400 text-black' :
                                'bg-orange-600 text-white'
                          }`}>
                          {partner.tier.toUpperCase()}
                        </span>
                      </div>

                      {/* Partner Logo */}
                      <div className="aspect-video bg-white/10 rounded-2xl mb-6 flex items-center justify-center">
                        <Building className="w-16 h-16 text-white/40" />
                      </div>

                      {/* Partner Details */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-2xl font-black mb-2">{partner.name}</h4>
                          <p className="text-sm text-gray-400 mb-4">{partner.type}</p>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {partner.description}
                          </p>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Partnership:</span>
                            <span className="font-semibold">{partner.partnership}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Investment:</span>
                            <span className="font-semibold text-green-500">{partner.investment}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Duration:</span>
                            <span className="font-semibold">{partner.duration}</span>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h5 className="font-bold mb-2">Key Benefits:</h5>
                          <div className="space-y-1">
                            {partner.benefits.map((benefit) => (
                              <div key={benefit} className="flex items-center space-x-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-gray-300">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-white text-black py-3 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Partnership Opportunities */}
              <div className="glass-effect rounded-3xl p-12 text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center"
                >
                  <Briefcase className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-3xl font-black mb-6">BECOME A PARTNER</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join leading brands in supporting African youth culture and creative expression.
                  Partner with us to reach engaged global audiences and make meaningful impact.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    { title: 'Brand Exposure', desc: 'Reach 50K+ attendees and 2.5M+ digital audience' },
                    { title: 'Cultural Impact', desc: 'Support emerging artists and sustainable practices' },
                    { title: 'Premium Activation', desc: 'Custom experiences and exclusive access' }
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="text-center p-4"
                    >
                      <h4 className="font-bold mb-2">{benefit.title}</h4>
                      <p className="text-sm text-gray-400">{benefit.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Partnership Inquiry
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Statistics */}
          {selectedTab === 'statistics' && (
            <motion.div
              key="statistics"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h3 className="text-3xl font-black mb-6">FESTIVAL IMPACT STATISTICS</h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Data-driven insights showcasing the cultural and economic impact of Free the Youth Festival
                </p>
              </div>

              {/* Complete Stats Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {festivalStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-effect rounded-3xl p-8 text-center relative overflow-hidden group"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color}`}
                    />

                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className={`inline-block p-4 bg-gradient-to-r ${stat.color} rounded-2xl mb-6`}
                      >
                        <stat.icon className="w-10 h-10 text-white" />
                      </motion.div>

                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="text-4xl font-black mb-3"
                      >
                        {stat.metric}
                      </motion.div>
                      <p className="text-lg font-bold mb-2">{stat.label}</p>
                      <p className="text-sm text-gray-400 mb-4">{stat.description}</p>

                      <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold inline-block">
                        {stat.growth} YoY
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Insights */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'AUDIENCE DEMOGRAPHICS',
                    data: [
                      { label: '18-24 years', value: '45%' },
                      { label: '25-34 years', value: '35%' },
                      { label: '35+ years', value: '20%' }
                    ],
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    title: 'GEOGRAPHIC REACH',
                    data: [
                      { label: 'West Africa', value: '65%' },
                      { label: 'Other African Countries', value: '25%' },
                      { label: 'International', value: '10%' }
                    ],
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    title: 'DIGITAL ENGAGEMENT',
                    data: [
                      { label: 'Instagram', value: '8.4% engagement' },
                      { label: 'TikTok', value: '12.7% engagement' },
                      { label: 'Twitter', value: '6.2% engagement' }
                    ],
                    color: 'from-purple-500 to-pink-500'
                  }
                ].map((insight, index) => (
                  <motion.div
                    key={insight.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="glass-effect rounded-3xl p-8"
                  >
                    <h4 className="text-xl font-black mb-6 text-center">{insight.title}</h4>
                    <div className="space-y-4">
                      {insight.data.map((item, idx) => (
                        <div key={item.label} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">{item.label}</span>
                            <span className="font-bold">{item.value}</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${parseInt(item.value)}%` }}
                              transition={{ duration: 1, delay: idx * 0.2 }}
                              className={`h-2 bg-gradient-to-r ${insight.color} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Media Kit */}
          {selectedTab === 'media-kit' && (
            <motion.div
              key="media-kit"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h3 className="text-3xl font-black mb-6">DIGITAL MEDIA KIT</h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Professional media resources for journalists, bloggers, and content creators.
                  High-quality assets ready for immediate use.
                </p>
              </div>

              {/* Media Kit Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mediaKitItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="glass-effect rounded-3xl overflow-hidden group"
                  >
                    {/* Preview */}
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        {item.category === 'images' && <Image className="w-16 h-16 text-white/40" />}
                        {item.category === 'video' && <Video className="w-16 h-16 text-white/40" />}
                        {item.category === 'documents' && <FileText className="w-16 h-16 text-white/40" />}
                        {item.category === 'branding' && <Palette className="w-16 h-16 text-white/40" />}
                        {item.category === 'graphics' && <Sparkles className="w-16 h-16 text-white/40" />}
                      </div>

                      {/* Download Count */}
                      <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full text-xs font-bold">
                        {item.downloads} downloads
                      </div>

                      {/* Download Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center"
                      >
                        <motion.button
                          onClick={() => handleDownload(item.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white text-black px-6 py-3 rounded-2xl font-bold flex items-center space-x-2"
                          disabled={downloadingKit === item.id}
                        >
                          {downloadingKit === item.id ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                              />
                              <span>Downloading...</span>
                            </>
                          ) : (
                            <>
                              <Download className="w-5 h-5" />
                              <span>Download</span>
                            </>
                          )}
                        </motion.button>
                      </motion.div>
                    </div>

                    {/* Item Details */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="text-xl font-black mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Type:</span>
                          <p className="font-semibold">{item.type}</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Size:</span>
                          <p className="font-semibold">{item.size}</p>
                        </div>
                        <div className="col-span-2">
                          <span className="text-gray-400">Last Updated:</span>
                          <p className="font-semibold">{item.lastUpdated}</p>
                        </div>
                      </div>

                      <motion.button
                        onClick={() => handleDownload(item.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-white text-black py-3 rounded-2xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                        disabled={downloadingKit === item.id}
                      >
                        {downloadingKit === item.id ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                            />
                            <span>Downloading...</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-5 h-5" />
                            <span>Download {item.type}</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Usage Guidelines */}
              <div className="glass-effect rounded-3xl p-8">
                <h4 className="text-2xl font-black mb-6 text-center">USAGE GUIDELINES</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-lg font-bold mb-4 text-green-500">Allowed Usage</h5>
                    <div className="space-y-3">
                      {[
                        'Editorial coverage and news reporting',
                        'Social media posts with proper attribution',
                        'Educational and non-commercial use',
                        'Blog posts and articles about the festival',
                        'Academic research and documentation'
                      ].map((item) => (
                        <div key={item} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-bold mb-4 text-red-500">Restrictions</h5>
                    <div className="space-y-3">
                      {[
                        'Commercial use without prior permission',
                        'Modification of logos or brand elements',
                        'Use in promotional materials for other events',
                        'Resale or redistribution of assets',
                        'Use that misrepresents the festival'
                      ].map((item) => (
                        <div key={item} className="flex items-start space-x-3">
                          <AlertCircle className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-2xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <Info className="w-6 h-6 text-blue-500" />
                    <h5 className="font-bold text-blue-500">Attribution Required</h5>
                  </div>
                  <p className="text-sm text-gray-300">
                    All media assets must be attributed to &quot;Free the Youth Festival&quot; with a link to
                    www.freetheyouth.com when used online. For commercial usage inquiries, contact our press team.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Contact */}
          {selectedTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="text-center">
                <h3 className="text-3xl font-black mb-6">PRESS CONTACT</h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Connect with our press team for interviews, partnership inquiries,
                  and exclusive access to festival content and events.
                </p>
              </div>

              {/* Contact Team */}
              <div className="grid md:grid-cols-2 gap-8">
                {contactTeam.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-effect rounded-3xl p-8"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-10 h-10 text-white/60" />
                      </div>

                      <div className="flex-1 space-y-4">
                        <div>
                          <h4 className="text-xl font-black mb-1">{member.name}</h4>
                          <p className="text-gray-400 mb-3">{member.role}</p>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {member.bio}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-blue-500" />
                            <a href={`mailto:${member.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                              {member.email}
                            </a>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-green-500" />
                            <span className="text-green-400">{member.phone}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Clock className="w-5 h-5 text-purple-500" />
                            <span className="text-purple-400">{member.availability}</span>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-bold mb-2 text-sm">Specialties:</h5>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty) => (
                              <span key={specialty} className="text-xs bg-white/10 px-2 py-1 rounded-full">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                            <span>Email</span>
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 border border-white/30 px-4 py-2 rounded-xl font-semibold hover:border-white/50 transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                            <span>Call</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="glass-effect rounded-3xl p-8">
                <h4 className="text-2xl font-black mb-6 text-center">SEND US A MESSAGE</h4>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Company/Organization</label>
                      <input
                        type="text"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                        placeholder="Your company or publication"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Subject *</label>
                      <select
                        required
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40"
                      >
                        <option value="">Select a subject</option>
                        <option value="press">Press Inquiry</option>
                        <option value="interview">Interview Request</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="coverage">Media Coverage</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea
                      required
                      rows={6}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 resize-none"
                      placeholder="Tell us about your inquiry, deadlines, and how we can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-6 h-6" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Logo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24 pt-16 border-t border-white/10"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Logo
              src="/logo.png"
              alt="Festival Logo"
              width={100}
              height={100}
              className="mx-auto mb-4"
              priority
            />
            <p className="text-gray-400 mt-2 text-lg tracking-wide">
              FASHION FESTIVAL 2025 • ACCRA, GHANA
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
            <span>© 2025 Free the Youth. All rights reserved.</span>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Press Center</a>
              <a href="#" className="hover:text-white transition-colors">Media Kit</a>
              <a href="#" className="hover:text-white transition-colors">Partnership Inquiries</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}