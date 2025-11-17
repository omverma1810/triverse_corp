'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

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
    <section className="section-padding" style={{
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FB 100%)',
    }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6">
            Loved by <span className="gradient-text">Clients Worldwide</span>
          </h2>
          <p className="text-text-light text-lg md:text-xl max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-10 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-deep-purple hover:bg-gradient-to-br hover:from-electric-blue hover:to-deep-purple hover:text-white transition-all duration-300 border-2 border-deep-purple/20 hover:border-transparent hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-10 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-deep-purple hover:bg-gradient-to-br hover:from-electric-blue hover:to-deep-purple hover:text-white transition-all duration-300 border-2 border-deep-purple/20 hover:border-transparent hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight size={26} />
          </button>

          {/* Testimonial Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FB 100%)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-electric-blue/15">
                <Quote size={64} strokeWidth={1.5} />
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
              <p className="text-text-dark text-lg md:text-2xl leading-relaxed mb-10 text-center italic font-light relative z-10" style={{
                lineHeight: '1.8',
              }}>
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Author Info */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-deep-purple mx-auto mb-5 flex items-center justify-center text-white text-3xl font-bold shadow-lg" style={{
                  boxShadow: '0 10px 30px rgba(108, 92, 231, 0.3)',
                }}>
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-text-dark mb-2">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-text-light text-base md:text-lg mb-3">
                  {testimonials[currentIndex].role} at{' '}
                  <span className="font-semibold text-text-dark">{testimonials[currentIndex].company}</span>
                </p>
                <span className="inline-block mt-2 px-5 py-2 bg-gradient-to-r from-electric-blue/10 to-deep-purple/10 text-deep-purple text-sm font-medium rounded-full border border-deep-purple/20">
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
