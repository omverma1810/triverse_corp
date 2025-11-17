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
    <section className="section-padding bg-light-bg">
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Why Choose <span className="gradient-text">Triverse Corp</span>?
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
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
                rotate: 1,
                boxShadow: '0 20px 40px rgba(108, 92, 231, 0.3)',
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-electric-blue to-deep-purple flex items-center justify-center mb-6"
              >
                <benefit.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-deep-purple transition-colors duration-300">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-text-light leading-relaxed">
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
