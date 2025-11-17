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
    <section id="contact" className="section-padding bg-light-bg">
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Let's Build Something{' '}
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours
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
              className="bg-white rounded-2xl p-8 shadow-xl space-y-6"
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
                <label className="block text-text-dark font-semibold mb-2">
                  Name <span className="text-vibrant-pink">*</span>
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-electric-blue transition-colors"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-vibrant-pink text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </motion.div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={staggerItem}>
                  <label className="block text-text-dark font-semibold mb-2">
                    Email <span className="text-vibrant-pink">*</span>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-electric-blue transition-colors"
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="text-vibrant-pink text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={staggerItem}>
                  <label className="block text-text-dark font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-electric-blue transition-colors"
                    placeholder="+1 (XXX) XXX-XXXX"
                  />
                </motion.div>
              </div>

              {/* Company */}
              <motion.div variants={staggerItem}>
                <label className="block text-text-dark font-semibold mb-2">
                  Company
                </label>
                <input
                  {...register('company')}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-electric-blue transition-colors"
                  placeholder="Your company name"
                />
              </motion.div>

              {/* Service & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={staggerItem}>
                  <label className="block text-text-dark font-semibold mb-2">
                    Service Interested In{' '}
                    <span className="text-vibrant-pink">*</span>
                  </label>
                  <select
                    {...register('service', {
                      required: 'Please select a service',
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-electric-blue transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-vibrant-pink text-sm mt-1">
                      {errors.service.message}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={staggerItem}>
                  <label className="block text-text-dark font-semibold mb-2">
                    Budget Range
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-electric-blue transition-colors"
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
                <label className="block text-text-dark font-semibold mb-2">
                  Project Description{' '}
                  <span className="text-vibrant-pink">*</span>
                </label>
                <textarea
                  {...register('description', {
                    required: 'Please describe your project',
                  })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-electric-blue transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
                {errors.description && (
                  <p className="text-vibrant-pink text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={staggerItem}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-vibrant-pink to-gold text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center space-x-2 hover:shadow-2xl transition-all duration-300"
                >
                  <span>Send Message</span>
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
