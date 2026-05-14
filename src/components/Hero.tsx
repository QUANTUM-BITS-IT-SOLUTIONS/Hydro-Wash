import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-[500px] h-[90svh] lg:h-[100svh] w-full overflow-hidden">
      {/* Multi-layer Parallax Background */}
      <div className="absolute inset-0">
        {/* Base Video Layer */}
        <div 
          className="absolute inset-0 scale-100"
          style={{ transform: `scale(1) translateY(${scrollY * 0.15}px)` }}
        >
          <img
            src="/Hero.png"
            alt="HydroWash Hero"
            className="h-full w-full object-cover object-[75%_center] lg:object-right"
            loading="eager"
          />
        </div>

        {/* Dark Gradient Overlay - More aggressive on mobile to ensure text legibility */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background lg:from-background/70 lg:via-background/40 lg:to-background"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />

        {/* Ambient Orbs - Hidden on very small screens to improve performance */}
        <div 
          className="hidden xs:block absolute top-1/4 left-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-gold/10 blur-[50px] sm:blur-[80px]"
          style={{ 
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15 + scrollY * 0.1}px)`,
            transition: 'transform 0.8s var(--ease-smooth)'
          }}
        />

        {/* Reduced Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            />
          ))}
        </div>

        {/* Animated Light Rays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 left-[15%] w-[2px] h-[120%] bg-gradient-to-b from-gold/30 via-gold/10 to-transparent rotate-[15deg] origin-top"
            style={{ 
              transform: `rotate(15deg) translateY(${scrollY * 0.5}px)`,
              animation: 'light-ray 6s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute top-0 left-[40%] w-[1px] h-[100%] bg-gradient-to-b from-gold/20 via-gold/5 to-transparent rotate-[5deg] origin-top"
            style={{ 
              transform: `rotate(5deg) translateY(${scrollY * 0.4}px)`,
              animation: 'light-ray 8s ease-in-out infinite',
              animationDelay: '2s'
            }}
          />
          <div 
            className="absolute top-0 right-[20%] w-[2px] h-[110%] bg-gradient-to-b from-gold/25 via-gold/8 to-transparent rotate-[-10deg] origin-top"
            style={{ 
              transform: `rotate(-10deg) translateY(${scrollY * 0.45}px)`,
              animation: 'light-ray 7s ease-in-out infinite',
              animationDelay: '1s'
            }}
          />
        </div>

        {/* Mist/Fog Layer */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-background via-background/50 to-transparent"
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        />

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 162, 39, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 162, 39, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
      </div>

      {/* Floating Side Elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        <div 
          className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold/50 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <span 
          className="vertical-text text-xs uppercase tracking-[0.3em] text-gold/60"
          style={{ 
            writingMode: 'vertical-rl',
            transform: `translateY(${scrollY * 0.2}px)` 
          }}
        >
          Est. 2016
        </span>
        <div 
          className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold/50 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 items-center">
        <div 
          className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold/50 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        />
        <span 
          className="vertical-text text-xs uppercase tracking-[0.3em] text-gold/60"
          style={{ 
            writingMode: 'vertical-rl',
            transform: `rotate(180deg) translateY(${-scrollY * 0.2}px)` 
          }}
        >
          India
        </span>
      </div>

        {/* Content */}
      <div className="section-container relative z-10 flex h-full flex-col items-center lg:items-start justify-center text-center lg:text-left pt-4 sm:pt-0">
        {/* Decorative Elements - Hidden on mobile for cleaner look */}
        <div 
          className={`hidden sm:block absolute top-1/3 left-1/2 lg:left-1/4 -translate-x-1/2 w-[300px] h-[300px] border border-gold/10 rounded-full gpu-accelerate transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{ transform: `translate(-50%, -50%) scale3d(${1 + scrollY * 0.0005}, ${1 + scrollY * 0.0005}, 1)` }}
        />

        {/* Logo Reveal - Smoother easing */}
        <div
          className={`mb-4 sm:mb-6 transition-all duration-1000 delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            transform: `translate3d(0, ${-scrollY * 0.4}px, 0)`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <span className="micro-label text-[10px] sm:text-xs text-gold/80 tracking-[0.2em]">Excellence In Every Detail</span>
        </div>

        {/* Main Headline */}
        <h1
          className={`headline-xl mb-4 sm:mb-6 max-w-[320px] xs:max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            transform: `translate3d(0, ${-scrollY * 0.5}px, 0)`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <span className="text-gold-gradient">HydroWash</span>{' '}
          <span className="inline">Studio</span>
          <br className="hidden lg:block" />
          <span className="text-foreground/90">& Detailing</span>
        </h1>

        {/* Animated Divider */}
        <div 
          className={`h-[1px] sm:h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent lg:from-gold lg:to-transparent mb-6 transition-all duration-1000 delay-400 gpu-accelerate ${isLoaded ? 'opacity-100 w-16 sm:w-24' : 'opacity-0 w-0'}`}
          style={{ 
            transform: `translate3d(0, ${-scrollY * 0.45}px, 0)`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />

        {/* Tagline */}
        <p
          className={`mb-10 sm:mb-12 max-w-[280px] xs:max-w-sm sm:max-w-xl text-sm xs:text-base sm:text-xl md:text-2xl text-white/70 font-light transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            transform: `translate3d(0, ${-scrollY * 0.35}px, 0)`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          Where Perfection Meets Precision.
        </p>

        {/* CTAs - Enhanced hover effects */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-[240px] xs:max-w-none sm:w-auto transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            transform: `translate3d(0, ${-scrollY * 0.3}px, 0)`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <button
            onClick={scrollToServices}
            className="btn-gold animate-glow-pulse group relative overflow-hidden text-xs sm:text-base px-5 sm:px-8 py-3 sm:py-4 gpu-accelerate rounded-full sm:rounded-lg"
          >
            <span className="relative z-10">Experience Excellence</span>
          </button>
          
          <a
            href="https://wa.me/918888899936"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-full sm:rounded-lg border border-gold/30 bg-background/50 backdrop-blur-sm text-gold font-bold uppercase tracking-widest text-[10px] sm:text-sm transition-all duration-500 hover:border-gold hover:bg-gold/10 group gpu-accelerate"
          >
            Book Appointment
          </a>
        </div>

        {/* Stats Preview */}
        <div 
          className={`flex gap-4 xs:gap-8 sm:gap-12 mt-8 sm:mt-16 transition-all duration-1000 delay-900 gpu-accelerate ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transform: `translate3d(0, ${-scrollY * 0.2}px, 0)`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {[
            { value: '8+', label: 'Years' },
            { value: '5K+', label: 'Cars' },
            { value: '4.9', label: 'Rating' },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-lg sm:text-2xl md:text-3xl font-bold text-gold">{stat.value}</p>
              <p className="text-[9px] sm:text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator - Smooth animation */}
      <button
        onClick={scrollToServices}
        className={`absolute bottom-8 left-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-all duration-500 cursor-pointer gpu-accelerate ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          transform: `translate3d(-50%, ${-scrollY * 0.5}px, 0)`,
          left: '50%',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <span className="text-xs uppercase tracking-widest">Discover</span>
        <div className="w-6 h-10 rounded-full border border-gold/30 flex items-start justify-center p-2 hover:border-gold/50 transition-colors duration-300">
          <div className="w-1 h-2 bg-gold rounded-full animate-scroll-indicator" />
        </div>
      </button>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
