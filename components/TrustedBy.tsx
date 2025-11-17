'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

const TrustedBy = () => {
  // Client logos/names (using text for now, can be replaced with actual logos)
  const clients = [
    'Piatrika Biosystems',
    'GraySwipe',
    'FUSO Textiles',
    'Iclean IHMS',
    'ReelOnGo',
    'Taj Deccan',
    'T-Hub',
    'PlantEd',
    'AgriProVision',
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="bg-light-bg py-16">
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Trusted by Innovative Companies
          </h2>
          <p className="text-text-light text-lg">
            T-Hub Startups | 5-Star Hotels | Rs. 1M+ Revenue Businesses
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-12"
            animate={{
              x: [0, -50 + '%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client}-${index}`}
                className="flex-shrink-0 px-8"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl font-bold text-text-dark/30 hover:text-deep-purple transition-colors duration-300 whitespace-nowrap">
                  {client}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
