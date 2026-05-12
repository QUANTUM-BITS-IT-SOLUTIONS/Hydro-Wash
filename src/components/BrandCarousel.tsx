import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';

const brands = [
  { name: 'Exoshield', logo: '/images/brands/exoshield.webp' },
  { name: 'Chemical Guys', logo: '/images/brands/chemical-guys.webp' },
  { name: 'MA-FRA', logo: '/images/brands/ma-fra.webp' },
  { name: "Meguiar's", logo: '/images/brands/meguiars.webp' },
  { name: '3M Car Care', logo: '/images/brands/3m-car-care.webp' },
  { name: 'Würth', logo: '/images/brands/wurth.webp' },
  { name: 'Annovi Reverberi', logo: '/images/brands/annovi-reverberi.webp' },
  { name: 'Norton', logo: '/images/brands/norton.webp' },
  { name: 'CARPRO', logo: '/images/brands/carpro.webp' },
  { name: 'Kärcher', logo: '/images/brands/kaercher.webp' },
  { name: 'Rupes BigFoot', logo: '/images/brands/rupes-bigfoot.webp' },
  { name: 'LLumar', logo: '/images/brands/llumar.webp' },
  { name: 'Gtechniq', logo: '/images/brands/gtechniq.webp' },
  { name: 'UltrashieldX', logo: '/images/brands/ultrashieldx.webp' },
  { name: 'Tint Orange', logo: '/images/brands/tint-orange.webp' },
  { name: 'Menzerna', logo: '/images/brands/menzerna.webp' },
  { name: 'Nasiol', logo: '/images/brands/nasiol.webp' },
  { name: 'Puris', logo: '/images/brands/puris.webp' },
];

const midpoint = Math.ceil(brands.length / 2);
const rowA = brands.slice(0, midpoint);
const rowB = brands.slice(midpoint);

const BrandCarousel = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="w-full bg-background py-16 md:py-24 overflow-hidden">
      <div className="section-container" ref={ref}>
        <div
          className={cn(
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          <div className="text-center mb-14 md:mb-16">
            <span className="micro-label mb-3 block">
              Trusted By The Best
            </span>
            <h2 className="headline-lg mb-4">
              Premium <span className="text-gold-gradient">Brands We Use</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/45 md:text-base">
              We partner with world-leading automotive care brands to deliver exceptional results
              and give your vehicle the protection it deserves.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:gap-12">
            <AnimatedLogoRow items={brands} direction="left" />
            <AnimatedLogoRow items={[...brands].reverse()} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
};

function AnimatedLogoRow({ items, direction }: { items: typeof brands; direction: 'left' | 'right' }) {
  return (
    <div className="relative overflow-hidden">
      <div 
        className={cn(
          "flex gap-12 md:gap-16 lg:gap-20 animate-scroll",
          direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
        )}
      >
        {/* First set of items */}
        {items.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex h-12 w-[8.5rem] shrink-0 items-center justify-center sm:h-14 sm:w-[9.5rem] md:h-16 md:w-40 lg:h-18 lg:w-44"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-full max-w-full object-contain opacity-[0.88] brightness-0 invert transition duration-300 hover:opacity-100"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const wrap = target.parentElement;
                if (wrap) {
                  wrap.innerHTML = `<span class="text-center text-base font-bold tracking-wide text-gray-300 sm:text-lg md:text-xl lg:text-2xl">${brand.name}</span>`;
                }
              }}
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map((brand, index) => (
          <div
            key={`${brand.name}-duplicate-${index}`}
            className="flex h-12 w-[8.5rem] shrink-0 items-center justify-center sm:h-14 sm:w-[9.5rem] md:h-16 md:w-40 lg:h-18 lg:w-44"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-full max-w-full object-contain opacity-[0.88] brightness-0 invert transition duration-300 hover:opacity-100"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const wrap = target.parentElement;
                if (wrap) {
                  wrap.innerHTML = `<span class="text-center text-base font-bold tracking-wide text-gray-300 sm:text-lg md:text-xl lg:text-2xl">${brand.name}</span>`;
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandCarousel;
