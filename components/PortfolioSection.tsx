'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Field Genie',
      client: 'Piatrika Biosystems',
      impact: 'Live on iOS & Android',
      description: 'Plant genomics app for field researchers',
      tech: ['React Native', 'Django', 'PostgreSQL'],
      gradient: 'from-emerald-green to-electric-blue',
    },
    {
      title: 'GraySwipe',
      client: 'T-Hub Startup',
      impact: 'Rubrix Graduate',
      description: 'Web + Mobile App for professional networking',
      tech: ['React', 'Next.js', 'Node.js', 'AWS'],
      gradient: 'from-electric-blue to-deep-purple',
    },
    {
      title: 'FUSO Textiles',
      client: 'E-commerce Platform',
      impact: 'Rs. 1M+ quarterly revenue',
      description: 'Digital transformation for textile business',
      tech: ['Flutter', 'Django', 'Stripe'],
      gradient: 'from-deep-purple to-vibrant-pink',
    },
    {
      title: 'Iclean IHMS',
      client: 'Enterprise Suite',
      impact: '3 Apps Delivered',
      description: 'Inventory, Distance, and Admin management apps',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      gradient: 'from-vibrant-pink to-gold',
    },
    {
      title: 'ReelOnGo',
      client: 'Instant Reel Delivery',
      impact: 'Development Ongoing',
      description: 'Mobile app for instant content delivery',
      tech: ['React Native', 'Django', 'AWS'],
      gradient: 'from-gold to-emerald-green',
    },
    {
      title: 'ML Medical App',
      client: 'Healthcare AI',
      impact: 'Best Paper Award',
      description: 'Award-winning ML models for medical diagnosis',
      tech: ['Python', 'TensorFlow', 'React Native'],
      gradient: 'from-emerald-green to-electric-blue',
    },
    {
      title: 'PlantEd',
      client: 'Agricultural Platform',
      impact: '5-Star Hotels (Taj Deccan)',
      description: 'Plant education and management system',
      tech: ['Next.js', 'Tailwind', 'MongoDB'],
      gradient: 'from-electric-blue to-deep-purple',
    },
    {
      title: 'AgriProVision',
      client: 'Agricultural Platform',
      impact: 'Deployed at Premium Hotels',
      description: 'Agricultural produce management solution',
      tech: ['Next.js', 'Django', 'PostgreSQL'],
      gradient: 'from-deep-purple to-vibrant-pink',
    },
    {
      title: 'Custom Solutions',
      client: 'Various Industries',
      impact: '9+ Projects Total',
      description: 'Tailored solutions across multiple sectors',
      tech: ['Full Stack', 'AI/ML', 'Cloud'],
      gradient: 'from-vibrant-pink to-gold',
    },
  ];

  return (
    <section
      id="portfolio"
      className="section-padding bg-dark-bg grid-pattern relative"
    >
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Real projects, real results - transforming businesses through
            technology
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
              }}
              className="card group cursor-pointer relative overflow-hidden"
              style={{ perspective: '1000px' }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-electric-blue transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Client */}
                <p className="text-text-light text-sm mb-2">{project.client}</p>

                {/* Impact Badge */}
                <div className="inline-block mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                  >
                    {project.impact}
                  </span>
                </div>

                {/* Description */}
                <p className="text-text-light mb-6">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-white/10 text-electric-blue px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Case Study Link */}
                <div className="flex items-center text-electric-blue group-hover:text-vibrant-pink transition-colors duration-300">
                  <span className="text-sm font-semibold">View Case Study</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Glow Effect on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
