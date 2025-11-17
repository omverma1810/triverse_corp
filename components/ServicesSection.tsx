'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  Globe,
  Cloud,
  Brain,
  Server,
  Settings,
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Native iOS & Android apps with React Native and Flutter. From concept to App Store deployment.',
      tags: ['CROSS-PLATFORM', 'OFFLINE-FIRST', 'REAL-TIME SYNC'],
    },
    {
      icon: Globe,
      title: 'Web Platform Development',
      description:
        'Scalable web applications with Next.js and Django. Built for performance and SEO.',
      tags: ['RESPONSIVE', 'FAST', 'SEO-OPTIMIZED'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description:
        'AWS and GCP infrastructure. CI/CD pipelines, auto-scaling, and 99.9% uptime.',
      tags: ['SCALABLE', 'SECURE', 'MONITORED'],
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description:
        'Custom AI models, computer vision, NLP. Award-winning ML implementations.',
      tags: ['TENSORFLOW', 'PYTORCH', 'PRODUCTION-READY'],
    },
    {
      icon: Server,
      title: 'Backend Systems',
      description:
        'Robust APIs and databases. Django, Node.js, PostgreSQL, MongoDB.',
      tags: ['RESTFUL', 'GRAPHQL', 'HIGH-PERFORMANCE'],
    },
    {
      icon: Settings,
      title: 'Ongoing Management',
      description:
        'Post-launch support, feature updates, performance optimization, and tax services.',
      tags: ['24/7 SUPPORT', 'UPDATES', 'COMPLIANCE'],
    },
  ];

  return (
    <section
      id="services"
      className="section-padding"
      style={{
        background: '#0A192F',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            What We <span className="gradient-text">Build</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg max-w-3xl mx-auto"
          >
            End-to-end software solutions powered by cutting-edge technology
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-blue/10 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-blue" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-blue/10 text-blue border border-blue/30 font-semibold tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
