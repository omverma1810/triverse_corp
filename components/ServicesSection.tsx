'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import {
  Smartphone,
  Globe,
  Cloud,
  Brain,
  Server,
  Settings,
  ArrowRight,
} from 'lucide-react';
import { OrbitingIcons } from '@/components/ui/OrbitingIcons';
import { PremiumCard } from '@/components/ui/PremiumCard';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const ServicesSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Native iOS & Android apps with React Native and Flutter. From concept to App Store deployment.',
      keyPoints: ['Cross-platform', 'Offline-first', 'Real-time sync'],
      glowColor: 'blue' as const,
      iconColor: '#00D9FF',
    },
    {
      icon: Globe,
      title: 'Web Platform Development',
      description:
        'Scalable web applications with Next.js and Django. Built for performance and SEO.',
      keyPoints: ['Responsive', 'Fast', 'SEO-optimized'],
      glowColor: 'purple' as const,
      iconColor: '#6C5CE7',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description:
        'AWS and GCP infrastructure. CI/CD pipelines, auto-scaling, and 99.9% uptime.',
      keyPoints: ['Scalable', 'Secure', 'Monitored'],
      glowColor: 'pink' as const,
      iconColor: '#FF0080',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description:
        'Custom AI models, computer vision, NLP. Award-winning ML implementations.',
      keyPoints: ['TensorFlow', 'PyTorch', 'Production-ready'],
      glowColor: 'gold' as const,
      iconColor: '#FFD700',
    },
    {
      icon: Server,
      title: 'Backend Systems',
      description:
        'Robust APIs and databases. Django, Node.js, PostgreSQL, MongoDB.',
      keyPoints: ['RESTful', 'GraphQL', 'High-performance'],
      glowColor: 'blue' as const,
      iconColor: '#50C878',
    },
    {
      icon: Settings,
      title: 'Ongoing Management',
      description:
        'Post-launch support, feature updates, performance optimization, and tax services.',
      keyPoints: ['24/7 Support', 'Updates', 'Compliance'],
      glowColor: 'purple' as const,
      iconColor: '#9966CC',
    },
  ];

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A0E27 0%, #1E1E2E 50%, #0A0E27 100%)',
      }}
    >
      {/* 3D Orbiting Icons Background - Desktop Only */}
      {!isMobile && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 z-10 pointer-events-none opacity-60">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <OrbitingIcons />
              <Environment preset="night" />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container-custom relative z-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full glass-dark border border-electric-blue/30 mb-6"
          >
            <span className="text-electric-blue font-accent text-sm uppercase tracking-widest">
              Our Expertise
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-pure-white mb-6 text-shadow">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-warm-grey font-body text-lg md:text-xl max-w-3xl mx-auto">
            End-to-end software solutions powered by cutting-edge technology and delivered with museum-quality craftsmanship
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
            >
              <PremiumCard glowColor={service.glowColor} className="h-full">
                {/* Icon with Premium Glow */}
                <div className="icon-glow-container mb-6">
                  <div
                    className="icon-glow"
                    style={{
                      background: `radial-gradient(circle, ${service.iconColor} 0%, transparent 70%)`,
                    }}
                  />
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center relative z-10 glass"
                    style={{
                      background: `${service.iconColor}20`,
                    }}
                  >
                    <service.icon
                      className="w-8 h-8"
                      style={{ color: service.iconColor }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-semibold text-pure-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-warm-grey font-body mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Points */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.keyPoints.map((point) => (
                    <span
                      key={point}
                      className="text-xs glass-dark px-3 py-1.5 rounded-full font-accent uppercase tracking-wide"
                      style={{ color: service.iconColor }}
                    >
                      {point}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center text-electric-blue hover:text-neon-pink transition-colors duration-300 group cursor-pointer">
                  <span className="text-sm font-accent font-semibold uppercase tracking-wider">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
