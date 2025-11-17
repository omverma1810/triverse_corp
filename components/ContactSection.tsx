'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  description: string;
  budget: string;
}

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Here you would typically send the data to your backend
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const services = [
    'Mobile App Development',
    'Web Platform Development',
    'Cloud & DevOps',
    'AI & Machine Learning',
    'Backend Systems',
    'Ongoing Management',
    'Not Sure Yet',
  ];

  const budgetRanges = [
    'Under 50L',
    '50L - 1Cr',
    '1Cr - 2Cr',
    '2Cr+',
    'Not Sure Yet',
  ];

  return (
    <section id="contact" className="section-padding" style={{
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8F9FB 100%)',
    }}>
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-5xl mb-6">📧</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark mb-6">
            Amazing{' '}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-text-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Let's transform your vision into reality. Share your project details and
            we'll respond within 24 hours with a detailed proposal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={staggerItem}>
              <h3 className="text-2xl font-bold text-text-dark mb-6">
                Get in Touch
              </h3>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex items-start space-x-4"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric-blue to-deep-purple flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-text-dark mb-1">Email</h4>
                <a
                  href="mailto:contact@triverse.com"
                  className="text-text-light hover:text-electric-blue transition-colors"
                >
                  contact@triverse.com
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex items-start space-x-4"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-vibrant-pink to-gold flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-text-dark mb-1">Phone</h4>
                <a
                  href="tel:+1234567890"
                  className="text-text-light hover:text-electric-blue transition-colors"
                >
                  +1 (XXX) XXX-XXXX
                </a>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="pt-6">
              <h4 className="font-semibold text-text-dark mb-3">
                Office Hours
              </h4>
              <p className="text-text-light">
                Monday - Friday: 9:00 AM - 6:00 PM (EST)
              </p>
              <p className="text-text-light">Available globally via remote</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.form
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl space-y-6"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-3 bg-emerald-green/10 border border-emerald-green text-emerald-green px-6 py-4 rounded-lg"
                >
                  <CheckCircle className="w-6 h-6" />
                  <p className="font-semibold">
                    Thank you! We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}

              {/* Name */}
              <motion.div variants={staggerItem}>
                <label className="block text-text-dark font-semibold mb-3 text-base">
                  Your full name <span className="text-vibrant-pink">*</span>
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-electric-blue focus:bg-white transition-all duration-300 text-base"
                  style={{
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  }}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-vibrant-pink text-sm mt-2">
                    {errors.name.message}
                  </p>
                )}
              </motion.div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={staggerItem}>
                  <label className="block text-text-dark font-semibold mb-3 text-base">
                    you@company.com <span className="text-vibrant-pink">*</span>
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    type="email"
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-electric-blue focus:bg-white transition-all duration-300 text-base"
                    style={{
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    }}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="text-vibrant-pink text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={staggerItem}>
                  <label className="block text-text-dark font-semibold mb-3 text-base">
                    +1 (XXX) XXX-XXXX
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-electric-blue focus:bg-white transition-all duration-300 text-base"
                    style={{
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    }}
                    placeholder="+1 (555) 123-4567"
                  />
                </motion.div>
              </div>

              {/* Company */}
              <motion.div variants={staggerItem}>
                <label className="block text-text-dark font-semibold mb-3 text-base">
                  Your company name
                </label>
                <input
                  {...register('company')}
                  type="text"
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-electric-blue focus:bg-white transition-all duration-300 text-base"
                  style={{
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  }}
                  placeholder="Acme Corp"
                />
              </motion.div>

              {/* Service & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={staggerItem}>
                  <label className="block text-text-dark font-semibold mb-3 text-base">
                    Service Interested In{' '}
                    <span className="text-vibrant-pink">*</span>
                  </label>
                  <select
                    {...register('service', {
                      required: 'Please select a service',
                    })}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-electric-blue focus:bg-white transition-all duration-300 text-base cursor-pointer"
                    style={{
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-vibrant-pink text-sm mt-2">
                      {errors.service.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={staggerItem}>
                  <label className="block text-text-dark font-semibold mb-3 text-base">
                    Budget Range
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-electric-blue focus:bg-white transition-all duration-300 text-base cursor-pointer"
                    style={{
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              {/* Description */}
              <motion.div variants={staggerItem}>
                <label className="block text-text-dark font-semibold mb-3 text-base">
                  Tell us about your project, goals, and requirements...{' '}
                  <span className="text-vibrant-pink">*</span>
                </label>
                <textarea
                  {...register('description', {
                    required: 'Please describe your project',
                  })}
                  rows={6}
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-electric-blue focus:bg-white transition-all duration-300 resize-vertical text-base"
                  style={{
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    minHeight: '150px',
                  }}
                  placeholder="Describe your project vision, key features, target audience, timeline, and any other relevant details..."
                />
                {errors.description && (
                  <p className="text-vibrant-pink text-sm mt-2">
                    {errors.description.message}
                  </p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={staggerItem} className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-vibrant-pink to-gold text-white font-bold py-5 px-8 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 text-lg"
                  style={{
                    boxShadow: '0 10px 30px rgba(255, 0, 128, 0.3)',
                  }}
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
