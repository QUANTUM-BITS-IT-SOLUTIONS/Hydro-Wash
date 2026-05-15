import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';

const BRAND_IMAGE = '/Brand.png';
const BRAND_COUNT = 4;

const BrandLogo = () => (
  <div className="flex h-16 shrink-0 items-center justify-center px-8 sm:h-20 sm:px-10 md:h-24 md:px-12 lg:h-32 lg:px-14">
    <img
      src={BRAND_IMAGE}
      alt="Premium brand partners"
      className="max-h-full w-auto object-contain opacity-[0.45] grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
      loading="lazy"
      decoding="async"
    />
  </div>
);

const BrandTrack = ({ trackId }: { trackId: string }) => (
  <div className="flex shrink-0">
    {[...Array(BRAND_COUNT)].map((_, i) => (
      <BrandLogo key={`${trackId}-${i}`} />
    ))}
  </div>
);

const BrandCarousel = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="w-full overflow-hidden bg-background py-16 md:py-24">
      <div className="section-container" ref={ref}>
        <div
          className={cn(
            'transition-all duration-700',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
        >
          <div className="mb-14 text-center md:mb-16">
            <span className="micro-label mb-3 block">Trusted By The Best</span>
            <h2 className="headline-lg mb-4">
              Premium <span className="text-gold-gradient">Brands We Use</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/45 md:text-base">
              We partner with world-leading automotive care brands to deliver exceptional results
              and give your vehicle the protection it deserves.
            </p>
          </div>

          <div className="relative overflow-hidden group" aria-label="Partner brands">
            <div className="flex w-max animate-scroll-left">
              <BrandTrack trackId="a" />
              <BrandTrack trackId="b" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
