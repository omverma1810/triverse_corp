'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  description: string;
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
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();

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

  return (
    <section
      id="contact"
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
            Let's Work <span className="gradient-text">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg max-w-3xl mx-auto"
          >
            Share your project details and we'll respond within 24 hours with a detailed proposal.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Success Message */}
            {isSubmitted && (
              <div className="flex items-center space-x-3 bg-blue/10 border border-blue text-blue px-6 py-4 rounded-lg">
                <CheckCircle className="w-6 h-6" />
                <p className="font-semibold">
                  Thank you! We'll get back to you within 24 hours.
                </p>
              </div>
            )}

            {/* Name */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Your Name <span className="text-pink">*</span>
              </label>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                className="input"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-pink text-sm mt-2">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Email Address <span className="text-pink">*</span>
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
                className="input"
                placeholder="john@company.com"
              />
              {errors.email && (
                <p className="text-pink text-sm mt-2">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Phone Number
              </label>
              <input
                {...register('phone')}
                type="tel"
                className="input"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Service Interested In <span className="text-pink">*</span>
              </label>
              <select
                {...register('service', {
                  required: 'Please select a service',
                })}
                className="input"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-pink text-sm mt-2">
                  {errors.service.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-white font-semibold mb-3">
                Tell us about your project <span className="text-pink">*</span>
              </label>
              <textarea
                {...register('description', {
                  required: 'Please describe your project',
                })}
                rows={6}
                className="input resize-vertical"
                placeholder="Describe your project vision, key features, target audience, timeline..."
              />
              {errors.description && (
                <p className="text-pink text-sm mt-2">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center space-x-3 text-base py-5"
              >
                <span>SEND MESSAGE</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="flex items-center space-x-4 card">
              <div className="w-12 h-12 rounded-lg bg-blue/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Email</h4>
                <a
                  href="mailto:contact@triverse.com"
                  className="text-gray-400 hover:text-blue transition-colors"
                >
                  contact@triverse.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 card">
              <div className="w-12 h-12 rounded-lg bg-pink/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-pink" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Phone</h4>
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-blue transition-colors"
                >
                  +1 (XXX) XXX-XXXX
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
