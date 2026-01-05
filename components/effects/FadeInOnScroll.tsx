'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { fadeInUp, fadeIn, slideInLeft, slideInRight, scaleIn } from '@/lib/animations';

type AnimationType = 'fadeInUp' | 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scaleIn';

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: AnimationType;
  once?: boolean;
}

const animations = {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
};

export function FadeInOnScroll({
  children,
  className = '',
  delay = 0,
  animation = 'fadeInUp',
  once = true,
}: FadeInOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animations[animation]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
