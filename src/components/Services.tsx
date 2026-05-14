import { Link } from 'react-router-dom';
import { Shield, Droplets, Sparkles, ArrowRight, ChevronLeft, ChevronRight, Hand, Layers, Sun, Car, Brush, Gem, SprayCan, RotateCw, Waves, CircleDot, Wind } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Autoplay from 'embla-carousel-autoplay';

interface ServiceCardProps {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  price: string;
}

const ServiceCard = ({ id, icon: Icon, title, description, features, price }: ServiceCardProps) => {
  return (
    <Link to={`/services/${id}`} className="group block h-full p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl border border-border/50 bg-card/50 transition-all duration-300 hover:border-gold/30 hover:bg-card hover-lift">
      {/* Icon & Price Row */}
      <div className="flex items-start justify-between mb-4 sm:mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
        </div>
        <div className="text-right">
          <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">From</p>
          <p className="text-base sm:text-lg font-semibold text-gold transition-transform duration-300">{price}</p>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-gold transition-colors duration-300">{title}</h3>
      
      {/* Description */}
      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">{description}</p>

      {/* Features */}
      <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
        {features.slice(0, 3).map((feature, index) => (
          <li 
            key={feature} 
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/80 transition-all duration-300"
          >
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gold" />
            <span className="line-clamp-1">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <span className="inline-flex items-center gap-1.5 sm:gap-2 text-gold text-xs sm:text-sm font-medium group-hover:gap-3 transition-all duration-300">
        View Details
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
      </span>
    </Link>
  );
};

const Services = () => {
  const { ref, isVisible } = useScrollReveal();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const isMobile = useIsMobile();
  
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  // Hide swipe hint after user interacts or after timeout
  useEffect(() => {
    if (!isMobile) return;
    
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isMobile]);

  // Hide hint when user swipes
  useEffect(() => {
    if (current > 0) {
      setShowSwipeHint(false);
    }
  }, [current]);

  const services = [
    {
      id: "ceramic-coating",
      icon: Droplets,
      title: "Ceramic coating",
      description: "Premium SiO2-based nano-ceramic coating that creates a permanent bond with your paint, delivering exceptional gloss and long-lasting protection.",
      features: ["9H pencil hardness rating", "Extreme water beading", "UV & oxidation protection"],
      price: "₹14,999/-",
    },
    {
      id: "graphene-coating",
      icon: Layers,
      title: "graphene coating",
      description: "Next-generation graphene-infused coating offering superior heat dissipation and reduced water spotting.",
      features: ["Superior heat dissipation", "Reduced water spotting", "7+ years protection"],
      price: "₹19,999/-",
    },
    {
      id: "premium-detailing",
      icon: Sparkles,
      title: "Premium detaling (Exterior & Interior)",
      description: "Comprehensive restoration service for both the inside and outside of your vehicle, restoring it to showroom condition.",
      features: ["Full interior deep clean", "Multi-stage paint correction", "Premium sealant application"],
      price: "₹1,999/-",
    },
    {
      id: "ppf",
      icon: Shield,
      title: "Ppf paint protection film",
      description: "Advanced self-healing urethane film that forms an invisible armor around your vehicle's paint.",
      features: ["Self-healing technology", "Computer-precision cutting", "10-year manufacturer warranty"],
      price: "₹49,999/-",
    },
    {
      id: "hydrowash-wax",
      icon: Waves,
      title: "Premium hydrowash &wax",
      description: "Thorough hand wash using high-pressure rinse with premium wax application for enhanced gloss.",
      features: ["High-pressure pre-rinse", "Premium carnauba wax", "Hydrophobic protection"],
      price: "₹1,199/-",
    },
    {
      id: "interior-cleaning",
      icon: Car,
      title: "Car interior deep cleaning",
      description: "Meticulous cleaning of all interior surfaces, including carpets, seats, and dashboard.",
      features: ["Steam cleaning & sanitization", "Leather conditioning", "Ozone odor elimination"],
      price: "₹1,999/-",
    },
    {
      id: "compounding-polishing",
      icon: RotateCw,
      title: "Compounding and polishing",
      description: "Professional paint correction to remove swirl marks, scratches, and restore depth to your paint.",
      features: ["Swirl mark removal", "Paint oxidation repair", "Gloss restoration"],
      price: "₹4,499/-",
    },
    {
      id: "anti-rust",
      icon: Shield,
      title: "Anti Rust coating",
      description: "Protective coating applied to the undercarriage to prevent rust and corrosion from moisture and debris.",
      features: ["Rust & corrosion prevention", "Sound dampening properties", "5-year protection warranty"],
      price: "₹4,499",
    },
    {
      id: "alloy-treatment",
      icon: CircleDot,
      title: "Alloy treatment",
      description: "Specialized cleaning and protective coating for your alloy wheels to resist brake dust and corrosion.",
      features: ["Brake dust resistance", "Alloy wheel ceramic coat", "High-gloss finish"],
      price: "₹999",
    },
    {
      id: "engine-coating",
      icon: Wind,
      title: "Engine coating",
      description: "Protective heat-resistant coating for your engine bay, making it easier to clean and preventing corrosion.",
      features: ["Heat-resistant protection", "Moisture barrier", "Showroom finish"],
      price: "₹999/-",
    },
    {
      id: "ac-treatment",
      icon: Wind,
      title: "Ac vent treatment",
      description: "Deep cleaning and sanitization of the AC vents to eliminate bacteria, mold, and odors.",
      features: ["AC vent sanitization", "Antimicrobial treatment", "Fresh cabin air"],
      price: "₹1,299/-",
    },
    {
      id: "headlight-restoration",
      icon: Sun,
      title: "Headlight restoration",
      description: "Professional restoration of oxidized or yellowed headlights to improve visibility and aesthetics.",
      features: ["UV damage removal", "Crystal-clear clarity", "UV-resistant sealant"],
      price: "₹999/-",
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <div className="max-w-3xl">
            <span className="micro-label mb-2 sm:mb-3 block text-[10px] sm:text-xs">Comprehensive Solutions</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
              Premium <span className="text-gold-gradient">Car Care Services</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              From protective coatings and paint correction to deep interior restoration and professional detailing, 
              we deliver expert automotive care using industry-leading products, advanced techniques, and master craftsmanship 
              to protect and transform your vehicle.
            </p>
          </div>

          {/* Navigation Controls - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:border-gold/50 hover:text-gold transition-all duration-300 disabled:opacity-50"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:border-gold/50 hover:text-gold transition-all duration-300 disabled:opacity-50"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: '200ms' }}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4 md:-ml-6 py-12 -my-12">
              {services.map((service) => (
                <CarouselItem 
                  key={service.title} 
                  className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <ServiceCard {...service} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Mobile Swipe Hint */}
            {isMobile && showSwipeHint && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-end pr-4 z-10">
                <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-full border border-border/50 animate-pulse">
                  <Hand className="w-4 h-4 text-gold animate-[swipe_1.5s_ease-in-out_infinite]" />
                  <span className="text-xs text-muted-foreground">Swipe</span>
                </div>
              </div>
            )}
          </Carousel>

          {/* Premium Pagination & Controls Container */}
          <div className="mt-8 md:mt-12 flex flex-col items-center gap-6 sm:gap-8">
            {/* Dynamic Segmented Progress Pagination */}
            <div className="flex items-center gap-1.5 w-full max-w-[280px] p-1.5 rounded-full bg-background/50 border border-border/50 backdrop-blur-md shadow-inner">
              {Array.from({ length: isMobile ? count : Math.ceil(services.length / 3) || 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-1.5 sm:h-2 rounded-full transition-all duration-500 ease-out relative overflow-hidden",
                    current === index 
                      ? "bg-gold flex-[3] sm:flex-[4] shadow-[0_0_10px_rgba(255,215,0,0.4)]" 
                      : "bg-muted-foreground/30 flex-[1] hover:bg-gold/40"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {current === index && (
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Navigation Controls - Mobile */}
            <div className="flex md:hidden items-center justify-between w-full max-w-[280px]">
              <button
                onClick={scrollPrev}
                className="w-11 h-11 rounded-full bg-card/80 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-gold/10 hover:border-gold/50 hover:text-gold transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:scale-95"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col items-center justify-center">
                 <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground/60 font-medium mb-1">Service</span>
                 <div className="text-sm font-semibold tracking-widest text-foreground flex items-center gap-1.5">
                    <span className="text-gold">{String(current + 1).padStart(2, '0')}</span> 
                    <span className="text-muted-foreground/30 text-xs">/</span> 
                    <span className="text-muted-foreground/70">{String(count).padStart(2, '0')}</span>
                  </div>
              </div>

              <button
                onClick={scrollNext}
                className="w-11 h-11 rounded-full bg-card/80 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-gold/10 hover:border-gold/50 hover:text-gold transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)] active:scale-95"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* View All CTA */}
        <div
          className={cn(
            "text-center mt-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: '400ms' }}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gold/30 rounded-lg text-gold font-medium hover:bg-gold/10 hover:border-gold transition-all duration-300"
          >
            View All Services & Pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
