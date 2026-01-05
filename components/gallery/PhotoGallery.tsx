'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { Lightbox } from './Lightbox';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
  photographer?: string;
}

export function PhotoGallery({ images, photographer }: PhotoGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    setSelectedIndex(index);
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={image.src}
              className="flex-[0_0_100%] min-w-0 relative aspect-[4/3] cursor-zoom-in"
              onClick={() => {
                setSelectedIndex(index);
                setLightboxOpen(true);
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-cream-300/90 hover:bg-cream-100 rounded-full transition-colors shadow-lg"
        aria-label="Previous image"
      >
        <svg className="w-5 h-5 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-cream-300/90 hover:bg-cream-100 rounded-full transition-colors shadow-lg"
        aria-label="Next image"
      >
        <svg className="w-5 h-5 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute bottom-4 right-4 px-3 py-1 bg-ink/80 text-cream-100 font-mono text-sm rounded">
        {selectedIndex + 1} / {images.length}
      </div>

      {/* Photographer Credit */}
      {photographer && (
        <p className="mt-4 font-mono text-xs text-ink-muted uppercase tracking-widest text-center">
          Photography: {photographer}
        </p>
      )}

      {/* Thumbnail Strip */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            onClick={() => scrollTo(index)}
            className={`flex-shrink-0 w-16 h-16 relative rounded overflow-hidden transition-all ${
              index === selectedIndex ? 'ring-2 ring-teal' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={images}
        currentIndex={selectedIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setSelectedIndex}
      />
    </div>
  );
}
