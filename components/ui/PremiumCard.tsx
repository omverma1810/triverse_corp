'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: 'blue' | 'pink' | 'gold' | 'purple';
}

export function PremiumCard({
  children,
  className = '',
  hover = true,
  glowColor = 'blue',
}: PremiumCardProps) {
  const glowColorMap = {
    blue: 'rgba(0, 217, 255, 0.1)',
    pink: 'rgba(255, 0, 128, 0.1)',
    gold: 'rgba(255, 215, 0, 0.1)',
    purple: 'rgba(108, 92, 231, 0.1)',
  };

  return (
    <motion.div
      className={`premium-card ${className}`}
      whileHover={hover ? { y: -10, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Card glow effect */}
      <div
        className="card-glow"
        style={{
          background: `radial-gradient(circle, ${glowColorMap[glowColor]} 0%, transparent 70%)`,
        }}
      />

      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Accent line */}
      <div className="accent-line" />
    </motion.div>
  );
}
