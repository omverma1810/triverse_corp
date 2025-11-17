'use client';

import { motion } from 'framer-motion';
import {
  Target,
  TrendingUp,
  Rocket,
  Users,
  Infinity,
  DollarSign,
} from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Domain Expertise',
      description:
        "Currently building ReelOnGo instant delivery platform. We understand your industry's challenges.",
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description:
        'Our clients see 70-110% revenue increase within 12 months. Rs. 25+ lakhs in additional revenue.',
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description:
        'Working MVP in 8-10 weeks. Full platform launch in 6-8 months with continuous updates.',
    },
    {
      icon: Users,
      title: 'Full-Stack Team',
      description:
        'Expert developers in mobile, web, cloud, AI/ML. One team for your entire tech stack.',
    },
    {
      icon: Infinity,
      title: 'End-to-End Service',
      description:
        'From concept to deployment to ongoing management. We handle everything including tax services.',
    },
    {
      icon: DollarSign,
      title: 'Cost Efficiency',
      description:
        'USA-India operations model. Silicon Valley quality at 40-60% lower costs.',
    },
  ];

  return (
    <section className="section-padding" style={{
      background: 'linear-gradient(180deg, #F8F9FB 0%, #FFFFFF 100%)',
    }}>
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6">
            Why Choose <span className="gradient-text">Triverse Corp</span>?
          </h2>
          <p className="text-text-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We deliver results that transform your business
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={staggerItem}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FB 100%)',
                border: '2px solid rgba(108, 92, 231, 0.1)',
              }}
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(0, 217, 255, 0.05) 0%, transparent 70%)',
              }}></div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue to-deep-purple flex items-center justify-center mb-6 relative z-10"
                style={{
                  boxShadow: '0 8px 24px rgba(108, 92, 231, 0.25)',
                }}
              >
                <benefit.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-text-dark mb-4 group-hover:text-deep-purple transition-colors duration-300 relative z-10">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-text-light leading-relaxed text-base relative z-10">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
