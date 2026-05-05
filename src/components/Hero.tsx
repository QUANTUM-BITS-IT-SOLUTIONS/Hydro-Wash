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
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Multi-layer Parallax Background */}
      <div className="absolute inset-0">
        {/* Base Video Layer */}
        <div 
          className="absolute inset-0 scale-110"
          style={{ transform: `scale(1.1) translateY(${scrollY * 0.3}px)` }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            poster="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80"
          >
            <source
              src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Dark Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />

        {/* Animated Ambient Orbs - GPU Accelerated */}
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[100px] gpu-accelerate"
          style={{ 
            transform: `translate3d(${mousePosition.x * 30}px, ${mousePosition.y * 30 + scrollY * 0.2}px, 0)`,
            transition: 'transform 0.5s var(--ease-smooth)'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[80px] gpu-accelerate"
          style={{ 
            transform: `translate3d(${mousePosition.x * -20}px, ${mousePosition.y * -20 + scrollY * 0.15}px, 0)`,
            transition: 'transform 0.5s var(--ease-smooth)'
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`,
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
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Decorative Elements - Smooth scaling */}
        <div 
          className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] border border-gold/10 rounded-full gpu-accelerate transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{ transform: `translate(-50%, -50%) scale3d(${1 + scrollY * 0.0005}, ${1 + scrollY * 0.0005}, 1)` }}
        />
        <div 
          className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] border border-gold/5 rounded-full gpu-accelerate transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{ transform: `translate(-50%, -50%) scale3d(${1 + scrollY * 0.0003}, ${1 + scrollY * 0.0003}, 1)` }}
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
          <span className="micro-label text-[10px] sm:text-xs">Contact Us, When Cleaning Isn't Enough</span>
        </div>

        {/* Main Headline with Parallax - GPU Accelerated */}
        <h1
          className={`headline-xl mb-4 sm:mb-6 max-w-5xl px-2 sm:px-0 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            transform: `translate3d(0, ${-scrollY * 0.5}px, 0)`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <span className="text-gold-gradient">HydroWash</span>{' '}
          <span className="block sm:inline">Car Wash</span>
          <br className="hidden sm:block" />
          <span className="text-foreground/90">& Detailing Studio</span>
        </h1>

        {/* Animated Divider */}
        <div 
          className={`h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mb-6 transition-all duration-1000 delay-400 gpu-accelerate ${isLoaded ? 'opacity-100 w-24' : 'opacity-0 w-0'}`}
          style={{ 
            transform: `translate3d(0, ${-scrollY * 0.45}px, 0)`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />

        {/* Tagline */}
        <p
          className={`mb-8 sm:mb-12 max-w-2xl px-4 sm:px-0 text-lg sm:text-xl md:text-2xl text-muted-foreground font-light transition-all duration-1000 delay-500 ${
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
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            transform: `translate3d(0, ${-scrollY * 0.3}px, 0)`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <button
            onClick={scrollToServices}
            className="btn-gold animate-glow-pulse group relative overflow-hidden text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 gpu-accelerate"
          >
            <span className="relative z-10">Experience Excellence</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold via-yellow-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          
          <a
            href="https://wa.me/918123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-gold/30 bg-background/50 backdrop-blur-sm text-gold font-semibold uppercase tracking-widest text-xs sm:text-sm transition-all duration-500 hover:border-gold hover:bg-gold/10 hover:scale-105 active:scale-95 group gpu-accelerate"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book on WhatsApp
            </span>
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gold/5 animate-pulse" />
            </div>
          </a>
        </div>

        {/* Stats Preview - Smooth reveal */}
        <div 
          className={`flex gap-6 sm:gap-8 md:gap-12 mt-10 sm:mt-16 transition-all duration-1000 delay-900 gpu-accelerate ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
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
              className="text-center transition-all duration-500 hover:scale-110"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gold animate-count-glow">{stat.value}</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
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
