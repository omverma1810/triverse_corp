'use client';

import { motion } from 'framer-motion';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface LuxuryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'gold' | 'blue' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
}

export function LuxuryButton({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  onClick,
  disabled,
  type = 'button',
  ...props
}: LuxuryButtonProps) {
  const baseClasses = 'relative overflow-hidden font-accent font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer';

  const variantClasses = {
    primary: 'luxury-btn',
    gold: 'luxury-btn luxury-btn-gold',
    blue: 'luxury-btn luxury-btn-blue',
    outline: 'luxury-btn-outline',
  };

  const sizeClasses = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-12 py-4 text-base',
    lg: 'px-16 py-5 text-lg',
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {/* Shimmer effect */}
      <span className="shimmer" />

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {icon && <span className="inline-block">{icon}</span>}
      </span>
    </motion.button>
  );
}
