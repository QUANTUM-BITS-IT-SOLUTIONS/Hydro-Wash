import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Droplets, 
  Sparkles, 
  Layers, 
  Sun, 
  Car, 
  Brush, 
  Gem, 
  SprayCan,
  Check,
  Clock,
  Phone,
  MessageCircle
} from 'lucide-react';
import { getAllServices } from '@/data/servicesData';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Icon mapping for service cards
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Droplets,
  Sparkles,
  Layers,
  Sun,
  Car,
  Brush,
  Gem,
  SprayCan,
};

const ServicesList = () => {
  const services = getAllServices();

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-background to-background" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[120px] -z-10 rounded-full" />
          
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
              <span className="micro-label mb-5 block animate-fade-in opacity-0 [animation-fill-mode:forwards]">Expert Automotive Care</span>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight text-balance animate-slide-up opacity-0 [animation-fill-mode:forwards] mx-auto lg:mx-0">
                Premium <span className="text-gold-gradient">Car Care</span>
                <br />Solutions
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-slide-up opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms] mx-auto lg:mx-0">
                Discover our comprehensive suite of automotive restoration and protection services, 
                tailored for those who demand nothing but perfection for their vehicle.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-slide-up opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
                <a
                  href="https://wa.me/918888899936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 shadow-gold/20 text-sm md:text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Free Quote
                </a>
                <a
                  href="tel:+918888899936"
                  className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 border border-gold/30 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
                >
                  <Phone className="w-5 h-5" />
                  Call Expert
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 carbon-bg opacity-30" />
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="micro-label mb-4 block">The HydroWash Standard</span>
                <h2 className="headline-lg mb-8">
                  Unrivaled <span className="text-gold-gradient">Quality</span> & Precision
                </h2>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                  We don't just wash cars; we restore and protect them. Our facility combines 
                  state-of-the-art technology with artisanal attention to detail, ensuring 
                  every vehicle leaves in showroom condition.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    "Master-certified detailing technicians",
                    "Premium eco-friendly chemistry",
                    "Precision-controlled environment",
                    "Transparent, multi-point inspection",
                    "Tailored maintenance programs",
                    "Concierge pickup & delivery"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { number: "15+", label: "Master Years" },
                  { number: "8k+", label: "Pristine Finishes" },
                  { number: "100%", label: "Satisfaction" },
                  { number: "24/7", label: "Client Support" }
                ].map((stat, index) => (
                  <div key={index} className="glass-card p-8 text-center hover-lift border-white/5">
                    <p className="text-4xl font-bold text-gold-gradient mb-2">{stat.number}</p>
                    <p className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 md:py-32">
          <div className="section-container">
            <div className="text-center mb-20">
              <span className="micro-label mb-4 block">Bespoke Solutions</span>
              <h2 className="headline-lg mb-6">
                Explore Our <span className="text-gold-gradient">Master Services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Precision-engineered treatments for every surface of your vehicle, 
                from ceramic shields to deep interior rejuvenation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = iconMap[service.benefits[0]?.icon] || Shield;
                
                return (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className={cn(
                      "group relative p-8 rounded-2xl border border-white/5 bg-card/40 backdrop-blur-sm",
                      "hover:border-gold/30 hover:bg-card/60 transition-all duration-500",
                      "flex flex-col h-full hover-lift"
                    )}
                  >
                    <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <div className="flex items-center justify-between pt-8 border-t border-white/10">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Starting Investment</p>
                        <p className="text-xl font-bold text-gold tracking-tight">{service.packages[0]?.price || 'Custom'}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                        Details
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Categories Summary */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="micro-label mb-3 block">Categories</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Service <span className="text-gold-gradient">Categories</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Protective Coatings",
                  services: ["Ceramic Coating", "Graphene Coating", "PPF"],
                  description: "Long-term protection solutions for your paint",
                  icon: Shield
                },
                {
                  title: "Detailing",
                  services: ["Interior Detailing", "Exterior Detailing", "Complete Package"],
                  description: "Deep cleaning and restoration services",
                  icon: Sparkles
                },
                {
                  title: "Specialized Care",
                  services: ["Headlight Restoration", "Underbody Coating"],
                  description: "Targeted solutions for specific areas",
                  icon: Gem
                },
                {
                  title: "Maintenance",
                  services: ["Premium Car Wash"],
                  description: "Regular care to maintain your vehicle",
                  icon: Droplets
                }
              ].map((category, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl border border-border/30 bg-background hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <ul className="space-y-1">
                    {category.services.map((s, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                        <Check className="w-3 h-3 text-gold" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Info */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="micro-label mb-3 block">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How to <span className="text-gold-gradient">Book</span>
              </h2>
              <p className="text-muted-foreground mb-12">
                We've made booking your service simple and convenient
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    step: "1",
                    title: "Choose Service",
                    description: "Browse our services and select the one that fits your needs"
                  },
                  {
                    step: "2",
                    title: "Book Appointment",
                    description: "Call us or book via WhatsApp at your convenience"
                  },
                  {
                    step: "3",
                    title: "Enjoy Results",
                    description: "Drop off your car and pick up a transformed vehicle"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                      <span className="text-gold font-bold">{item.step}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/918888899936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2 px-8 py-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book via WhatsApp
                </a>
                <a
                  href="tel:+918888899936"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-gold/30 text-gold font-medium hover:bg-gold/10 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call to Book
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="section-container">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/5" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.15),transparent_50%)]" />
              
              <div className="relative p-8 md:p-12 lg:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Not Sure What You Need?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Our experts can assess your vehicle and recommend the perfect services 
                  for your needs and budget. Get a free consultation today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/918888899936"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center gap-2 px-8 py-4"
                  >
                    <Clock className="w-5 h-5" />
                    Get Free Consultation
                  </a>
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

export default ServicesList;
