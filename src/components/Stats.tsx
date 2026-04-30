import { useScrollReveal, useCountUp } from '@/hooks/useScrollAnimations';
import { cn } from '@/lib/utils';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
}

const StatCounter = ({ value, suffix, label, isVisible, delay }: StatProps) => {
  const count = useCountUp(value, 2500, delay, isVisible);

  return (
    <div className="text-center px-6 md:px-10 py-6">
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 tabular-nums">
        {count}<span className="text-gold">{suffix}</span>
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
};

const Stats = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  const stats = [
    { value: 8, suffix: '+', label: 'Years Experience' },
    { value: 5000, suffix: '+', label: 'Vehicles Detailed' },
    { value: 4500, suffix: '+', label: 'Happy Clients' },
    { value: 100, suffix: '%', label: 'Satisfaction Rate' },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-12 transition-all duration-700 ease-premium",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <span className="micro-label mb-3 block">Why Choose Us</span>
          <h2 className="headline-lg">
            Trusted by <span className="text-gold-gradient">Thousands</span>
          </h2>
        </div>

        {/* Stats Row */}
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 border-y border-border/40 transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "border-border/40",
                // Right border for left column items
                index % 2 === 0 && "border-r",
                // Bottom border for top row items on mobile
                index < 2 && "border-b md:border-b-0",
                // Right border for all except last on desktop
                "md:border-r md:last:border-r-0"
              )}
            >
              <StatCounter 
                {...stat} 
                isVisible={isVisible} 
                delay={index * 200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
