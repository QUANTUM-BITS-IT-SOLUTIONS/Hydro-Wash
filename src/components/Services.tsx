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
      id: "paint-protection-film",
      icon: Shield,
      title: "Paint Protection Film (PPF)",
      description: "Advanced self-healing urethane film that forms an invisible armor around your vehicle's paint. Our precision-cut PPF protects against stone chips, road debris, scratches, and environmental contaminants while maintaining your car's original gloss and finish.",
      features: ["Self-healing technology (heat activated)", "Computer-precision cutting", "10-year manufacturer warranty", "Hydrophobic top coat", "Stain & chemical resistance"],
      price: "₹49,999",
    },
    {
      id: "ceramic-coating",
      icon: Droplets,
      title: "Ceramic Coating",
      description: "Premium SiO2-based nano-ceramic coating that creates a permanent bond with your paint, delivering exceptional gloss, extreme hydrophobicity, and long-lasting protection against UV rays, oxidation, chemical stains, and minor scratches.",
      features: ["9H pencil hardness rating", "5+ years durability", "Extreme water beading", "UV & oxidation protection", "Chemical stain resistance"],
      price: "₹14,999",
    },
    {
      id: "graphene-coating",
      icon: Layers,
      title: "Graphene Coating",
      description: "Next-generation graphene-infused coating offering superior heat dissipation, reduced water spotting, and enhanced durability over traditional ceramic coatings. The ultra-thin graphene layer provides unmatched slickness and protection.",
      features: ["Superior heat dissipation", "Reduced water spotting", "7+ years protection", "Extreme slickness & gloss", "Anti-static properties"],
      price: "₹19,999",
    },
    {
      id: "premium-detailing",
      icon: Gem,
      title: "Premium Auto Detailing Studio",
      description: "Our state-of-the-art detailing studio combines advanced equipment, premium products, and master craftsmanship to deliver transformational results. From concours-level paint correction to complete interior rejuvenation, we treat every vehicle as a masterpiece.",
      features: ["Climate-controlled environment", "Professional-grade equipment", "Master-certified technicians", "Premium product lines", "Concours-level standards"],
      price: "₹1,999",
    },
    {
      id: "interior-detailing",
      icon: Car,
      title: "Interior Car Detailing",
      description: "Deep-cleaning restoration of your vehicle's cabin using steam cleaning, extraction shampooing, and leather conditioning. We eliminate odors, stains, allergens, and bacteria while rejuvenating every surface to like-new condition.",
      features: ["Steam cleaning & sanitization", "Leather cleaning & conditioning", "Carpet & upholstery extraction", "Dashboard & trim restoration", "Ozone odor elimination"],
      price: "₹1,999",
    },
    {
      id: "exterior-detailing",
      icon: SprayCan,
      title: "Exterior Car Detailing",
      description: "Comprehensive exterior rejuvenation including clay bar decontamination, multi-stage paint correction, and protective sealant application. We restore clarity, depth, and gloss to every painted surface, trim, and glass.",
      features: ["Clay bar paint decontamination", "Multi-stage paint correction", "Machine polishing", "Trim & plastic restoration", "Glass polishing & coating"],
      price: "₹4,499",
    },
    {
      id: "headlight-restoration",
      icon: Sun,
      title: "Headlight Restoration",
      description: "Professional restoration of oxidized, yellowed, or hazy headlights using wet-sanding, polishing, and UV-resistant sealing. Improve nighttime visibility and restore your vehicle's aesthetic appeal while avoiding costly headlight replacements.",
      features: ["Wet-sanding & compounding", "UV damage removal", "Crystal-clear clarity", "UV-resistant sealant", "Taillight restoration available"],
      price: "₹999",
    },
    {
      id: "underbody-coating",
      icon: Shield,
      title: "Under Body Coating",
      description: "Protective coating applied to the vehicle's undercarriage to prevent rust, corrosion, and damage from road salt, moisture, and debris. Essential for vehicles in coastal areas or harsh climates to maintain structural integrity.",
      features: ["Rust & corrosion prevention", "Sound dampening properties", "Stone chip protection", "Rubberized durable finish", "5-year protection warranty"],
      price: "₹4,499",
    },
    {
      id: "car-wash",
      icon: Brush,
      title: "Premium Car Wash",
      description: "Meticulous hand-wash service using the two-bucket method, pH-neutral shampoos, and premium microfiber towels. Our safe wash techniques eliminate swirl marks while thoroughly cleaning every panel, wheel, and trim piece.",
      features: ["Two-bucket safe wash method", "pH-neutral foam shampoo", "Microfiber drying technique", "Wheel & tire deep clean", "Door jambs & fuel cap cleaning"],
      price: "₹1,199",
    },
    {
      id: "complete-detailing",
      icon: Sparkles,
      title: "Complete Car Detailing",
      description: "The ultimate all-inclusive package combining full interior and exterior detailing with paint correction and protective coating. This comprehensive service transforms your vehicle to showroom or better-than-new condition in every aspect.",
      features: ["Full interior deep clean", "Paint correction & polishing", "Engine bay detailing", "Protective coating application", "Final quality inspection"],
      price: "₹1,999",
    },
    {
      id: "rubbing-polishing",
      icon: RotateCw,
      title: "Rubbing & Polishing",
      description: "Professional paint correction service using multi-stage machine polishing to remove swirl marks, light scratches, oxidation, and holograms. Restores your paint's original depth, clarity, and showroom gloss.",
      features: ["Multi-stage machine polishing", "Swirl mark removal", "Paint oxidation repair", "Gloss restoration", "Paint thickness safety check"],
      price: "₹4,499",
    },
    {
      id: "hydrowash-wax",
      icon: Waves,
      title: "Premium Hydrowash & Wax",
      description: "Thorough hand wash using high-pressure rinse with premium carnauba wax application. Creates a hydrophobic barrier that protects your paint, enhances gloss, and makes future cleaning easier for up to 3 months.",
      features: ["High-pressure pre-rinse", "Two-bucket hand wash", "Premium carnauba wax", "Hydrophobic protection", "UV damage prevention"],
      price: "₹1,199",
    },
    {
      id: "anti-rust-alloy",
      icon: CircleDot,
      title: "Anti Rust Coating & Alloy Treatment",
      description: "Comprehensive protection combining rubberized underbody rust coating with ceramic alloy wheel treatment. Prevents corrosion, resists brake dust buildup, and makes wheel cleaning effortless.",
      features: ["Rubberized underbody coating", "Alloy wheel ceramic coat", "Brake dust resistance", "5-year rust warranty", "Heat-resistant protection"],
      price: "₹5,498",
    },
    {
      id: "engine-ac-treatment",
      icon: Wind,
      title: "Engine Coating & AC Vent Treatment",
      description: "Dual service protecting your engine bay with heat-resistant coating while deep-cleaning and sanitizing the AC system. Eliminates bacteria, mold, and odors from vents for fresh, healthy cabin air.",
      features: ["Engine bay protective coating", "AC vent sanitization", "Antimicrobial treatment", "Ozone odor elimination", "Heat & moisture protection"],
      price: "₹2,298",
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
            <span className="micro-label mb-3 block">Comprehensive Solutions</span>
            <h2 className="headline-lg mb-4">
              Premium <span className="text-gold-gradient">Car Care Services</span>
            </h2>
            <p className="text-muted-foreground">
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
            <CarouselContent className="-ml-4 md:-ml-6">
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

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: isMobile ? count : Math.ceil(services.length / 3) || 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  current === index 
                    ? "w-8 bg-gold" 
                    : "bg-border hover:bg-gold/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Controls - Mobile */}
          <div className="flex md:hidden items-center justify-center gap-3 mt-6">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:border-gold/50 hover:text-gold transition-all duration-300"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:border-gold/50 hover:text-gold transition-all duration-300"
              aria-label="Next service"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
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
