import { Search, Brush, Sparkles, ThumbsUp, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';

const Process = () => {
  const { ref, isVisible } = useScrollReveal();

  const steps = [
    {
      icon: Search,
      number: '01',
      label: 'Inspect',
      description: 'Comprehensive vehicle assessment to identify every detail requiring attention',
    },
    {
      icon: Brush,
      number: '02',
      label: 'Prepare',
      description: 'Meticulous surface preparation including decontamination and cleaning',
    },
    {
      icon: Sparkles,
      number: '03',
      label: 'Treat',
      description: 'Expert application of premium products with precision techniques',
    },
    {
      icon: ThumbsUp,
      number: '04',
      label: 'Perfect',
      description: 'Final inspection ensuring flawless results that exceed expectations',
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute inset-0 carbon-bg opacity-30" />

      <div className="section-container relative z-10 px-4 sm:px-6" ref={ref}>
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-700 ease-premium",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="micro-label mb-3 sm:mb-4 block">Our Methodology</span>
          <h2 className="headline-lg mb-3 sm:mb-4">
            The <span className="text-gold-gradient">HydroWash</span> Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A systematic approach perfected over years to deliver exceptional results every time
          </p>
        </div>

        {/* Process Steps - Modern Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div 
              className={cn(
                "h-full bg-gradient-to-b from-gold/50 via-gold to-gold/50 transition-all duration-1500 ease-premium",
                isVisible ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: '300ms' }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.label}
                  className={cn(
                    "relative lg:grid lg:grid-cols-2 lg:gap-16 transition-all duration-700 ease-premium",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    index !== steps.length - 1 && "lg:pb-16"
                  )}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  {/* Mobile Timeline Indicator */}
                  <div className="lg:hidden flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card border-2 border-gold flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-bold text-xs sm:text-sm">{index + 1}</span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
                  </div>

                  {/* Content Side */}
                  <div
                    className={cn(
                      "flex items-center",
                      isEven ? "lg:justify-end lg:text-right" : "lg:col-start-2 lg:justify-start lg:text-left"
                    )}
                  >
                    <div className={cn(
                      "glass-card p-4 sm:p-6 md:p-8 max-w-md w-full group hover:border-gold/40 transition-all duration-500",
                      "hover:shadow-[0_0_40px_rgba(201,162,39,0.15)]"
                    )}>
                      <div className={cn(
                        "flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4",
                        isEven ? "lg:flex-row-reverse" : ""
                      )}>
                        <div className="relative">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                            <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
                          </div>
                          {/* Glow */}
                          <div className="absolute inset-0 rounded-xl bg-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div>
                          <span className="text-gold/60 text-xs sm:text-sm font-mono">{step.number}</span>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{step.label}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{step.description}</p>
                    </div>
                  </div>

                  {/* Desktop Timeline Node */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-card border-2 border-gold flex items-center justify-center z-10">
                        <span className="text-gold font-bold text-sm">{index + 1}</span>
                      </div>
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 rounded-full bg-gold/30 animate-ping" style={{ animationDuration: '2s' }} />
                    </div>
                  </div>

                  {/* Empty Side for Grid */}
                  <div className={cn(
                    "hidden lg:block",
                    isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"
                  )} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Progress Indicator */}
        <div className="lg:hidden flex justify-center gap-2 mt-8 sm:mt-10">
          {steps.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-500",
                isVisible ? "bg-gold" : "bg-gold/30"
              )}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className={cn(
            "text-center mt-12 sm:mt-16 transition-all duration-700 ease-premium px-4 sm:px-0",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: '1000ms' }}
        >
          <a
            href="https://wa.me/918123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
          >
            Start Your Transformation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
