'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Field Genie',
      client: 'Piatrika Biosystems',
      impact: 'Live on iOS & Android',
      description: 'Plant genomics app for field researchers',
      tech: ['React Native', 'Django', 'PostgreSQL'],
    },
    {
      title: 'GraySwipe',
      client: 'T-Hub Startup',
      impact: 'Rubrix Graduate',
      description: 'Web + Mobile App for professional networking',
      tech: ['React', 'Next.js', 'Node.js', 'AWS'],
    },
    {
      title: 'FUSO Textiles',
      client: 'E-commerce Platform',
      impact: 'Rs. 1M+ quarterly revenue',
      description: 'Digital transformation for textile business',
      tech: ['Flutter', 'Django', 'Stripe'],
    },
    {
      title: 'Iclean IHMS',
      client: 'Enterprise Suite',
      impact: '3 Apps Delivered',
      description: 'Inventory, Distance, and Admin management apps',
      tech: ['React Native', 'Node.js', 'MongoDB'],
    },
    {
      title: 'ReelOnGo',
      client: 'Instant Reel Delivery',
      impact: 'Development Ongoing',
      description: 'Mobile app for instant content delivery',
      tech: ['React Native', 'Django', 'AWS'],
    },
    {
      title: 'ML Medical App',
      client: 'Healthcare AI',
      impact: 'Best Paper Award',
      description: 'Award-winning ML models for medical diagnosis',
      tech: ['Python', 'TensorFlow', 'React Native'],
    },
    {
      title: 'PlantEd',
      client: 'Agricultural Platform',
      impact: '5-Star Hotels (Taj Deccan)',
      description: 'Plant education and management system',
      tech: ['Next.js', 'Tailwind', 'MongoDB'],
    },
    {
      title: 'AgriProVision',
      client: 'Agricultural Platform',
      impact: 'Deployed at Premium Hotels',
      description: 'Agricultural produce management solution',
      tech: ['Next.js', 'Django', 'PostgreSQL'],
    },
    {
      title: 'Custom Solutions',
      client: 'Various Industries',
      impact: '9+ Projects Total',
      description: 'Tailored solutions across multiple sectors',
      tech: ['Full Stack', 'AI/ML', 'Cloud'],
    },
  ];

  return (
    <section
      id="portfolio"
      className="section-padding"
      style={{
        background: '#F8F9FB',
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6"
          >
            Success <span className="gradient-text">Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            Real projects, real results - transforming businesses through technology
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-bold text-navy mb-2 group-hover:text-blue transition-colors">
                {project.title}
              </h3>

              {/* Client */}
              <p className="text-purple text-sm font-semibold mb-2">
                {project.client}
              </p>

              {/* Impact Badge */}
              <div className="inline-block mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue/10 text-blue">
                  {project.impact}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-purple/10 text-purple px-2 py-1 rounded font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Case Study Link */}
              <div className="flex items-center text-blue group-hover:text-pink transition-colors">
                <span className="text-sm font-semibold">View Case Study</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
