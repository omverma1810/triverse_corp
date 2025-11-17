'use client';

import { motion } from 'framer-motion';
import { Shield, Award, TrendingUp, Clock } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    text: 'NDA Protected',
    color: '#00D9FF',
  },
  {
    icon: Award,
    text: '9+ Success Stories',
    color: '#FFD700',
  },
  {
    icon: TrendingUp,
    text: 'Rs. 25L+ Revenue Generated',
    color: '#50C878',
  },
  {
    icon: Clock,
    text: '24hr Response Time',
    color: '#FF6B9D',
  },
];

export function TrustBar() {
  return (
    <div className="w-full bg-charcoal/50 backdrop-blur-lg border-y border-white/10 py-6">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="p-3 rounded-full"
                style={{
                  background: `${item.color}20`,
                }}
              >
                <item.icon
                  className="w-6 h-6"
                  style={{ color: item.color }}
                />
              </div>
              <span className="text-sm md:text-base font-accent text-warm-grey">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
