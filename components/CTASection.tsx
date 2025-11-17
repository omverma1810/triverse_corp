'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Shield, FileCheck } from 'lucide-react';

const CTASection = () => {
  const trustIndicators = [
    { icon: Clock, text: 'Response within 24hrs' },
    { icon: FileCheck, text: 'Free Technical Assessment' },
    { icon: Shield, text: 'NDA Protection' },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-navy-blue via-deep-purple to-navy-blue relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-electric-blue rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-vibrant-pink rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gold rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to{' '}
              <span className="gradient-text-pink">Transform Your Business</span>
              ?
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-light mb-12"
          >
            Join 9+ successful companies who chose Triverse Corp to build their
            technology
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-vibrant-pink to-gold text-white font-bold text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-vibrant-pink/50 transition-all duration-300 group"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.a>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-text-light mt-4"
            >
              Get a detailed proposal within 1 week | No obligation
            </motion.p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12"
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={indicator.text}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-center space-x-3 text-white"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <indicator.icon className="w-5 h-5 text-electric-blue" />
                </div>
                <span className="text-sm font-medium">{indicator.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
