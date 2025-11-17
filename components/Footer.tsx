'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const menuLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Web Platforms', href: '#services' },
    { name: 'Cloud & DevOps', href: '#services' },
    { name: 'AI & ML', href: '#services' },
    { name: 'Backend Systems', href: '#services' },
  ];

  return (
    <footer className="bg-dark-bg border-t border-white/10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-custom section-padding"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Tagline */}
          <motion.div variants={staggerItem} className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="gradient-text">TRIVERSE</span>
              <span className="text-white"> CORP</span>
            </div>
            <p className="text-text-light text-sm">
              Software Development Excellence
            </p>
            <p className="text-text-light text-sm">USA & India</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, color: '#00D9FF' }}
                  className="text-text-light hover:text-electric-blue transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Menu */}
          <motion.div variants={staggerItem} className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Menu</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-light hover:text-electric-blue transition-colors duration-300 text-sm relative group inline-block"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div variants={staggerItem} className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-light hover:text-electric-blue transition-colors duration-300 text-sm relative group inline-block"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact & Newsletter */}
          <motion.div variants={staggerItem} className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact & Newsletter
            </h3>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:contact@triverse.com"
                className="flex items-center space-x-2 text-text-light hover:text-electric-blue transition-colors duration-300 text-sm"
              >
                <Mail size={16} />
                <span>contact@triverse.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-text-light hover:text-electric-blue transition-colors duration-300 text-sm"
              >
                <Phone size={16} />
                <span>+1 (XXX) XXX-XXXX</span>
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="pt-4">
              <p className="text-text-light text-sm mb-3">
                Stay updated with tech insights
              </p>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-text-light focus:outline-none focus:border-electric-blue transition-colors duration-300"
                  aria-label="Email for newsletter"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-gradient-to-r from-electric-blue to-deep-purple text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-text-light text-sm text-center md:text-left">
            © {currentYear} Triverse Corp. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-text-light hover:text-electric-blue transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-text-light hover:text-electric-blue transition-colors duration-300 text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
