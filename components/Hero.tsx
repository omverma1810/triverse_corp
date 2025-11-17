'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';
import {
  fadeInUp,
  wordStagger,
  wordFadeIn,
  scaleIn,
} from '@/lib/animations';

// Dynamically import Three.js component to avoid SSR issues
const ThreeBackground = dynamic(
  () => import('@/components/ui/ThreeBackground'),
  { ssr: false }
);

const Hero = () => {
  const stats = [
    { icon: Sparkles, value: '9+', label: 'Projects Delivered' },
    { icon: TrendingUp, value: '25L+', label: 'Revenue Generated' },
    { icon: Users, value: '100%', label: 'Client Satisfaction' },
  ];

  const techIcons = [
    'React',
    'Next.js',
    'Django',
    'AWS',
    'Python',
    'TypeScript',
    'PostgreSQL',
    'Docker',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-blue via-[#1a1a3e] to-dark-bg pt-20"
    >
      {/* Three.js Background */}
      <ThreeBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-blue/50 to-navy-blue -z-5" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Headline with Word Animation */}
          <motion.div
            variants={wordStagger}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {[
                'Transform',
                'Your',
                'Vision',
                'Into',
                'Market-Leading',
                'Software',
              ].map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordFadeIn}
                  className={`inline-block mr-4 ${
                    index >= 4 ? 'gradient-text' : 'text-white'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-text-light mb-12 max-w-4xl mx-auto"
          >
            We build enterprise-grade mobile apps, web platforms, and AI
            solutions that increase revenue by{' '}
            <span className="text-gold font-semibold">25 lakhs+</span>. Trusted
            by startups and{' '}
            <span className="text-emerald-green font-semibold">
              Rs. 1Cr+ businesses
            </span>{' '}
            across USA and India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2 group"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              View Our Work
            </motion.a>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.2,
                }}
                className="card-hover text-center p-6"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-electric-blue" />
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-text-light">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-wrap justify-center items-center gap-6"
          >
            <span className="text-text-light text-sm">Powered by:</span>
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.1 }}
                whileHover={{ scale: 1.2, color: '#00D9FF' }}
                className="text-text-light hover:text-electric-blue transition-colors duration-300 text-sm font-medium"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-electric-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
