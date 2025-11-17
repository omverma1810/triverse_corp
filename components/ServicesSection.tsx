'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  Globe,
  Cloud,
  Brain,
  Server,
  Settings,
  ArrowRight,
} from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Native iOS & Android apps with React Native and Flutter. From concept to App Store deployment.',
      keyPoints: ['Cross-platform', 'Offline-first', 'Real-time sync'],
      color: 'from-electric-blue to-deep-purple',
    },
    {
      icon: Globe,
      title: 'Web Platform Development',
      description:
        'Scalable web applications with Next.js and Django. Built for performance and SEO.',
      keyPoints: ['Responsive', 'Fast', 'SEO-optimized'],
      color: 'from-deep-purple to-vibrant-pink',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description:
        'AWS and GCP infrastructure. CI/CD pipelines, auto-scaling, and 99.9% uptime.',
      keyPoints: ['Scalable', 'Secure', 'Monitored'],
      color: 'from-vibrant-pink to-gold',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description:
        'Custom AI models, computer vision, NLP. Award-winning ML implementations.',
      keyPoints: ['TensorFlow', 'PyTorch', 'Production-ready'],
      color: 'from-gold to-emerald-green',
    },
    {
      icon: Server,
      title: 'Backend Systems',
      description:
        'Robust APIs and databases. Django, Node.js, PostgreSQL, MongoDB.',
      keyPoints: ['RESTful', 'GraphQL', 'High-performance'],
      color: 'from-emerald-green to-electric-blue',
    },
    {
      icon: Settings,
      title: 'Ongoing Management',
      description:
        'Post-launch support, feature updates, performance optimization, and tax services.',
      keyPoints: ['24/7 Support', 'Updates', 'Compliance'],
      color: 'from-electric-blue to-deep-purple',
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-dark-bg grid-pattern relative"
    >
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            End-to-end software solutions powered by cutting-edge technology
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 217, 255, 0.3)',
              }}
              className="card group cursor-pointer"
            >
              {/* Icon with Gradient Background */}
              <div
                className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-light mb-4">{service.description}</p>

              {/* Key Points */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.keyPoints.map((point) => (
                  <span
                    key={point}
                    className="text-xs bg-white/10 text-electric-blue px-3 py-1 rounded-full"
                  >
                    {point}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <div className="flex items-center text-electric-blue group-hover:text-vibrant-pink transition-colors duration-300">
                <span className="text-sm font-semibold">Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </div>

              {/* Gradient Border on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
