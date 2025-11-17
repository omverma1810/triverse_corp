'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Sparkles, value: '9+', label: 'PROJECTS DELIVERED' },
    { icon: TrendingUp, value: '25L+', label: 'REVENUE GENERATED' },
    { icon: Users, value: '100%', label: 'CLIENT SATISFACTION' },
  ];

  const techStack = [
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 px-6"
      style={{
        background: 'linear-gradient(135deg, #0A192F 0%, #1A1A2E 100%)',
      }}
    >
      {/* Simple Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(108, 92, 231, 0.1), transparent 70%)',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow"
          >
            Transform Vision Into
            <br />
            <span className="gradient-text">Market Leaders</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Enterprise-grade mobile apps, web platforms, and AI solutions that
            increase revenue by <strong className="text-gold">Rs. 25L+</strong>. Trusted by startups and{' '}
            <strong className="text-blue">Rs. 1Cr+ businesses</strong> across USA and India.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              SCHEDULE CONSULTATION
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#portfolio" className="btn-secondary">
              VIEW PORTFOLIO
            </a>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="card text-center group"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue" />
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-xs text-gray-500 tracking-widest uppercase mb-8 font-semibold">
            POWERED BY:
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:border-blue hover:bg-white/10 transition-all cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
