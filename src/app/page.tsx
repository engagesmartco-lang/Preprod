'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useWaitlist } from '@/hooks/useWaitlist';
import { 
  ArrowRight, 
  BarChart3, 
  Users, 
  Target, 
  MessageSquare, 
  TrendingUp, 
  Shield, 
  Zap,
  CheckCircle,
  Sparkles,
  Rocket,
  Brain,
  Heart,
  Award,
  Globe,
  Clock,
  Menu,
  X,
  ShoppingCart,
  AlertTriangle,
  Megaphone,
  TrendingDown,
  Repeat,
  Layers,
  Workflow,
  Bell,
  Smartphone,
  Mail
} from 'lucide-react';

// Animated Counter Component
function AnimatedCounter({ target, duration }: { target: number; duration: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const currentCount = Math.floor(progress * target);
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [target, duration]);
  
  return <span>{count.toLocaleString()}</span>;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end start"]
  // });

  const { email, setEmail, isLoading, isSuccess, error, submitWaitlist, reset } = useWaitlist();

  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "EngageSmart",
            "description": "AI-powered customer retention platform that helps businesses predict churn, engage customers, and drive growth by turning first-time buyers into loyal customers.",
            "url": process.env.NEXT_PUBLIC_APP_URL || "https://engagesmart.com",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "description": "AI customer retention platform with early access pricing for waitlist members",
              "availability": "https://schema.org/PreOrder"
            },
            "featureList": [
              "AI-powered customer persona creation",
              "Automated personalized messaging",
              "Churn prediction and prevention",
              "Shopify integration",
              "Real-time customer analytics",
              "Multi-channel engagement (Email, SMS, Push)"
            ],
            "provider": {
              "@type": "Organization",
              "name": "EngageSmart",
              "url": process.env.NEXT_PUBLIC_APP_URL || "https://engagesmart.com"
            }
          })
        }}
      />
      <div ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"
            >
              EngageSmart
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 text-sm">
                  Features
                </a>
                <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 text-sm">
                  How It Works
                </a>
                <a href="#waitlist" className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 text-sm">
                  Join Waitlist
                </a>
              </div>
              <div className="flex items-center space-x-4 ml-8">
                <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 text-sm">
                  Log in
                </button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                >
                  Join Waitlist
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 py-4"
            >
              <div className="flex flex-col space-y-4">
                <a 
                  href="#features" 
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
                <a 
                  href="#waitlist" 
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Waitlist
                </a>
                <div className="pt-4 border-t border-gray-200">
                  <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 py-2 block w-full text-left">
                    Log in
                  </button>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full mt-2"
                  >
                    Join Waitlist
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* 1️⃣ SIMPLE HERO Section - Clean & Focused */}
      <main className="relative min-h-screen flex items-center justify-center pt-20 bg-white">
        {/* Subtle Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/20" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Simple Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Sparkles className="w-4 h-4" />
                Starting with Shopify
              </motion.div>
              
              {/* Clean Headline */}
              <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-[1.1] tracking-tight">
                Stop Losing Customers.
                <br />
                <span className="text-blue-600">Start Growing Revenue.</span>
              </h1>
              
              {/* Simple Value Proposition */}
              <p className="text-2xl text-gray-600 leading-relaxed max-w-2xl font-medium">
                Our AI creates unique customer personas and predicts when each customer will buy again. 
                Then sends the perfect personalized message at the perfect time to turn one-time buyers into repeat customers.
              </p>
              
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Animated Data Dashboard */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Live Dashboard Demo</h3>
                  <p className="text-blue-50">Watch AI turn customers into repeat buyers in real-time</p>
                </div>

                {/* Animated Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Live Revenue Counter */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Revenue Generated</h4>
                        <motion.div 
                          className="text-3xl font-bold text-green-600"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          $<AnimatedCounter target={12750} duration={3} />
                        </motion.div>
                        <p className="text-sm text-gray-600 mt-1">+127% increase this month</p>
              </div>
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Customer Personas Animation */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-semibold text-gray-900">AI Creating Customer Personas</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "Sarah M.", persona: "Frequent Buyer", color: "blue", delay: 1.0 },
                        { name: "Mike R.", persona: "Price Sensitive", color: "purple", delay: 1.2 },
                        { name: "Lisa K.", persona: "Brand Loyal", color: "green", delay: 1.4 },
                        { name: "John D.", persona: "Seasonal Buyer", color: "orange", delay: 1.6 }
                      ].map((customer, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: customer.delay }}
                          className={`bg-${customer.color}-50 border border-${customer.color}-200 p-4 rounded-lg`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 bg-${customer.color}-100 rounded-full flex items-center justify-center`}>
                              <Users className={`w-5 h-5 text-${customer.color}-600`} />
                </div>
                            <div>
                              <div className="font-semibold text-gray-900 text-sm">{customer.name}</div>
                              <div className={`text-xs text-${customer.color}-600`}>{customer.persona}</div>
                </div>
                </div>
                        </motion.div>
                      ))}
              </div>
            </motion.div>
            
                  {/* Live Message Sending - Innovative Visual */}
            <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    className="space-y-6"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 text-center">AI Sending Personalized Messages</h4>
                    
                    {/* Message Flow Visualization */}
                    <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
                      {/* AI Brain Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 2.0 }}
                        className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Brain className="w-6 h-6 text-white" />
                      </motion.div>

                      {/* Message Bubbles */}
                      <div className="space-y-4 ml-16">
                        {/* SMS Message */}
                        <motion.div
                          initial={{ opacity: 0, x: -50, y: 20 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ duration: 0.6, delay: 2.2 }}
              className="relative"
            >
                          <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-lg border border-gray-200 max-w-xs">
                            <div className="flex items-center gap-2 mb-2">
                              <Smartphone className="w-4 h-4 text-blue-500" />
                              <span className="text-xs font-semibold text-gray-600">SMS to Sarah</span>
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.5, delay: 2.4 }}
                                className="w-2 h-2 bg-green-500 rounded-full"
                              />
                  </div>
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.8, delay: 2.6 }}
                              className="text-sm text-gray-800"
                            >
                              Hi Sarah! Your favorite items are 20% off today 🛍️
                            </motion.p>
                  </div>
                          {/* Delivery Animation */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 2.8 }}
                            className="absolute -right-2 -top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                          >
                            <CheckCircle className="w-4 h-4 text-white" />
                          </motion.div>
                        </motion.div>

                        {/* Email Message */}
                        <motion.div
                          initial={{ opacity: 0, x: -50, y: 20 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ duration: 0.6, delay: 3.0 }}
                          className="relative"
                        >
                          <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-lg border border-gray-200 max-w-xs">
                            <div className="flex items-center gap-2 mb-2">
                              <Mail className="w-4 h-4 text-purple-500" />
                              <span className="text-xs font-semibold text-gray-600">Email to Mike</span>
                              <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1, repeat: Infinity, delay: 3.2 }}
                                className="w-2 h-2 bg-blue-500 rounded-full"
                              />
                </div>
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.8, delay: 3.4 }}
                              className="text-sm text-gray-800"
                            >
                              Mike, check out these deals just for you! 💰
                            </motion.p>
                          </div>
                          {/* Sending Animation */}
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, delay: 3.2 }}
                            className="absolute -right-2 -top-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                          >
                            <motion.div
                              animate={{ scale: [0.8, 1.2, 0.8] }}
                              transition={{ duration: 0.5, repeat: Infinity }}
                              className="w-2 h-2 bg-white rounded-full"
                            />
                          </motion.div>
                        </motion.div>

                        {/* Push Notification */}
                        <motion.div
                          initial={{ opacity: 0, x: -50, y: 20 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ duration: 0.6, delay: 3.6 }}
                          className="relative"
                        >
                          <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-lg border border-gray-200 max-w-xs">
                            <div className="flex items-center gap-2 mb-2">
                              <Bell className="w-4 h-4 text-orange-500" />
                              <span className="text-xs font-semibold text-gray-600">Push to Lisa</span>
                              <motion.div
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: 3.8 }}
                                className="w-2 h-2 bg-orange-500 rounded-full"
                              />
                            </div>
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.8, delay: 4.0 }}
                              className="text-sm text-gray-800"
                            >
                              Lisa, new arrivals you&apos;ll love! ✨
                            </motion.p>
                          </div>
                          {/* Queued Animation */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 4.2 }}
                            className="absolute -right-2 -top-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center"
                          >
                            <Clock className="w-4 h-4 text-white" />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Floating Message Icons */}
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
                        className="absolute top-8 right-8 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                      >
                        <MessageSquare className="w-4 h-4 text-green-600" />
                      </motion.div>
                      
                      <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 3.0 }}
                        className="absolute bottom-8 right-12 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center"
                      >
                        <Mail className="w-3 h-3 text-purple-600" />
                      </motion.div>

                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: 3.5 }}
                        className="absolute top-16 right-4 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center"
                      >
                        <Smartphone className="w-3 h-3 text-blue-600" />
                      </motion.div>
                    </div>

                    {/* Live Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 4.4 }}
                      className="grid grid-cols-3 gap-4"
                    >
                      <div className="text-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 4.6 }}
                          className="text-2xl font-bold text-green-600"
                        >
                          247
                        </motion.div>
                        <div className="text-xs text-gray-600">Messages Sent</div>
                      </div>
                      <div className="text-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 4.8 }}
                          className="text-2xl font-bold text-blue-600"
                        >
                          94%
                        </motion.div>
                        <div className="text-xs text-gray-600">Open Rate</div>
                      </div>
                      <div className="text-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 5.0 }}
                          className="text-2xl font-bold text-purple-600"
                        >
                          23%
                        </motion.div>
                        <div className="text-xs text-gray-600">Click Rate</div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Success Metrics */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.6 }}
                    className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200"
                  >
                    {[
                      { value: "94%", label: "Retention", color: "blue", icon: Shield },
                      { value: "+127%", label: "Revenue", color: "green", icon: BarChart3 },
                      { value: "2.3x", label: "LTV", color: "purple", icon: Target }
                      ].map((stat, index) => (
                        <motion.div 
                          key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 2.8 + index * 0.1 }}
                        className={`bg-${stat.color}-50 p-4 rounded-lg text-center`}
                      >
                        <div className={`w-8 h-8 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-2`}>
                          <stat.icon className={`w-4 h-4 text-${stat.color}-600`} />
                        </div>
                        <div className={`text-2xl font-bold text-${stat.color}-600 mb-1`}>
                            {stat.value}
                          </div>
                        <div className="text-xs font-semibold text-gray-600">{stat.label}</div>
                        </motion.div>
                      ))}
                  </motion.div>
                    </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* 2️⃣ Problem Section - The Crisis (Moved up for better story flow) */}
      <section className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-red-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl"></div>
                      </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg mb-8">
              <AlertTriangle className="w-5 h-5" />
              The Customer Retention Crisis
            </div>
                    
            <h2 className="text-6xl lg:text-8xl font-black text-gray-900 mb-12 leading-[1.1] tracking-tight">
              Every Day You Lose
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"> $127</span>
            </h2>
            
            <p className="text-3xl text-gray-600 leading-relaxed mb-20 font-medium max-w-4xl mx-auto">
              Because your customers buy once and never return
            </p>

            {/* Live Revenue Loss Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-red-200 mb-12 max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Live Revenue Loss</h3>
                <p className="text-gray-600">Money disappearing from your business right now</p>
                    </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Daily Loss */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl font-black text-red-600 mb-2"
                  >
                    $<AnimatedCounter target={127} duration={3} />
                  </motion.div>
                  <div className="text-sm text-gray-600 font-semibold">Lost Today</div>
                </motion.div>

                {/* Monthly Loss */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="text-4xl font-black text-orange-600 mb-2"
                  >
                    $<AnimatedCounter target={3810} duration={4} />
                  </motion.div>
                  <div className="text-sm text-gray-600 font-semibold">Lost This Month</div>
                </motion.div>

                {/* Yearly Loss */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="text-4xl font-black text-red-700 mb-2"
                  >
                    $<AnimatedCounter target={46355} duration={5} />
                  </motion.div>
                  <div className="text-sm text-gray-600 font-semibold">Lost This Year</div>
                </motion.div>
                  </div>
            </motion.div>

            {/* Shocking Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-8 mb-12"
            >
              {[
                { stat: "68%", label: "of customers never return", color: "text-red-600" },
                { stat: "5x", label: "more expensive to get new customers", color: "text-orange-600" },
                { stat: "80%", label: "of revenue comes from repeat customers", color: "text-yellow-600" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                >
                  <div className={`text-5xl font-black ${item.color} mb-2`}>
                    {item.stat}
                </div>
                  <div className="text-gray-600 font-semibold text-center">
                    {item.label}
              </div>
            </motion.div>
              ))}
            </motion.div>

            {/* Customer Churn Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Customer Journey: The Problem</h3>
              
              <div className="relative">
                {/* Customer Flow */}
                <div className="flex items-center justify-between mb-8">
                  {[
                    { label: "First Purchase", icon: ShoppingCart, color: "bg-green-500" },
                    { label: "No Follow-up", icon: X, color: "bg-yellow-500" },
                    { label: "Customer Leaves", icon: TrendingDown, color: "bg-red-500" },
                    { label: "Buys from Competitor", icon: Target, color: "bg-purple-500" }
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.3 }}
                      className="flex flex-col items-center"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: 1 + index * 0.5 
                        }}
                        className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="text-sm font-semibold text-gray-700 text-center">
                        {step.label}
          </div>
                    </motion.div>
                  ))}
        </div>

                {/* Animated Arrows */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-full">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 + i * 0.3 }}
                      className="absolute"
                      style={{ left: `${25 + i * 25}%` }}
                    >
                      <motion.div
                        animate={{ x: [0, 20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 + i * 0.5 }}
                        className="text-red-500 text-2xl"
                      >
                        →
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Problem Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="text-center mt-8"
              >
                <p className="text-xl text-gray-700 font-semibold mb-4">
                  Without personalized follow-up, customers forget about your brand
                </p>
                <p className="text-gray-600">
                  They buy from competitors who stay in touch with relevant messages
                </p>
              </motion.div>
            </motion.div>

            {/* Interactive Problem Explorer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 text-white"
            >
              <h3 className="text-3xl font-bold text-center mb-8">The Real Cost of Customer Churn</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">What You&apos;re Losing:</h4>
                  <ul className="space-y-3">
                    {[
                      "Lifetime customer value",
                      "Word-of-mouth referrals", 
                      "Brand loyalty and trust",
                      "Predictable revenue streams"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <X className="w-5 h-5 text-red-200" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4">What Competitors Gain:</h4>
                  <ul className="space-y-3">
                    {[
                      "Your hard-won customers",
                      "Higher market share",
                      "Better customer data",
                      "Stronger brand presence"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <TrendingUp className="w-5 h-5 text-green-200" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ Solution Introduction - The Turning Point */}
      <section className="py-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg mb-8"
            >
              <Heart className="w-5 h-5" />
              Your Trusted Solution Partner
            </motion.div>
            
            <h2 className="text-6xl lg:text-8xl font-black text-gray-900 mb-12 leading-[1.1] tracking-tight">
              But What If There Was 
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                A Better Way?
              </span>
            </h2>
            
            <p className="text-3xl text-gray-600 leading-relaxed mb-20 font-medium max-w-4xl mx-auto">
              What if you could turn every first-time buyer into a loyal, repeat customer? 
              What if your customers came back again and again, without you having to chase them?
            </p>
          
            {/* What We Do */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <p className="text-lg text-gray-600 mb-8 font-semibold">Our approach to customer retention</p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {[
                  "AI-Powered Insights", "Personalized Messaging", "Behavioral Analytics", "Automated Campaigns", "Shopify Integration", "Real-time Optimization"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-white rounded-xl px-6 py-3 shadow-lg border border-gray-200"
                  >
                    <span className="text-gray-700 font-semibold">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* How We Solve the Problem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 mb-16"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">How We Solve Your Retention Problem</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { 
                    icon: <Brain className="w-12 h-12 text-blue-600" />,
                    title: "AI-Powered Persona Tagging",
                    description: "Automatically categorize customers based on behavior, preferences, and purchase history"
                  },
                  { 
                    icon: <Target className="w-12 h-12 text-green-600" />,
                    title: "Predictive Analytics",
                    description: "Know exactly when customers are likely to churn and what will bring them back"
                  },
                  { 
                    icon: <Zap className="w-12 h-12 text-purple-600" />,
                    title: "Automated Messaging",
                    description: "Send personalized messages at the perfect time through email, SMS, and push notifications"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Our Promise */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid md:grid-cols-2 gap-8 mb-16"
            >
              {[
                {
                  title: "What We Promise",
                  items: [
                    "AI-powered customer insights",
                    "Personalized message automation", 
                    "Easy Shopify integration",
                    "Real-time performance tracking"
                  ],
                  icon: "🎯"
                },
                {
                  title: "What You Get",
                  items: [
                    "Reduced customer churn",
                    "Higher repeat purchase rates",
                    "Automated follow-up campaigns",
                    "Data-driven recommendations"
                  ],
                  icon: "🚀"
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{section.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900">{section.title}</h4>
                      </div>
                  
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Our Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white mb-16"
            >
              <h3 className="text-3xl font-bold text-center mb-8">Our Commitment to You</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                  <h4 className="text-xl font-bold mb-2">Data Security</h4>
                  <p className="text-blue-100">Your customer data is encrypted and protected with industry-standard security</p>
                    </div>
                
                <div className="text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                  <h4 className="text-xl font-bold mb-2">Reliable Support</h4>
                  <p className="text-blue-100">We&apos;re here to help you succeed with responsive customer support</p>
                  </div>
                  
                <div className="text-center">
                  <Award className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                  <h4 className="text-xl font-bold mb-2">Transparent Pricing</h4>
                  <p className="text-blue-100">No hidden fees, no surprises - just honest, straightforward pricing</p>
                      </div>
                    </div>
            </motion.div>

          </motion.div>
                  </div>
      </section>

      {/* 4️⃣ The Solution - How EngageSmart Works */}
      <section id="how-it-works" className="py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-60 h-60 bg-blue-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl"></div>
                      </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg mb-8"
            >
              <Workflow className="w-5 h-5" />
              Simple 3-Step Process
            </motion.div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Here&apos;s How We Turn Your 
              <span className="text-blue-600">One-Time Buyers Into Loyal Customers</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Starting with Shopify, expanding to WooCommerce, BigCommerce, and more platforms soon.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-16 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 transform -translate-y-1/2 z-0"></div>
            
            {[
              {
                step: "1",
                title: "Connect Your Shopify Store",
                description: "One-click integration with your Shopify store to sync customer data and order history.",
                icon: <Globe className="w-20 h-20 text-white" />,
                color: "from-blue-500 to-blue-600",
                bgColor: "from-blue-50 to-blue-100",
                borderColor: "border-blue-200",
                platforms: ["Shopify Integration", "Customer Data Sync", "Order History"]
              },
              {
                step: "2", 
                title: "AI Creates Personas",
                description: "Our AI analyzes customer behavior and automatically creates detailed personas for targeted marketing.",
                icon: <Users className="w-20 h-20 text-white" />,
                color: "from-green-500 to-green-600",
                bgColor: "from-green-50 to-green-100",
                borderColor: "border-green-200",
                platforms: ["Persona Creation", "Behavior Analysis", "Customer Segmentation"]
              },
              {
                step: "3",
                title: "Send Personalized Messages", 
                description: "AI sends the right message to the right customer at the perfect time for maximum impact.",
                icon: <MessageSquare className="w-20 h-20 text-white" />,
                color: "from-purple-500 to-purple-600",
                bgColor: "from-purple-50 to-purple-100",
                borderColor: "border-purple-200",
                platforms: ["Email Automation", "SMS Campaigns", "Push Notifications"]
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.3, ease: "easeOut" }}
                whileHover={{ y: -20, scale: 1.05 }}
                className="text-center relative z-10"
              >
                <div className={`bg-gradient-to-br ${step.bgColor} backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border ${step.borderColor} border-opacity-50`}>
                  {/* Step Number */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex justify-center mb-8"
                  >
                    <div className={`w-32 h-32 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white text-4xl font-black shadow-2xl relative`}>
                      {step.step}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="absolute inset-0 bg-white/20 rounded-full"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="flex justify-center mb-8"
                  >
                    <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                      {step.icon}
                  </div>
                  </motion.div>
                  
                  <h3 className="text-3xl font-black text-gray-900 mb-6 leading-tight">{step.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">{step.description}</p>
                  
                  {/* Platform Tags */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {step.platforms.map((platform, platformIndex) => (
                      <motion.span
                        key={platformIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: platformIndex * 0.1 }}
                        className={`px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-bold text-gray-700 border ${step.borderColor} shadow-lg`}
                      >
                        {platform}
                      </motion.span>
                ))}
                </div>
                </div>
                
                {/* Arrow */}
                {index < 2 && (
                  <motion.div 
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-20"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-200">
                      <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>
            </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-20"
          >
              <motion.button 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                y: -5
              }}
                whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black py-6 px-12 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl text-xl group relative overflow-hidden"
              >
              <span className="relative z-10">Join Waitlist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>
        </div>
      </section>

      {/* 5️⃣ Proof & Features - Why It Works */}
      <section id="features" className="py-32 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-200/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-200/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg mb-8"
            >
              <Layers className="w-4 h-4" />
              Starting with Shopify
            </motion.div>
            
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-12 leading-[1.1] tracking-tight">
              The Technology That Makes It 
              <span className="text-blue-600">All Possible</span>
            </h2>
            
            <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-medium">
              Advanced AI that understands your customers better than they understand themselves. 
              Every feature designed to turn one-time buyers into lifetime customers.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-16 h-16 text-white" />,
                title: "Smart Persona Creation",
                description: "Automatically creates customer personas based on behavior, purchase history, and engagement patterns.",
                color: "from-blue-500 to-blue-600",
                bgColor: "from-blue-50 to-blue-100",
                borderColor: "border-blue-200",
                features: ["Behavioral Analysis", "Purchase Patterns", "Engagement Tracking", "Persona Insights"]
              },
              {
                icon: <Target className="w-16 h-16 text-white" />,
                title: "Predictive Timing", 
                description: "AI determines the perfect moment to send each message for maximum impact and engagement.",
                color: "from-green-500 to-green-600",
                bgColor: "from-green-50 to-green-100",
                borderColor: "border-green-200",
                features: ["Optimal Send Times", "Behavioral Triggers", "Engagement Prediction", "Smart Scheduling"]
              },
              {
                icon: <Megaphone className="w-16 h-16 text-white" />,
                title: "Personalized Messages",
                description: "Send targeted emails, SMS, and push notifications based on each customer's persona and behavior.",
                color: "from-purple-500 to-purple-600",
                bgColor: "from-purple-50 to-purple-100",
                borderColor: "border-purple-200",
                features: ["Email Automation", "SMS Campaigns", "Push Notifications", "Personalized Content"]
              },
              {
                icon: <AlertTriangle className="w-16 h-16 text-white" />,
                title: "Churn Prevention",
                description: "Identify customers likely to leave and automatically send retention campaigns to keep them engaged.",
                color: "from-red-500 to-red-600",
                bgColor: "from-red-50 to-red-100",
                borderColor: "border-red-200",
                features: ["Risk Scoring", "Early Warning Alerts", "Retention Campaigns", "Customer Health"]
              },
              {
                icon: <BarChart3 className="w-16 h-16 text-white" />,
                title: "Revenue Analytics",
                description: "Track how your persona-based campaigns are driving revenue and customer lifetime value.",
                color: "from-orange-500 to-orange-600",
                bgColor: "from-orange-50 to-orange-100",
                borderColor: "border-orange-200",
                features: ["Revenue Tracking", "LTV Analysis", "Campaign ROI", "Performance Insights"]
              },
              {
                icon: <Shield className="w-16 h-16 text-white" />,
                title: "Shopify First",
                description: "Built specifically for Shopify with seamless integration. More platforms coming soon.",
                color: "from-gray-500 to-gray-600",
                bgColor: "from-gray-50 to-gray-100",
                borderColor: "border-gray-200",
                features: ["One-click Setup", "Real-time Sync", "Shopify Data", "Platform Expansion"]
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-gradient-to-br ${feature.bgColor} backdrop-blur-sm rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 border ${feature.borderColor} border-opacity-50 shadow-xl`}
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center mb-6"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                    {feature.icon}
                      </div>
                </motion.div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                
                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2">
                  {feature.features.map((item, featureIndex) => (
                    <motion.span
                      key={featureIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      className={`px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-gray-700 border ${feature.borderColor} shadow-sm`}
                    >
                      {item}
                    </motion.span>
                  ))}
                    </div>
              </motion.div>
            ))}
                  </div>
        </div>
      </section>


      {/* 6️⃣ Your Future Success - The Vision */}
      <section className="py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl"></div>
                      </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg mb-8"
            >
              <Rocket className="w-5 h-5" />
              Your Future Success
            </motion.div>
            
            <h2 className="text-6xl lg:text-8xl font-black text-gray-900 mb-12 leading-[1.1] tracking-tight">
              Picture This: Your Business 
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                90 Days From Now
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  text: "More repeat customers buying automatically",
                  icon: <Repeat className="w-16 h-16 text-white" />,
                  color: "from-green-500 to-green-600",
                  bgColor: "from-green-50 to-green-100"
                },
                {
                  text: "Predictable, growing revenue", 
                  icon: <TrendingUp className="w-16 h-16 text-white" />,
                  color: "from-blue-500 to-blue-600",
                  bgColor: "from-blue-50 to-blue-100"
                },
                {
                  text: "Less stress, more focus on growing your business",
                  icon: <Heart className="w-16 h-16 text-white" />,
                  color: "from-purple-500 to-purple-600",
                  bgColor: "from-purple-50 to-purple-100"
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className={`bg-gradient-to-br ${benefit.bgColor} backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200/50`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex justify-center mb-6"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                      {benefit.icon}
                    </div>
                  </motion.div>
                  <p className="text-xl font-bold text-gray-900 leading-relaxed">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
                  
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto border border-gray-200/50 mb-12"
            >
              <div className="text-center">
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative mb-8"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl mx-auto">
                    <Award className="w-12 h-12 text-white" />
                      </div>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"
                  />
                </motion.div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">Coming Soon</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Be among the first to experience the future of customer retention
                </p>
                <div className="flex items-center justify-center gap-8 text-sm font-bold text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Early Access</span>
                    </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Exclusive Pricing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Priority Support</span>
                  </div>
                </div>
              </div>
            </motion.div>

            </motion.div>
        </div>
      </section>



      {/* 7️⃣ FAQ Section - Addressing Your Concerns */}
      <section className="py-32 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-200/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg mb-8"
            >
              <MessageSquare className="w-5 h-5" />
              Frequently Asked Questions
            </motion.div>
            
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              But Wait... You Probably Have 
              <span className="text-blue-600"> Some Questions</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand your concerns. Here are the answers to the questions 
              most business owners ask before joining our waitlist.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                question: "How does it work?",
                answer: "Connect your Shopify store, our AI creates customer personas, then sends personalized messages at the perfect time."
              },
              {
                question: "What platforms do you support?",
                answer: "Starting with Shopify, expanding to WooCommerce and BigCommerce soon."
              },
              {
                question: "How much does it cost?",
                answer: "Pricing details coming soon. Join our waitlist for exclusive early access pricing."
              },
              {
                question: "Do I need technical skills?",
                answer: "No! One-click Shopify integration. Our AI handles everything else."
              },
              {
                question: "Is my data safe?",
                answer: "Yes. We only use basic order data and protect everything with industry-standard security."
              },
              {
                question: "Can I customize the messages?",
                answer: "Absolutely! Full control over templates, timing, and messaging to match your brand."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 mb-8">
              Still have questions? We&apos;d love to hear from you!
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 8️⃣ The Call to Action - Your Next Step */}
      <section id="waitlist" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">
              Ready to Stop Losing Customers?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Join thousands of business owners who are already on our waitlist. 
              Be the first to know when we launch and get exclusive early access pricing.
            </p>
            
            <div className="bg-white rounded-2xl p-12 shadow-xl max-w-2xl mx-auto">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to the Waitlist! 🎉</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for joining! Check your email for confirmation and exclusive updates.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={reset}
                    className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Join Another Email
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Early Access</h3>
                  <p className="text-gray-600 mb-8">
                    Join thousands of Shopify store owners who are already on our waitlist. 
                    You&apos;ll be the first to know when we launch and get exclusive early access pricing.
                  </p>
                  
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (email) {
                        submitWaitlist(email, 'website');
                      }
                    }}
                    className="flex flex-col sm:flex-row gap-4 mb-8"
                  >
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <motion.button 
                      type="submit"
                      disabled={isLoading || !email}
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Joining...
                        </>
                      ) : (
                        'Join Waitlist'
                      )}
                    </motion.button>
                  </form>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
                    >
                      <p className="text-red-600 text-sm">{error}</p>
                    </motion.div>
                  )}
                  
                  <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>No spam, ever</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Early access pricing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Exclusive updates</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-black bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4"
            >
                EngageSmart
            </motion.div>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Turn first-time buyers into loyal customers with AI-powered insights and engagement.
              </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
              <a href="#waitlist" className="text-gray-400 hover:text-white transition-colors">Join Waitlist</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-500 text-sm">
                &copy; 2025 EngageSmart, Inc. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}