'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does it take to build a mobile app?',
      answer:
        'We deliver a working MVP in 8-10 weeks. Full production launch typically takes 6-8 months, including testing, deployment, and initial support.',
    },
    {
      question: 'What is your pricing model?',
      answer:
        'Investment ranges from Rs. 1.46-2.04 Cr for a complete platform. We offer milestone-based payments: 30% upfront, 40% at MVP, 30% at launch.',
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer:
        'Yes! We offer comprehensive post-launch support including bug fixes, feature updates, performance optimization, and even tax compliance services.',
    },
    {
      question: 'Can you work with our existing tech stack?',
      answer:
        "Absolutely. We're technology-agnostic and can integrate with your existing systems or build on your current stack.",
    },
    {
      question: 'What industries do you serve?',
      answer:
        "We've delivered projects across healthcare, e-commerce, agriculture, real estate, media, and manufacturing. Our expertise adapts to any industry.",
    },
    {
      question: 'How do you ensure quality?',
      answer:
        'Bi-weekly demos, automated testing, manual QA, beta user feedback, and load testing. We guarantee 99.9% uptime and enterprise-grade security.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-dark-bg">
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Everything you need to know about working with Triverse Corp
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:border-electric-blue/50 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-electric-blue" />
                  ) : (
                    <Plus className="w-6 h-6 text-electric-blue" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-text-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
