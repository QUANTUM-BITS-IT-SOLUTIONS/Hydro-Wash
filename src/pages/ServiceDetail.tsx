import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { 
  ArrowLeft, 
  Check, 
  Clock, 
  Shield, 
  Sparkles, 
  Droplets, 
  Sun, 
  Gem, 
  Zap, 
  Wind,
  Award,
  Diamond,
  Layers,
  Eye,
  Heart,
  Wallet,
  VolumeX,
  HelpCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  MoveHorizontal,
  AlertTriangle
} from 'lucide-react';
import { getServiceById, getRelatedServices, type BeforeAfterImage } from '@/data/servicesData';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Before/After Comparison Component
const BeforeAfterComparison = ({ image }: { image: BeforeAfterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(percentage, 100)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] rounded-xl overflow-hidden cursor-ew-resize select-none touch-none bg-muted"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchMove}
      >
        {/* After Image (Full) */}
        <div className="absolute inset-0">
          <img
            src={image.after}
            alt="After"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/placeholder-after.jpg';
            }}
          />
          <span className="absolute top-4 right-4 px-3 py-1 bg-green-500/90 text-white text-xs font-bold uppercase tracking-wider rounded-full">
            After
          </span>
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={image.before}
            alt="Before"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/placeholder-before.jpg';
            }}
          />
          <span className="absolute top-4 left-4 px-3 py-1 bg-red-500/90 text-white text-xs font-bold uppercase tracking-wider rounded-full">
            Before
          </span>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
            <MoveHorizontal className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </div>
        </div>
      </div>
      
      {/* Caption */}
      <p className="text-center text-sm text-muted-foreground font-medium">
        {image.caption}
      </p>
      <p className="text-center text-xs text-muted-foreground/60">
        Drag slider to compare before and after
      </p>
    </div>
  );
};

// Icon mapping for dynamic rendering
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Sparkles,
  Droplets,
  Sun,
  Gem,
  Zap,
  Wind,
  Award,
  Diamond,
  Layers,
  Eye,
  Heart,
  Wallet,
  VolumeX,
  Clock,
  Check,
};


const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const service = id ? getServiceById(id) : undefined;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (!service || !id) {
        setError('Service not found');
        console.error(`Service not found for ID: ${id}`);
        // Redirect after a short delay to allow user to see the error
        setTimeout(() => {
          navigate('/services', { replace: true });
        }, 2000);
      }
    }, 500); // Simulate loading time

    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, [service, id, navigate]);

  if (isLoading) {
    return (
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main className="pt-20">
          <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading service details...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main className="pt-20">
          <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
              <p className="text-muted-foreground mb-6">
                {error || 'The service you\'re looking for doesn\'t exist.'}
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Redirecting to services list...
              </p>
              <div className="w-16 h-16 border-4 border-gold/30 border-t-gold rounded-full animate-spin mx-auto"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Only use manually defined beforeAfterImages from servicesData.ts
  // Gallery folder images are NOT automatically shown on service pages anymore
  const combinedBeforeAfterImages: BeforeAfterImage[] = service.beforeAfterImages;

  const relatedServices = getRelatedServices(service.relatedServices);

  const renderIcon = (iconName: string) => {
    const Icon = iconMap[iconName] || Shield;
    return <Icon className="w-6 h-6" />;
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-background to-background" />
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-gold/5 blur-[120px] -z-10 rounded-full" />
          
          <div className="section-container relative z-10">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-all duration-300 mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium uppercase tracking-widest">Back to Services</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="animate-fade-in text-center lg:text-left">
                <span className="micro-label mb-5 block">Automotive Perfection</span>
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight text-balance mx-auto lg:mx-0">
                  {service.title.split(' ').map((word, i) => 
                    i === 0 ? <span key={i}>{word} </span> : 
                    <span key={i} className="text-gold-gradient">{word} </span>
                  )}
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gold/80 font-medium mb-8 leading-relaxed italic mx-auto lg:mx-0 max-w-2xl">{service.subtitle}</p>
                <p className="text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 text-muted-foreground">{service.fullDescription}</p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-5">
                  <a
                    href="https://wa.me/918888899936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Book Professional Service
                  </a>
                  <a
                    href="tel:+918888899936"
                    className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 border border-gold/30 text-gold font-bold rounded-xl hover:bg-gold/10 transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
                  >
                    <Phone className="w-5 h-5" />
                    Speak with Expert
                  </a>
                </div>
              </div>

              {/* Quick Info Card - Service Intelligence */}
              <div className="glass-card p-6 sm:p-8 lg:p-10 border-white/5 relative overflow-hidden animate-slide-up [animation-delay:200ms] mt-8 lg:mt-0">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                   <Shield className="w-20 h-20 sm:w-24 sm:h-24 text-gold" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-8 relative z-10">Service Intelligence</h3>
                <div className="space-y-4 sm:space-y-6 relative z-10">
                  {service.specs.slice(0, 4).map((spec) => (
                    <div key={spec.label} className="flex justify-between items-baseline py-3 sm:py-4 border-b border-white/5 last:border-0 group">
                      <span className="text-muted-foreground text-[10px] sm:text-xs uppercase tracking-widest group-hover:text-gold transition-colors mr-4">{spec.label}</span>
                      <span className="font-bold text-foreground text-base sm:text-lg text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-white/10 relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Premium Investment From</p>
                  <p className="text-3xl sm:text-4xl font-bold text-gold-gradient tracking-tighter">{service.packages[0]?.price || 'Custom Quote'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is It Section */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 carbon-bg opacity-20" />
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="micro-label mb-5 block">Detailed Insight</span>
              <h2 className="headline-lg mb-8">
                The Science of <span className="text-gold-gradient">{service.title}</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light italic">
                "{service.whatIsIt}"
              </p>
            </div>
          </div>
        </section>

        {/* Before/After Results Section */}
        {combinedBeforeAfterImages.length > 0 && (
          <section className="py-24 md:py-32 overflow-hidden">
            <div className="section-container">
              <div className="text-center mb-20">
                <span className="micro-label mb-4 block">Proven Transformation</span>
                <h2 className="headline-lg mb-6">
                  Visual <span className="text-gold-gradient">Excellence</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                  Experience the radical difference through our portfolio of successful restorations. 
                  Every vehicle treated as a masterpiece.
                </p>
              </div>

              {/* Mobile: Enhanced Stacked View */}
              <div className="block md:hidden space-y-12">
                {combinedBeforeAfterImages.map((image, index) => (
                  <div key={index} className="space-y-5 animate-fade-in">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                        <img
                          src={image.before}
                          alt="Before"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/placeholder-before.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <span className="absolute top-4 left-4 px-4 py-1.5 bg-red-600/90 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full backdrop-blur-md">
                          Before
                        </span>
                      </div>
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-gold/20 shadow-2xl shadow-gold/10">
                        <img
                          src={image.after}
                          alt="After"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/placeholder-after.jpg';
                          }}
                        />
                        <span className="absolute top-4 right-4 px-4 py-1.5 bg-gold text-background text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                          After
                        </span>
                      </div>
                    </div>
                    <div className="text-center px-4">
                      <p className="text-foreground font-bold tracking-tight mb-1">{image.caption}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">Master Execution</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: Premium Slider View */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {combinedBeforeAfterImages.map((image, index) => (
                  <div key={index} className="hover-lift">
                    <BeforeAfterComparison image={image} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gold/5" />
          <div className="section-container relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <span className="micro-label mb-4 block">The Studio Difference</span>
              <h2 className="headline-lg mb-6">
                Why Entrust Us with <span className="text-gold-gradient">Your Vehicle</span>?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.whyChoose.map((reason, index) => (
                <div 
                  key={index} 
                  className="group flex items-start gap-5 p-8 rounded-2xl border border-white/5 bg-card/40 backdrop-blur-sm hover:border-gold/30 hover:bg-card transition-all duration-500 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold text-gold group-hover:text-background transition-all duration-500">
                    <Check className="w-6 h-6" />
                  </div>
                  <p className="text-foreground text-lg font-medium leading-tight group-hover:text-gold transition-colors">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 md:py-32">
          <div className="section-container">
            <div className="text-center mb-20">
              <span className="micro-label mb-4 block">Core Advantages</span>
              <h2 className="headline-lg mb-6">
                Exceptional <span className="text-gold-gradient">Benefits</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group p-10 rounded-2xl border border-white/5 bg-card/30 hover:border-gold/30 transition-all duration-500 hover-lift"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gold/5 flex items-center justify-center mb-8 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                    <span className="text-gold">{renderIcon(benefit.icon)}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-24 md:py-32 relative overflow-hidden">
           <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full" />
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <span className="micro-label mb-5 block">Precision Data</span>
                <h2 className="headline-lg mb-8">
                  Technical <span className="text-gold-gradient">Specifications</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                  We maintain radical transparency about our methodology and the high-grade materials utilized in our studio.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  {service.specs.map((spec, index) => (
                    <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-gold/20 transition-all group">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-2 group-hover:text-gold transition-colors">{spec.label}</p>
                      <p className="text-lg font-bold text-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div>
                <span className="micro-label mb-5 block">Workflow Mastery</span>
                <h2 className="headline-lg mb-8">
                  The <span className="text-gold-gradient">Art of Process</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                  Every vehicle undergoes a standardized, meticulous multi-stage protocol to ensure absolute consistency.
                </p>

                <div className="space-y-10">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex gap-6 group">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/30 group-hover:bg-gold transition-all duration-500 z-10 relative">
                          <span className="text-gold group-hover:text-background font-black text-xl tracking-tighter transition-colors">{step.step}</span>
                        </div>
                        {index < service.process.length - 1 && (
                          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-gold/30 to-transparent" />
                        )}
                      </div>
                      <div className="pt-2">
                        <h4 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 carbon-bg opacity-30" />
          <div className="section-container relative z-10">
            <div className="text-center mb-20">
              <span className="micro-label mb-4 block">Bespoke Options</span>
              <h2 className="headline-lg mb-6">
                Investment <span className="text-gold-gradient">Tiers</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                Tailored packages designed to meet the specific requirements of your vehicle and your vision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto items-center">
              {service.packages.map((pkg, index) => (
                <div 
                  key={index}
                  className={cn(
                    "relative rounded-3xl border p-10 transition-all duration-700",
                    pkg.recommended 
                      ? "border-gold bg-gold/10 shadow-[0_0_80px_rgba(212,175,55,0.25)] md:scale-110 z-20"
                      : "border-white/5 bg-background/50 backdrop-blur-sm hover:border-gold/30 hover-lift z-10"
                  )}
                >
                  {pkg.recommended && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="px-6 py-2 bg-gold text-background text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-2xl">
                        Elite Recommendation
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-black mb-2 tracking-tight uppercase">{pkg.name}</h3>
                  <p className="text-xs text-gold/60 font-bold uppercase tracking-widest mb-8">{pkg.duration}</p>
                  
                  <div className="mb-10">
                    <span className="text-5xl font-black text-gold-gradient tracking-tighter">{pkg.price}</span>
                  </div>

                  <ul className="space-y-5 mb-12">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm font-medium group">
                        <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8 border-t border-white/10 mb-10">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-2">Service Guarantee</p>
                    <p className="text-lg font-bold text-foreground italic">"{pkg.warranty}"</p>
                  </div>

                  <a
                    href="https://wa.me/918888899936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "block w-full py-5 rounded-xl font-black uppercase tracking-[0.2em] text-xs text-center transition-all duration-500",
                      pkg.recommended
                        ? "btn-gold shadow-gold/30"
                        : "border-2 border-gold/40 text-gold hover:bg-gold hover:text-background"
                    )}
                  >
                    Secure This Tier
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-24 md:py-32">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-20">
                <span className="micro-label mb-4 block">Knowledge Base</span>
                <h2 className="headline-lg mb-6">
                  Expert <span className="text-gold-gradient">Insights</span>
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-5">
                {service.faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-white/5 rounded-2xl px-8 data-[state=open]:border-gold/40 data-[state=open]:bg-gold/5 transition-all duration-500 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6 group">
                      <div className="flex items-center gap-5">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-all">
                           <HelpCircle className="w-5 h-5 text-gold" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-foreground/90 group-hover:text-gold transition-colors">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8 pl-15">
                      <div className="border-l-2 border-gold/30 pl-6 py-2">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 carbon-bg opacity-10" />
            <div className="section-container relative z-10">
              <div className="text-center mb-20">
                <span className="micro-label mb-4 block">Expand the Experience</span>
                <h2 className="headline-lg mb-6">
                  Complementary <span className="text-gold-gradient">Treatments</span>
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedServices.map((related) => (
                  <Link
                    key={related.id}
                    to={`/services/${related.id}`}
                    className="group p-8 rounded-2xl border border-white/5 bg-card/30 hover:border-gold/30 transition-all duration-500 hover-lift"
                  >
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors duration-300 tracking-tight">
                      {related.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-8 line-clamp-2 italic">
                      {related.shortDescription}
                    </p>
                    <div className="flex items-center gap-3 text-gold text-xs font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                      Explore Mastery
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 md:py-40 relative">
          <div className="section-container">
            <div className="relative rounded-[40px] overflow-hidden group">
              {/* Complex Premium Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-background to-background" />
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 blur-[120px] rounded-full animate-pulse [animation-delay:1s]" />
              <div className="absolute inset-0 carbon-bg opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
              
              <div className="relative p-12 md:p-20 lg:p-32 text-center border border-white/5">
                <span className="micro-label mb-6 block">Ready for Transformation</span>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tighter text-balance">
                  Elevate Your <span className="text-gold-gradient">Vehicle's Soul</span>
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                  Join the elite ranks of vehicle owners who refuse to settle for anything less 
                  than absolute perfection. Your master appointment awaits.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="https://wa.me/918888899936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center gap-4 px-12 py-6 text-lg font-black shadow-gold/40"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Initialize Booking
                  </a>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-4 px-10 py-6 border-2 border-gold/40 text-gold font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:bg-gold hover:text-background transition-all duration-500 backdrop-blur-md"
                  >
                    The Full Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
