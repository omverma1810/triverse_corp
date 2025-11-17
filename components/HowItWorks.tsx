'use client';

import { motion } from 'framer-motion';
import { Phone, Code, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Phone,
      title: 'Discovery Call (Week 1)',
      description:
        '30-45 min consultation. We understand your business, challenges, and objectives.',
    },
    {
      number: 2,
      icon: Code,
      title: 'Development Sprint (8-10 weeks)',
      description:
        'Bi-weekly demos, iterative feedback, working MVP delivered for market validation.',
    },
    {
      number: 3,
      icon: Rocket,
      title: 'Launch & Growth (Ongoing)',
      description:
        'Full deployment, user onboarding, continuous optimization, feature updates.',
    },
  ];

  return (
    <section className="section-padding bg-dark-bg relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-blue via-dark-bg to-navy-blue opacity-50" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From Idea to Launch in{' '}
            <span className="gradient-text">3 Steps</span>
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Our proven process delivers results quickly and efficiently
          </p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="relative"
        >
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="flex justify-between items-start relative">
              {/* Connecting Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-deep-purple to-vibrant-pink origin-left"
                style={{ top: '80px' }}
              />

              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                  className="flex-1 relative"
                >
                  <div className="flex flex-col items-center">
                    {/* Number Badge */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-deep-purple flex items-center justify-center text-white text-2xl font-bold mb-6 relative z-10 shadow-lg"
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center mb-4"
                    >
                      <step.icon className="w-8 h-8 text-electric-blue" />
                    </motion.div>

                    {/* Content */}
                    <div className="text-center max-w-xs">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-text-light">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="flex gap-6"
              >
                {/* Left Side - Number and Line */}
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue to-deep-purple flex items-center justify-center text-white text-xl font-bold shadow-lg flex-shrink-0"
                  >
                    {step.number}
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-full bg-gradient-to-b from-electric-blue to-deep-purple my-2 flex-grow" />
                  )}
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 pb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center mb-4"
                  >
                    <step.icon className="w-7 h-7 text-electric-blue" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-light">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
