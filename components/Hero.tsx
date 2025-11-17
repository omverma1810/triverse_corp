'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import { SmartphoneModel } from '@/components/ui/SmartphoneModel';
import { ParticleNetwork } from '@/components/ui/ParticleNetwork';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import {
  fadeInUp,
  wordStagger,
  wordFadeIn,
  scaleIn,
} from '@/lib/animations';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stats = [
    { icon: Sparkles, value: '9+', label: 'Projects Delivered', color: '#00D9FF' },
    { icon: TrendingUp, value: '25L+', label: 'Revenue Generated', color: '#FFD700' },
    { icon: Users, value: '100%', label: 'Client Satisfaction', color: '#50C878' },
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, #0A0E27 0%, #1A1A2E 50%, #0A0E27 100%)',
      }}
    >
      {/* Three.js 3D Phone Model - Desktop Only */}
      {!isMobile && (
        <div className="absolute right-0 top-0 w-1/2 h-full z-10 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <SmartphoneModel scale={1.5} />
              <ParticleNetwork count={150} />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Metallic Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(108, 92, 231, 0.1) 50%, rgba(255, 215, 0, 0.05) 100%)',
        }}
      />

      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-cosmic-purple animate-gradient-shift" />
      </div>

      <div className="container-custom relative z-20">
        <div className="text-center lg:text-left max-w-5xl lg:max-w-3xl mx-auto lg:mx-0">
          {/* Premium Headline with Luxury Typography */}
          <motion.div
            variants={wordStagger}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-tight text-shadow">
              {[
                'Transform',
                'Vision',
                'Into',
              ].map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordFadeIn}
                  className="inline-block mr-4 text-pure-white"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                variants={wordFadeIn}
                className="inline-block gradient-text text-shadow-glow"
              >
                Market Leaders
              </motion.span>
            </h1>
          </motion.div>

          {/* Premium Subheadline */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl font-body text-warm-grey mb-12 max-w-3xl mx-auto lg:mx-0"
          >
            Enterprise-grade mobile apps, web platforms, and AI solutions that increase revenue by{' '}
            <span className="gradient-text-gold font-semibold">Rs. 25L+</span>. Trusted by startups and{' '}
            <span className="text-emerald font-semibold">Rs. 1Cr+ businesses</span>{' '}
            across USA and India.
          </motion.p>

          {/* Luxury CTAs */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16"
          >
            <LuxuryButton
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              onClick={() => window.location.href = '#contact'}
            >
              Schedule Consultation
            </LuxuryButton>

            <LuxuryButton
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '#portfolio'}
            >
              View Portfolio
            </LuxuryButton>
          </motion.div>

          {/* Premium Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto lg:mx-0"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.2,
                }}
                className="premium-card text-center p-8 group cursor-pointer"
              >
                <div className="icon-glow-container mb-6">
                  <div
                    className="icon-glow mx-auto"
                    style={{ background: `radial-gradient(circle, ${stat.color} 0%, transparent 70%)` }}
                  />
                  <stat.icon
                    className="w-12 h-12 mx-auto relative z-10"
                    style={{ color: stat.color }}
                  />
                </div>
                <div
                  className="text-4xl md:text-5xl font-display font-bold mb-3"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}99)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-warm-grey font-accent text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-4 max-w-3xl mx-auto lg:mx-0"
          >
            <span className="text-warm-grey font-accent text-sm uppercase tracking-wider">
              Powered by:
            </span>
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 rounded-lg glass-dark text-warm-grey hover:text-electric-blue transition-all duration-300 font-accent text-sm font-medium cursor-pointer border border-white/5 hover:border-electric-blue/50"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-7 h-12 border-2 border-electric-blue rounded-full flex justify-center relative overflow-hidden"
          style={{
            background: 'rgba(0, 217, 255, 0.05)',
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
          }}
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-4 bg-electric-blue rounded-full mt-2 glow"
          />
        </motion.div>
        <p className="text-warm-grey text-xs font-accent mt-3 text-center uppercase tracking-widest">
          Scroll
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
