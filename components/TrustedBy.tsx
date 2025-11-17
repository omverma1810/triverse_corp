'use client';

import { motion } from 'framer-motion';

const TrustedBy = () => {
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Trusted by Innovative Companies
          </h2>
          <p className="text-gray-600 text-lg">
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
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 px-8"
              >
                <div className="text-2xl font-bold text-navy/30 hover:text-purple transition-colors duration-300 whitespace-nowrap cursor-pointer">
                  {client}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
