import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';

const brandList = [
  { name: '3M', file: '3m.jpeg' },
  { name: 'Menzerna', file: 'Menzerna.jpeg' },
  { name: 'Angelwax', file: 'angelwax.jpeg' },
  { name: 'CarPro', file: 'carpro.jpeg' },
  { name: 'Exo', file: 'exo.jpeg' },
  { name: 'Gtechniq', file: 'gtechiqe.jpeg' },
  { name: 'Kärcher', file: 'karcher.jpeg' },
  { name: 'LLumar', file: 'llumar.jpeg' },
  { name: 'Ma-Fra', file: 'ma fra.jpeg' },
  { name: 'Meguiar\'s', file: 'megquires.jpeg' },
  { name: 'Norton', file: 'norton.jpeg' },
  { name: 'Rupes', file: 'rupes.jpeg' },
  { name: 'The Detailing Mafia', file: 'the detailing mafia.jpeg' },
  { name: 'Würth', file: 'wurth.jpeg' },
];

const BrandCarousel = ({ logos }: { logos?: string[] }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="w-full overflow-hidden bg-background py-20 md:py-28">
      <div className="section-container" ref={ref}>
        <div
          className={cn(
            'transition-all duration-700 ease-premium',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
        >
          {/* Section Header */}
          <div className="mb-16 text-center md:mb-20">
            <span className="micro-label mb-3 block text-red-500 uppercase tracking-widest font-bold">Our Partners</span>
            <h2 className="headline-lg mb-4">
              Premium <span className="text-gold-gradient">Brands We Use</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We partner with world-leading automotive care brands to deliver exceptional results
              and give your vehicle the protection it deserves.
            </p>
          </div>

          {/* Grid Blocks Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-4">
            {brandList.map((brand, index) => (
              <div
                key={brand.name}
                className="aspect-square rounded-2xl flex flex-col items-center justify-center bg-[#121c22] shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(201,162,39,0.18)] hover:-translate-y-1.5 transition-all duration-500 group overflow-hidden"
                style={{
                  transitionDelay: `${(index % 5) * 60}ms`
                }}
              >
                <img
                  src={`/brands/${brand.file}`}
                  alt={brand.name}
                  className="w-full h-full object-contain p-4 sm:p-6 transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
