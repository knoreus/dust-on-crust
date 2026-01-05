'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import Image from 'next/image';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  speed?: number;
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
}

export function ParallaxSection({
  children,
  backgroundImage,
  speed = 0.5,
  overlay = true,
  overlayOpacity = 0.4,
  className = '',
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 30}%`]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <motion.div style={{ y }} className="absolute inset-0 -z-10">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          {overlay && (
            <div
              className="absolute inset-0 bg-ink"
              style={{ opacity: overlayOpacity }}
            />
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
