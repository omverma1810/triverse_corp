'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { fadeInUp, scaleIn } from '@/lib/animations';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Triverse Corp transformed our manual textile business into a digital powerhouse. Revenue increased by Rs. 25 lakhs in just 6 months. Their attention to detail is unmatched.",
      author: 'Rajesh Kumar',
      company: 'FUSO Textiles',
      role: 'CEO',
      industry: 'E-commerce',
      rating: 5,
    },
    {
      quote:
        "The Field Genie app they built is now used by plant scientists across India. It's robust, intuitive, and handles offline data like a charm.",
      author: 'Dr. Priya Sharma',
      company: 'Piatrika Biosystems',
      role: 'Director',
      industry: 'Biotechnology',
      rating: 5,
    },
    {
      quote:
        "From startup idea to T-Hub graduation, Triverse Corp was with us every step. They built our entire tech stack and it's scaling beautifully.",
      author: 'Amit Patel',
      company: 'GraySwipe',
      role: 'Founder',
      industry: 'Technology Startup',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

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
            Loved by <span className="gradient-text">Clients Worldwide</span>
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-deep-purple hover:bg-deep-purple hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-deep-purple hover:bg-deep-purple hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-electric-blue/20">
                <Quote size={48} />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-6 h-6 fill-gold text-gold" />
                  </motion.div>
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-text-dark text-lg md:text-xl leading-relaxed mb-8 text-center italic">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Author Info */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue to-deep-purple mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                <h4 className="text-xl font-bold text-text-dark mb-1">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-text-light">
                  {testimonials[currentIndex].role} at{' '}
                  {testimonials[currentIndex].company}
                </p>
                <span className="inline-block mt-2 px-4 py-1 bg-deep-purple/10 text-deep-purple text-sm rounded-full">
                  {testimonials[currentIndex].industry}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-deep-purple w-8'
                    : 'bg-text-light'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
