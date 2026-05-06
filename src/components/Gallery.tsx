import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { galleryFilters, type FilterCategory, type GalleryImage } from '@/data/galleryData';
import { autoGalleryImages } from '@/data/galleryImagesAuto';

const Gallery = () => {
  const { ref, isVisible } = useScrollReveal();
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [comparePosition, setComparePosition] = useState(50);

  const filteredImages = filter === 'all'
    ? autoGalleryImages
    : autoGalleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-8 sm:mb-12 transition-all duration-700 ease-premium px-4 sm:px-0",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="micro-label mb-3 sm:mb-4 block">Our Portfolio</span>
          <h2 className="headline-lg mb-3 sm:mb-4">
            <span className="text-gold-gradient">Transformation</span> Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Witness the remarkable transformations we deliver. Each project showcases 
            our commitment to perfection.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0 transition-all duration-700 ease-premium delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {galleryFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={cn(
                "px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300",
                filter === f.value
                  ? "bg-gold text-background"
                  : "bg-card border border-border text-muted-foreground hover:border-gold/50 hover:text-gold"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={cn(
                "group relative aspect-[4/3] overflow-hidden rounded-lg sm:rounded-xl cursor-pointer transition-all duration-500 ease-premium",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              onClick={() => setLightboxImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Caption - Always visible on mobile, hover on desktop */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-500 ease-premium bg-gradient-to-t from-background/90 to-transparent sm:bg-transparent">
                <span className="micro-label text-gold text-[10px] sm:text-xs">{image.category.toUpperCase()}</span>
                <p className="text-foreground font-medium mt-1 text-sm sm:text-base">{image.alt}</p>
                {image.before && (
                  <span className="text-xs text-muted-foreground mt-1 sm:mt-2 block">
                    Tap to compare
                  </span>
                )}
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-lg sm:rounded-xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-3 sm:p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-3 sm:top-6 right-3 sm:right-6 p-2 text-muted-foreground hover:text-gold transition-colors z-10"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div
            className="relative max-w-4xl w-full aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxImage.before ? (
              <>
                {/* Before/After Comparison */}
                <div className="relative w-full h-full">
                  {/* After Image (Full) */}
                  <img
                    src={lightboxImage.src}
                    alt="After"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Before Image (Clipped) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - comparePosition}% 0 0)` }}
                  >
                    <img
                      src={lightboxImage.before}
                      alt="Before"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  {/* Slider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-gold shadow-gold-lg"
                    style={{ left: `${comparePosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold flex items-center justify-center text-background">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                    </div>
                  </div>
                  {/* Labels */}
                  <div className="absolute bottom-4 left-4 micro-label bg-background/80 px-3 py-1 rounded">Before</div>
                  <div className="absolute bottom-4 right-4 micro-label bg-background/80 px-3 py-1 rounded">After</div>
                </div>
                {/* Slider Control */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                  <Slider
                    value={[comparePosition]}
                    onValueChange={([value]) => setComparePosition(value)}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </>
            ) : (
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
