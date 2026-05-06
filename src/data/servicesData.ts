// Comprehensive service data for detailed pages
export interface ServicePackage {
  name: string;
  price: string;
  duration: string;
  features: string[];
  warranty: string;
  recommended?: boolean;
}

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface BeforeAfterImage {
  before: string;
  after: string;
  caption: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  whatIsIt: string;
  whyChoose: string[];
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
  specs: ServiceSpec[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  packages: ServicePackage[];
  faqs: ServiceFAQ[];
  relatedServices: string[];
  beforeAfterImages: BeforeAfterImage[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "paint-protection-film": {
    id: "paint-protection-film",
    title: "Paint Protection Film (PPF)",
    subtitle: "The Ultimate Invisible Shield for Your Vehicle",
    shortDescription: "Self-healing urethane film that protects your paint from stone chips, scratches, and environmental damage.",
    fullDescription: "Paint Protection Film (PPF) is a transparent, ultra-durable urethane film applied to your vehicle's painted surfaces. This advanced protective layer acts as an invisible shield against road debris, stone chips, bug splatter, bird droppings, and minor abrasions. Our PPF features self-healing technology that automatically repairs minor scratches when exposed to heat, ensuring your vehicle maintains a flawless finish for years.",
    whatIsIt: "PPF is a thermoplastic urethane film originally developed for military helicopter blades. Today, it's the gold standard in automotive paint protection. The film is precisely cut using computer-designed patterns and applied to high-impact areas or entire vehicle surfaces. Its transparent nature ensures your paint color and gloss remain unchanged while providing superior protection.",
    whyChoose: [
      "Self-healing technology eliminates swirl marks and light scratches automatically",
      "10-year manufacturer warranty on premium films",
      "Computer-precision cutting ensures perfect fit for every panel",
      "Prevents costly paint repairs and maintains resale value",
      "Hydrophobic top layer repels water, dirt, and contaminants"
    ],
    benefits: [
      { icon: "Shield", title: "Impact Protection", description: "Absorbs impacts from stones, gravel, and road debris preventing paint chips" },
      { icon: "Zap", title: "Self-Healing", description: "Heat-activated healing technology repairs minor scratches automatically" },
      { icon: "Sun", title: "UV Protection", description: "Prevents paint fading and oxidation from harmful sun exposure" },
      { icon: "Droplets", title: "Hydrophobic", description: "Water and contaminants bead up and roll off easily" },
      { icon: "Sparkles", title: "Crystal Clear", description: "Invisible protection that doesn't alter your paint's appearance" },
      { icon: "Award", title: "Warranty Backed", description: "10-year warranty against yellowing, cracking, and peeling" }
    ],
    specs: [
      { label: "Material", value: "Thermoplastic Polyurethane (TPU)" },
      { label: "Thickness", value: "200-300 microns (8-12 mil)" },
      { label: "Warranty", value: "Up to 10 Years" },
      { label: "Self-Healing", value: "Heat Activated (Sun/Heat Gun)" },
      { label: "UV Resistance", value: "99% UV Block" },
      { label: "Adhesive", value: "Pressure-Sensitive Acrylic" },
      { label: "Finish Options", value: "Gloss, Matte, or Color" },
      { label: "Installation Time", value: "2-5 Days (Full Car)" }
    ],
    process: [
      { step: 1, title: "Paint Assessment", description: "Thorough inspection of paint condition to identify any pre-existing damage that needs correction" },
      { step: 2, title: "Paint Correction", description: "Multi-stage paint correction to ensure perfect surface before film application" },
      { step: 3, title: "Surface Preparation", description: "Deep cleaning with alcohol solution to remove any oils, waxes, or contaminants" },
      { step: 4, title: "Precision Cutting", description: "Computer-designed patterns cut specifically for your vehicle's make and model" },
      { step: 5, title: "Application", description: "Careful positioning and squeegee application to eliminate bubbles and ensure adhesion" },
      { step: 6, title: "Edge Sealing", description: "All edges are properly sealed to prevent lifting and ensure long-term durability" },
      { step: 7, title: "Curing & Inspection", description: "24-hour curing period followed by comprehensive quality inspection" }
    ],
    packages: [
      {
        name: "Partial Front",
        price: "₹19,999",
        duration: "1 Day",
        features: ["Partial hood coverage", "Front bumper", "Side mirrors", "Headlights"],
        warranty: "5 Years"
      },
      {
        name: "Full Front",
        price: "₹29,999",
        duration: "1-2 Days",
        features: ["Full hood coverage", "Full front bumper", "Front fenders", "Side mirrors", "Headlights"],
        warranty: "7 Years",
        recommended: true
      },
      {
        name: "Full Vehicle",
        price: "₹79,999",
        duration: "3-5 Days",
        features: ["All painted panels", "Full hood & bumpers", "All fenders", "Doors & pillars", "Roof option available"],
        warranty: "10 Years"
      }
    ],
    faqs: [
      { question: "Will PPF change the appearance of my car?", answer: "No, high-quality PPF is completely transparent and doesn't alter your paint's color or gloss. Matte PPF options are available if you want to change the finish." },
      { question: "How long does PPF last?", answer: "With proper care, premium PPF lasts 5-10 years depending on the grade and warranty. It doesn't yellow, crack, or peel when professionally installed." },
      { question: "Can PPF be removed?", answer: "Yes, PPF can be safely removed without damaging the paint underneath. In fact, the paint beneath often looks brand new because it was protected." },
      { question: "Does PPF require special maintenance?", answer: "No special maintenance needed. Simply wash normally and avoid abrasive polishes. The film is resistant to most chemicals and environmental contaminants." },
      { question: "Will the self-healing work in all weather?", answer: "Self-healing activates at around 30-40°C. Direct sunlight, hot water, or a heat gun can trigger the healing process for any minor scratches." }
    ],
    relatedServices: ["ceramic-coating", "graphene-coating", "exterior-detailing"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "ceramic-coating": {
    id: "ceramic-coating",
    title: "Crystal Shield Ceramic Coating",
    subtitle: "Nano-Technology Protection with Showroom Shine",
    shortDescription: "Professional SiO2-based nano-coating providing unmatched gloss, hydrophobicity, and 5+ year protection.",
    fullDescription: "Our Crystal Shield Ceramic Coating is a professional-grade nano-ceramic treatment that chemically bonds with your vehicle's paint, creating a permanent hydrophobic layer. Formulated with 80%+ high-grade Silicon Dioxide (SiO2), this coating delivers exceptional gloss, extreme water beading, and superior protection against UV rays, oxidation, chemical stains, and environmental contaminants for 5+ years.",
    whatIsIt: "Ceramic coating is a liquid polymer that contains nano-ceramic particles suspended in a clear resin. When applied to paint, these particles bond at the molecular level to create a glass-like protective layer. Unlike waxes or sealants that sit on top, ceramic coatings become one with your paint, offering years of protection rather than months.",
    whyChoose: [
      "Contains 80%+ SiO2 for maximum hardness and durability",
      "Developed specifically for harsh Indian climate conditions",
      "SGS certified for 9H pencil hardness",
      "Reduces maintenance time by 70% with hydrophobic properties",
      "Prevents 60% of hairline scratches from washing"
    ],
    benefits: [
      { icon: "Diamond", title: "9H Hardness", description: "Extreme scratch resistance from the highest ceramic hardness rating" },
      { icon: "Droplets", title: "Hydrophobic", description: "Water beads and rolls off, taking dirt with it - easier cleaning" },
      { icon: "Sun", title: "UV Protection", description: "Prevents oxidation and fading from harsh sun exposure" },
      { icon: "Sparkles", title: "Mirror Finish", description: "Deeper gloss and reflection than new-car finish" },
      { icon: "Shield", title: "Chemical Resistant", description: "Protects against bird droppings, tree sap, and acid rain" },
      { icon: "Clock", title: "Long Lasting", description: "5+ years of protection vs. 3 months for wax" }
    ],
    specs: [
      { label: "SiO2 Content", value: "80%+ High-Grade" },
      { label: "Hardness Rating", value: "9H Pencil Hardness" },
      { label: "Contact Angle", value: "110°+ (Hydrophobic)" },
      { label: "Durability", value: "5+ Years" },
      { label: "Chemical Resistance", value: "pH 2-13 Resistant" },
      { label: "UV Resistance", value: "100% UV Block" },
      { label: "Temperature Stable", value: "-40°C to +400°C" },
      { label: "Certification", value: "SGS Tested" }
    ],
    process: [
      { step: 1, title: "Deep Cleanse", description: "Multi-stage wash and chemical decontamination to remove all surface contaminants" },
      { step: 2, title: "Clay Treatment", description: "Clay bar treatment to remove embedded particles and create a smooth surface" },
      { step: 3, title: "Paint Correction", description: "Machine polishing to remove swirl marks and light scratches (essential step)" },
      { step: 4, title: "IPA Wipe Down", description: "Isopropyl alcohol wipe to remove polishing oils and ensure proper bonding" },
      { step: 5, title: "Coating Application", description: "Precise application of ceramic coating in controlled temperature/humidity" },
      { step: 6, title: "Leveling", description: "Careful leveling to ensure even coverage and remove high spots" },
      { step: 7, title: "Curing", description: "24-48 hour curing period for full chemical bonding and hardness development" }
    ],
    packages: [
      {
        name: "Lite 9H",
        price: "₹8,999",
        duration: "4-6 Hours",
        features: ["Entry-level protection", "1-layer application", "1-year durability", "Basic gloss enhancement"],
        warranty: "1 Year"
      },
      {
        name: "Trinity 9H",
        price: "₹12,999",
        duration: "6-8 Hours",
        features: ["3-layer system", "Paint correction included", "5-year durability", "Superior hydrophobicity"],
        warranty: "5 Years",
        recommended: true
      },
      {
        name: "Pentagon 10H",
        price: "₹18,999",
        duration: "8-10 Hours",
        features: ["5-layer system", "Advanced paint correction", "7-year durability", "Maximum hardness"],
        warranty: "7 Years"
      }
    ],
    faqs: [
      { question: "Is ceramic coating better than wax?", answer: "Yes, ceramic coating provides 5+ years of protection vs. 2-3 months for wax. It bonds permanently to paint and offers superior protection against chemicals, UV, and scratches." },
      { question: "Will ceramic coating prevent scratches?", answer: "Ceramic coating reduces 60% of hairline scratches from washing. However, it won't prevent deep scratches from keys or impacts. For maximum scratch protection, combine with PPF." },
      { question: "Can I wash my car normally after coating?", answer: "Yes, but wait 7 days after application. Then simply wash with pH-neutral shampoo. The hydrophobic properties make washing much easier - dirt slides right off." },
      { question: "Does ceramic coating need maintenance?", answer: "Minimal maintenance needed. Annual inspection and optional top-up spray every 6-12 months keeps the coating performing at its best." },
      { question: "Can ceramic coating be applied over PPF?", answer: "Yes, and it's highly recommended. Ceramic coating on PPF provides the ultimate combination of impact protection and hydrophobic, easy-clean properties." }
    ],
    relatedServices: ["paint-protection-film", "graphene-coating", "paint-correction"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "graphene-coating": {
    id: "graphene-coating",
    title: "G10 Impact Graphene Coating",
    subtitle: "Nobel Prize-Winning Material Meets Automotive Protection",
    shortDescription: "Next-generation graphene-infused coating with superior heat dissipation, reduced water spotting, and 7+ year durability.",
    fullDescription: "G10 Impact represents the cutting edge of automotive protection technology. Utilizing graphene, a Nobel Prize-winning wonder material 200x stronger than steel, this coating delivers unmatched slickness, superior heat dissipation, and dramatically reduced water spotting compared to traditional ceramic coatings. The graphene structure creates an impenetrable barrier with 7+ years of protection.",
    whatIsIt: "Graphene is a single layer of carbon atoms arranged in a hexagonal lattice - the thinnest, strongest material known to science. When infused into our coating formula, graphene's unique properties create a denser, more durable protective layer that outperforms traditional SiO2 coatings in every aspect." ,
    whyChoose: [
      "Graphene's thermal conductivity reduces heat-induced water spotting by 80%",
      "200x stronger than steel yet incredibly flexible",
      "Anti-static properties repel dust and airborne contaminants",
      "Gloss enhancement exceeds all other coating technologies",
      "Extended durability - 7+ years of protection"
    ],
    benefits: [
      { icon: "Zap", title: "Heat Dissipation", description: "Superior thermal conductivity prevents water spot etching" },
      { icon: "Droplets", title: "Less Water Spotting", description: "80% reduction in water spotting compared to ceramic" },
      { icon: "Sparkles", title: "Extreme Slickness", description: "Lowest surface friction - nothing sticks to graphene" },
      { icon: "Wind", title: "Anti-Static", description: "Repels dust, pollen, and airborne particles" },
      { icon: "Gem", title: "Deeper Gloss", description: "Richer, wetter-looking shine than any other coating" },
      { icon: "Shield", title: "Maximum Durability", description: "7+ years of protection with minimal degradation" }
    ],
    specs: [
      { label: "Active Material", value: "Graphene Oxide + SiO2" },
      { label: "Thermal Conductivity", value: "5000+ W/mK" },
      { label: "Water Spotting Reduction", value: "80% vs Ceramic" },
      { label: "Hardness Rating", value: "10H Pencil Hardness" },
      { label: "Durability", value: "7+ Years" },
      { label: "Contact Angle", value: "120°+ (Ultra-Hydrophobic)" },
      { label: "Layer Thickness", value: "2-3 microns" },
      { label: "Cure Time", value: "12-24 Hours" }
    ],
    process: [
      { step: 1, title: "Surface Analysis", description: "Advanced paint inspection to assess condition and plan correction strategy" },
      { step: 2, title: "Intensive Correction", description: "Multi-stage machine polishing to achieve paint perfection" },
      { step: 3, title: "Graphene Prep", description: "Specialized surface preparation for optimal graphene bonding" },
      { step: 4, title: "Base Layer", description: "Application of graphene-infused base coat for foundation" },
      { step: 5, title: "Top Coat", description: "Final graphene layer for maximum gloss and protection" },
      { step: 6, title: "Infrared Curing", description: "IR lamp curing to accelerate bonding and hardness development" },
      { step: 7, title: "Quality Verification", description: "Hydrophobic testing and gloss meter readings for quality" }
    ],
    packages: [
      {
        name: "G10 Standard",
        price: "₹18,999",
        duration: "8 Hours",
        features: ["2-layer graphene system", "Paint correction", "5-year durability"],
        warranty: "5 Years"
      },
      {
        name: "G10 Pro",
        price: "₹24,999",
        duration: "10 Hours",
        features: ["3-layer graphene system", "Advanced correction", "7-year durability", "Maintenance kit included"],
        warranty: "7 Years",
        recommended: true
      },
      {
        name: "G10 Ultimate",
        price: "₹34,999",
        duration: "2 Days",
        features: ["5-layer system with base/primer", "Concours-level correction", "10-year durability", "Annual maintenance included"],
        warranty: "10 Years"
      }
    ],
    faqs: [
      { question: "How is graphene different from ceramic coating?", answer: "Graphene has superior thermal conductivity (prevents water spots), anti-static properties (less dust), and is stronger yet more flexible. It provides better all-around performance with longer durability." },
      { question: "Does graphene coating look different from ceramic?", answer: "Yes, graphene typically provides a deeper, wetter-looking gloss that many describe as 'liquid glass.' The surface is also noticeably slicker to the touch." },
      { question: "Can I apply graphene over ceramic coating?", answer: "It's not recommended. For best results, apply graphene to properly corrected paint. If you have ceramic, it should be removed or you can wait for it to degrade before applying graphene." },
      { question: "Is graphene coating worth the extra cost?", answer: "For vehicles exposed to harsh sun or parked outdoors, absolutely. The heat dissipation and water spot resistance make maintenance significantly easier. The extended durability also provides better long-term value." }
    ],
    relatedServices: ["ceramic-coating", "paint-protection-film", "exterior-detailing"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "premium-detailing": {
    id: "premium-detailing",
    title: "Premium Auto Detailing Studio",
    subtitle: "State-of-the-Art Detailing Facility",
    shortDescription: "Our state-of-the-art detailing studio combines advanced equipment, premium products, and master craftsmanship to deliver transformational results.",
    fullDescription: "Experience automotive care at its finest in our Premium Auto Detailing Studio. Our climate-controlled facility houses the latest in detailing technology, from IR curing lamps for ceramic coatings to commercial-grade steam cleaners for interior restoration. Our master-certified technicians treat every vehicle as a masterpiece, delivering concours-level results that exceed expectations.",
    whatIsIt: "Our Premium Auto Detailing Studio is more than just a service - it's a complete facility designed for perfection. The climate-controlled environment ensures optimal conditions for coating applications. Professional-grade equipment including paint thickness gauges, dual-action polishers, and hot water extractors enable our technicians to achieve results impossible in standard conditions. This is where excellence meets execution.",
    whyChoose: [
      "Climate-controlled environment for perfect coating application",
      "IR curing lamps accelerate ceramic coating bonding",
      "Commercial-grade steam cleaners for deep sanitization",
      "Paint thickness measurement for safe correction planning",
      "Master-certified technicians with years of experience"
    ],
    benefits: [
      { icon: "Gem", title: "Premium Facility", description: "Climate-controlled studio designed for excellence" },
      { icon: "Award", title: "Master Technicians", description: "Certified experts with years of experience" },
      { icon: "Shield", title: "Advanced Equipment", description: "Latest technology for superior results" },
      { icon: "Sparkles", title: "Concours Results", description: "Showroom+ finish on every vehicle" },
      { icon: "Zap", title: "IR Curing", description: "Infrared lamps for perfect coating cure" },
      { icon: "Droplets", title: "Steam Cleaning", description: "Commercial-grade sanitization equipment" }
    ],
    specs: [
      { label: "Facility Type", value: "Climate-Controlled" },
      { label: "Temperature Control", value: "18-22°C Year Round" },
      { label: "Dust Control", value: "HEPA Filtration" },
      { label: "Equipment", value: "Professional-Grade" },
      { label: "Technicians", value: "Master Certified" },
      { label: "Services Offered", value: "Complete Range" },
      { label: "Quality Standard", value: "Concours Level" },
      { label: "Booking", value: "By Appointment" }
    ],
    process: [
      { step: 1, title: "Vehicle Inspection", description: "Comprehensive assessment to create customized detailing plan" },
      { step: 2, title: "Environment Prep", description: "Climate control and workspace preparation for optimal conditions" },
      { step: 3, title: "Advanced Cleaning", description: "Commercial-grade equipment for deep cleaning and decontamination" },
      { step: 4, title: "Precision Correction", description: "Machine polishing with paint thickness monitoring" },
      { step: 5, title: "Protection Application", description: "Ceramic, graphene, or PPF application in controlled environment" },
      { step: 6, title: "IR Curing", description: "Infrared curing for accelerated and complete coating bonding" },
      { step: 7, title: "Quality Control", description: "Multi-point inspection under various lighting conditions" }
    ],
    packages: [
      {
        name: "Studio Access",
        price: "Custom Quote",
        duration: "Per Service",
        features: ["Any detailing service", "Climate-controlled environment", "Professional equipment", "Master technician"],
        warranty: "Per Service Terms"
      },
      {
        name: "Signature Detail",
        price: "₹24,999",
        duration: "2 Days",
        features: ["Complete interior detail", "Full exterior correction", "1-year ceramic coating", "Engine bay detail"],
        warranty: "1 Year Coating",
        recommended: true
      },
      {
        name: "Ultimate Protection",
        price: "₹49,999",
        duration: "3-4 Days",
        features: ["Everything in Signature", "PPF on high-impact areas", "3-year graphene coating", "Annual maintenance included"],
        warranty: "3 Year Protection"
      }
    ],
    faqs: [
      { question: "Why is a detailing studio better than mobile service?", answer: "A controlled studio environment ensures optimal temperature and dust-free conditions for coating applications. Professional equipment like IR lamps and commercial extractors deliver superior results impossible in field conditions." },
      { question: "Do I need to book in advance?", answer: "Yes, studio time is by appointment only to ensure proper preparation and dedicated attention to your vehicle. Bookings can be made via phone or WhatsApp." },
      { question: "Can I wait while my car is serviced?", answer: "We have a comfortable waiting area with WiFi. However, for full detailing services, we recommend dropping off your vehicle as the process takes several hours to multiple days depending on the service." },
      { question: "What makes your studio 'premium'?", answer: "Our studio features climate control, HEPA air filtration, IR curing lamps, and commercial-grade equipment. Combined with master-certified technicians, we deliver results that exceed standard detailing services." }
    ],
    relatedServices: ["ceramic-coating", "graphene-coating", "complete-detailing"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "interior-detailing": {
    id: "interior-detailing",
    title: "Intensive Interior Detailing",
    subtitle: "Deep Clean & Restoration for Your Vehicle's Cabin",
    shortDescription: "Complete interior rejuvenation using steam cleaning, extraction shampooing, and leather conditioning for a like-new cabin.",
    fullDescription: "Our Intensive Interior Detailing service is a comprehensive deep-cleaning and restoration process that transforms your vehicle's cabin to better-than-new condition. Using commercial-grade steam cleaners, hot water extraction machines, and premium leather treatments, we eliminate odors, stains, allergens, and bacteria while rejuvenating every surface. From headliner to floor mats, no area is overlooked.",
    whatIsIt: "Interior detailing goes far beyond a basic vacuum and wipe-down. It's a systematic restoration of all cabin surfaces including seats, carpets, headliner, dashboard, door panels, and trim. We use specialized equipment like steam cleaners that sanitize without chemicals, extraction machines that pull dirt from deep within fabrics, and professional-grade conditioners that restore leather and plastics.",
    whyChoose: [
      "Steam cleaning kills 99.9% of bacteria without harsh chemicals",
      "Hot water extraction removes years of embedded dirt from fabrics",
      "Ozone treatment permanently eliminates odors, not masks them",
      "Leather conditioning prevents cracking and extends life",
      "All products are pH-neutral and safe for all interior materials"
    ],
    benefits: [
      { icon: "Wind", title: "Odor Elimination", description: "Ozone treatment destroys odor molecules at the source" },
      { icon: "Shield", title: "Sanitized Surfaces", description: "Steam cleaning kills bacteria, viruses, and allergens" },
      { icon: "Sparkles", title: "Restored Appearance", description: "Leather and plastics look and feel like new" },
      { icon: "Heart", title: "Healthier Air", description: "Removes allergens and improves cabin air quality" },
      { icon: "Wallet", title: "Value Retention", description: "Well-maintained interior retains higher resale value" }
    ],
    specs: [
      { label: "Steam Temperature", value: "150-180°C" },
      { label: "Extraction Pressure", value: "100 PSI Hot Water" },
      { label: "Ozone Treatment", value: "30-60 Minutes" },
      { label: "Products Used", value: "pH-Neutral, VOC-Free" },
      { label: "Coverage", value: "All Interior Surfaces" },
      { label: "Duration", value: "4-8 Hours" },
      { label: "Drying Time", value: "2-4 Hours" },
      { label: "Vehicles per Day", value: "2-3 (For Quality)" }
    ],
    process: [
      { step: 1, title: "Pre-Inspection", description: "Document existing conditions and identify problem areas requiring special attention" },
      { step: 2, title: "Deep Vacuum", description: "Thorough vacuuming including under seats, crevices, and trunk" },
      { step: 3, title: "Steam Cleaning", description: "High-temp steam sanitization of all hard surfaces, vents, and tight spaces" },
      { step: 4, title: "Extraction Shampoo", description: "Hot water extraction for carpets, floor mats, and fabric seats" },
      { step: 5, title: "Leather Treatment", description: "Cleaning, conditioning, and protection of all leather surfaces" },
      { step: 6, title: "Trim & Dashboard", description: "Cleaning and UV protection for all plastic and vinyl surfaces" },
      { step: 7, title: "Glass & Mirrors", description: "Streak-free cleaning of all interior glass and mirrors" },
      { step: 8, title: "Ozone Treatment", description: "Final ozone generator treatment to eliminate any remaining odors" }
    ],
    packages: [
      {
        name: "Essential Interior",
        price: "₹2,499",
        duration: "3-4 Hours",
        features: ["Deep vacuum", "Dashboard & trim clean", "Glass cleaning", "Ozone treatment"],
        warranty: "Satisfaction Guaranteed"
      },
      {
        name: "Premium Interior",
        price: "₹3,999",
        duration: "5-6 Hours",
        features: ["Everything in Essential", "Steam sanitization", "Carpet extraction cleaning", "Leather conditioning"],
        warranty: "Satisfaction Guaranteed",
        recommended: true
      },
      {
        name: "Luxury Interior",
        price: "₹5,999",
        duration: "7-8 Hours",
        features: ["Everything in Premium", "Headliner cleaning", "Seat removal for thorough cleaning", "Leather protection coating", "Engine bay cleaning"],
        warranty: "Satisfaction Guaranteed"
      }
    ],
    faqs: [
      { question: "How long until I can use my car after interior detailing?", answer: "Drying time is 2-4 hours depending on weather. We recommend keeping windows down for 30 minutes after to allow any remaining moisture to escape." },
      { question: "Will interior detailing remove all stains?", answer: "We can remove most fresh and many old stains, but some set-in stains (especially those that have been heat-set or chemically altered) may be permanent. We'll always do our best and set realistic expectations." },
      { question: "Is ozone treatment safe?", answer: "Yes, ozone treatment is completely safe. We run the generator while the car is unoccupied, then allow 30 minutes of ventilation before return. It leaves no residue." },
      { question: "How often should I get interior detailing?", answer: "For daily drivers, every 6 months maintains a like-new condition. For weekend cars, annually is sufficient. More frequent cleaning prevents permanent staining." }
    ],
    relatedServices: ["exterior-detailing", "complete-detailing", "headlight-restoration"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "exterior-detailing": {
    id: "exterior-detailing",
    title: "Exterior Car Detailing",
    subtitle: "Complete Paint Restoration & Surface Rejuvenation",
    shortDescription: "Multi-stage paint correction, clay bar decontamination, and protective sealant to restore showroom shine.",
    fullDescription: "Our Exterior Detailing service is a comprehensive paint restoration process that brings your vehicle's finish back to showroom condition. Through clay bar decontamination, multi-stage machine polishing, and premium sealant application, we remove embedded contaminants, eliminate swirl marks, and restore clarity, depth, and gloss to every painted surface. This is the foundation of all protective coating applications.",
    whatIsIt: "Exterior detailing is a systematic restoration of your vehicle's outer surfaces. Unlike a car wash that only cleans the surface, detailing removes bonded contaminants (iron, tar, tree sap), corrects paint imperfections (swirls, holograms, light scratches), and protects the finish. It's the difference between 'clean' and 'perfect.'",
    whyChoose: [
      "Clay bar treatment removes contaminants washing can't touch",
      "Machine polishing restores gloss impossible to achieve by hand",
      "Multi-stage process addresses different levels of paint damage",
      "Premium sealants provide months of protection",
      "Essential preparation step before ceramic coating or PPF"
    ],
    benefits: [
      { icon: "Sparkles", title: "Paint Correction", description: "Removes swirl marks and restores mirror-like finish" },
      { icon: "Layers", title: "Decontamination", description: "Clay bar removes bonded contaminants for smooth paint" },
      { icon: "Sun", title: "UV Protection", description: "Sealant shields paint from sun damage" },
      { icon: "Droplets", title: "Hydrophobic", description: "Water beading makes future washes easier" },
      { icon: "Gem", title: "Enhanced Gloss", description: "Deeper color and reflective clarity" },
      { icon: "Shield", title: "Protection", description: "Seals paint against environmental damage" }
    ],
    specs: [
      { label: "Clay Grade", value: "Fine/Medium/Heavy" },
      { label: "Polish Stages", value: "1-3 Stage Options" },
      { label: "Pad Options", value: "Foam/Wool/Microfiber" },
      { label: "Sealant Duration", value: "3-6 Months" },
      { label: "Paint Thickness Check", value: "Included" },
      { label: "Correction Levels", value: "75-95% Defect Removal" },
      { label: "Duration", value: "4-8 Hours" },
      { label: "Products", value: "Premium Professional Grade" }
    ],
    process: [
      { step: 1, title: "Foam Pre-Wash", description: "Thick foam application to soften and lift loose dirt" },
      { step: 2, title: "Two-Bucket Wash", description: "Hand wash using premium shampoo and proper technique" },
      { step: 3, title: "Chemical Decon", description: "Iron remover and tar remover for bonded contaminants" },
      { step: 4, title: "Clay Bar", description: "Clay treatment to remove remaining embedded particles" },
      { step: 5, title: "Paint Thickness Check", description: "Measure paint depth to ensure safe correction" },
      { step: 6, title: "Machine Polishing", description: "Multi-stage correction to remove swirls and enhance gloss" },
      { step: 7, title: "Sealant Application", description: "Premium sealant for protection and hydrophobic properties" },
      { step: 8, title: "Final Inspection", description: "LED inspection to ensure flawless finish" }
    ],
    packages: [
      {
        name: "Essential Exterior",
        price: "₹2,999",
        duration: "4 Hours",
        features: ["Deep wash & clay", "Single-stage polish", "Spray sealant", "Wheel detailing"],
        warranty: "3 Month Sealant"
      },
      {
        name: "Premium Exterior",
        price: "₹4,999",
        duration: "6-8 Hours",
        features: ["Everything in Essential", "Two-stage correction", "Premium paste sealant", "Trim restoration"],
        warranty: "6 Month Sealant",
        recommended: true
      },
      {
        name: "Concours Exterior",
        price: "₹7,999",
        duration: "1-2 Days",
        features: ["Everything in Premium", "Three-stage correction", "Coating prep finish", "Engine bay detail"],
        warranty: "Ready for Coating"
      }
    ],
    faqs: [
      { question: "Will paint correction remove all scratches?", answer: "Paint correction removes light swirls, holograms, and fine scratches. Deep scratches that reach the primer or metal may be minimized but not completely removed." },
      { question: "Is clay bar safe for my paint?", answer: "Yes, when done correctly with proper lubrication, clay bar is completely safe. It's essential for removing bonded contaminants that washing can't remove." },
      { question: "How long does the protection last?", answer: "Our sealants provide 3-6 months of protection depending on the package and how the vehicle is stored/maintained. For longer protection, consider ceramic coating." },
      { question: "Can I wash my car after exterior detailing?", answer: "Wait 24-48 hours for the sealant to fully cure. Then use the two-bucket method and pH-neutral shampoo to maintain the finish." }
    ],
    relatedServices: ["interior-detailing", "ceramic-coating", "complete-detailing"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "headlight-restoration": {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    subtitle: "Crystal Clear Visibility & Like-New Appearance",
    shortDescription: "Professional restoration of oxidized, yellowed headlights using wet-sanding, polishing, and UV-resistant sealing.",
    fullDescription: "Our Headlight Restoration service transforms foggy, yellowed, or oxidized headlights back to crystal-clear condition. Using professional wet-sanding techniques, machine polishing, and UV-resistant sealing, we remove years of sun damage and restore nighttime visibility. This service improves safety and appearance while avoiding the high cost of headlight replacement.",
    whatIsIt: "Headlight lenses are made of polycarbonate plastic with a UV-protective clear coat. Over time, sun exposure breaks down this coating causing oxidation, yellowing, and hazing. Our restoration process removes the damaged layer and applies a new UV-resistant sealant, restoring clarity and protecting against future damage.",
    whyChoose: [
      "Restores up to 90% of original light output for safer night driving",
      "Saves thousands vs. headlight replacement cost",
      "UV-resistant coating prevents future yellowing",
      "Improves vehicle appearance dramatically",
      "Takes only 1-2 hours vs. days for new headlight installation"
    ],
    benefits: [
      { icon: "Sun", title: "UV Protection", description: "New sealant blocks harmful UV rays" },
      { icon: "Eye", title: "Better Visibility", description: "Restores light output for safer driving" },
      { icon: "Sparkles", title: "Like-New Look", description: "Transforms appearance of aged headlights" },
      { icon: "Wallet", title: "Cost Savings", description: "Fraction of replacement cost" },
      { icon: "Shield", title: "Long Lasting", description: "UV coating protects for 2+ years" },
      { icon: "Clock", title: "Quick Service", description: "1-2 hour transformation" }
    ],
    specs: [
      { label: "Grit Sequence", value: "400-800-1500-3000" },
      { label: "Polish Type", value: "Plastic-Specific Compound" },
      { label: "UV Coating", value: "2-Part Clearcoat" },
      { label: "Light Restoration", value: "Up to 90%" },
      { label: "Protection Duration", value: "2+ Years" },
      { label: "Taillights", value: "Also Available" },
      { label: "Duration", value: "1-2 Hours" },
      { label: "Warranty", value: "1 Year on Coating" }
    ],
    process: [
      { step: 1, title: "Masking", description: "Careful masking of surrounding paint and trim to protect from sanding" },
      { step: 2, title: "Sanding", description: "Progressive wet-sanding (400-3000 grit) to remove oxidation layer" },
      { step: 3, title: "Compounding", description: "Machine polishing with plastic-specific compound to remove sanding marks" },
      { step: 4, title: "Fine Polish", description: "Final polish stage to achieve crystal clarity" },
      { step: 5, title: "Cleaning", description: "Thorough cleaning to remove all residue" },
      { step: 6, title: "UV Coating", description: "Application of 2-part UV-resistant clearcoat" },
      { step: 7, title: "Curing", description: "Proper curing time for durable protection" }
    ],
    packages: [
      {
        name: "Headlight Pair",
        price: "₹1,499",
        duration: "1-1.5 Hours",
        features: ["Both headlights", "Wet-sanding", "Polishing", "UV coating"],
        warranty: "1 Year"
      },
      {
        name: "Full Front",
        price: "₹2,499",
        duration: "2 Hours",
        features: ["Headlights", "Fog lights", "Both included", "Complete front lighting restoration"],
        warranty: "1 Year",
        recommended: true
      },
      {
        name: "Complete Lighting",
        price: "₹3,999",
        duration: "3 Hours",
        features: ["All front lights", "Taillights", "All exterior lenses", "Complete vehicle lighting"],
        warranty: "1 Year"
      }
    ],
    faqs: [
      { question: "How long does headlight restoration last?", answer: "With our professional UV coating, results last 2-4 years depending on sun exposure. We include a 1-year warranty on the coating." },
      { question: "Can all headlights be restored?", answer: "Most headlights can be restored. Severely cracked, internally damaged, or previously poorly-restored headlights may need replacement." },
      { question: "Is it better than DIY kits?", answer: "Absolutely. DIY kits use low-quality sealants that last only months. Our professional UV coating and proper wet-sanding technique delivers lasting results." },
      { question: "Will it damage my paint?", answer: "No, we carefully mask all surrounding areas. Our wet-sanding technique and professional products are safe for your vehicle." }
    ],
    relatedServices: ["exterior-detailing", "ceramic-coating", "ppf"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "underbody-coating": {
    id: "underbody-coating",
    title: "Underbody Coating",
    subtitle: "Complete Rust & Corrosion Protection",
    shortDescription: "Rubberized protective coating for undercarriage preventing rust, corrosion, and stone chip damage.",
    fullDescription: "Our Underbody Coating service provides comprehensive protection for your vehicle's most vulnerable area. A thick, rubberized coating is applied to the entire undercarriage, creating a barrier against moisture, salt, road debris, and corrosion. Essential for coastal areas and harsh climates, this service extends your vehicle's structural life and reduces road noise.",
    whatIsIt: "Underbody coating is a thick, rubberized protective layer applied to the vehicle's chassis, wheel wells, and undercarriage components. It seals out moisture, prevents rust formation, dampens road noise, and protects against stone chips. The coating remains flexible over time, expanding and contracting with temperature changes without cracking.",
    whyChoose: [
      "Prevents rust and corrosion from road salt and moisture",
      "Sound-dampening properties reduce road noise",
      "Essential protection for coastal and snowy regions",
      "Maintains structural integrity and resale value",
      "5-year warranty on coating durability"
    ],
    benefits: [
      { icon: "Shield", title: "Rust Prevention", description: "Seals metal from moisture and salt exposure" },
      { icon: "VolumeX", title: "Noise Reduction", description: "Sound-dampening properties for quieter cabin" },
      { icon: "Gem", title: "Stone Protection", description: "Thick rubberized layer absorbs impacts" },
      { icon: "Droplets", title: "Waterproof", description: "Seals electrical connections and components" },
      { icon: "Clock", title: "Long Lasting", description: "5+ years of durable protection" },
      { icon: "Award", title: "Warranty Backed", description: "5-year protection guarantee" }
    ],
    specs: [
      { label: "Material", value: "Rubberized Bitumen/Polymer" },
      { label: "Thickness", value: "1-2mm Applied" },
      { label: "Coverage", value: "Full Undercarriage" },
      { label: "Drying Time", value: "24 Hours" },
      { label: "Cure Time", value: "72 Hours" },
      { label: "Durability", value: "5+ Years" },
      { label: "Temperature Range", value: "-30°C to +80°C" },
      { label: "Sound Reduction", value: "Up to 40%" }
    ],
    process: [
      { step: 1, title: "Lift & Inspect", description: "Vehicle lifted on hoist for complete undercarriage access and inspection" },
      { step: 2, title: "Deep Clean", description: "High-pressure washing to remove dirt, grease, and loose rust" },
      { step: 3, title: "Rust Treatment", description: "Existing rust spots treated with converter before coating" },
      { step: 4, title: "Drying", description: "Complete drying to ensure coating adhesion" },
      { step: 5, title: "Masking", description: "Protecting exhaust, brake components, and moving parts" },
      { step: 6, title: "Coating Application", description: "Spray application of rubberized coating to all underbody areas" },
      { step: 7, title: "Curing", description: "24-72 hour curing period for full protection development" }
    ],
    packages: [
      {
        name: "Standard",
        price: "₹3,999",
        duration: "4 Hours",
        features: ["Chassis coating", "Wheel wells", "3-year warranty"],
        warranty: "3 Years"
      },
      {
        name: "Premium",
        price: "₹4,999",
        duration: "5 Hours",
        features: ["Full undercarriage", "Door cavities", "Fender areas", "5-year warranty"],
        warranty: "5 Years",
        recommended: true
      },
      {
        name: "Ultimate",
        price: "₹6,999",
        duration: "6 Hours",
        features: ["Everything in Premium", "Rust converter treatment", "Cavity wax injection", "7-year warranty"],
        warranty: "7 Years"
      }
    ],
    faqs: [
      { question: "Is underbody coating necessary for new cars?", answer: "Yes, especially in coastal or snowy areas. Factory undercoating is minimal. Our comprehensive coating provides superior long-term protection." },
      { question: "Will it affect servicing?", answer: "No, the coating is applied to fixed structural components. Serviceable parts are masked and remain accessible." },
      { question: "How long before I can drive?", answer: "Wait 24 hours before normal driving. Avoid water/deep puddles for 72 hours for full curing." },
      { question: "Does it stop existing rust?", answer: "We treat existing rust before coating. The coating prevents new rust but can't reverse significant structural corrosion." }
    ],
    relatedServices: ["paint-protection-film", "ceramic-coating", "exterior-detailing"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "car-wash": {
    id: "car-wash",
    title: "Premium Car Wash",
    subtitle: "Safe, Scratch-Free Hand Washing",
    shortDescription: "Meticulous hand-wash using two-bucket method and pH-neutral products for swirl-free cleaning.",
    fullDescription: "Our Premium Car Wash is the safest way to clean your vehicle. Using the professional two-bucket method with grit guards, pH-neutral shampoos, and premium microfiber materials, we eliminate the swirl marks and scratches common with automated car washes. Every panel is cleaned with care, and we attend to often-missed areas like door jambs, fuel caps, and under trim.",
    whatIsIt: "A proper hand wash is the foundation of car care. Unlike automated washes that cause swirl marks, our method uses proper technique, quality products, and careful attention. The two-bucket method (wash and rinse) with grit guards prevents dirt from returning to your paint. We use multiple mitts and towels, never reusing dirty materials.",
    whyChoose: [
      "Two-bucket method prevents scratches from wash process",
      "pH-neutral shampoo is safe for wax and coating",
      "Separate wheel cleaning prevents cross-contamination",
      "Microfiber drying prevents water spots and marring",
      "Attention to overlooked areas like door jambs"
    ],
    benefits: [
      { icon: "Shield", title: "Swirl-Free", description: "Proper technique prevents wash-induced scratches" },
      { icon: "Sparkles", title: "Streak-Free", description: "Proper drying leaves no water spots" },
      { icon: "Droplets", title: "Safe Products", description: "pH-neutral preserves existing protection" },
      { icon: "Eye", title: "Detailed", description: "Door jambs, fuel cap, and hidden areas cleaned" },
      { icon: "Clock", title: "Quick", description: "30-45 minute service" },
      { icon: "Wallet", title: "Affordable", description: "Professional results at accessible price" }
    ],
    specs: [
      { label: "Method", value: "Two-Bucket + Grit Guards" },
      { label: "Shampoo", value: "pH-Neutral, Wax-Safe" },
      { label: "Water", value: "Deionized (Spot-Free)" },
      { label: "Drying", value: "Microfiber + Air Blower" },
      { label: "Wheel Clean", value: "Separate Process" },
      { label: "Duration", value: "30-45 Minutes" },
      { label: "Tires", value: "Cleaned & Dressed" },
      { label: "Glass", value: "Streak-Free Finish" }
    ],
    process: [
      { step: 1, title: "Pre-Rinse", description: "Gentle rinse to remove loose dirt and soften remaining contaminants" },
      { step: 2, title: "Wheel Cleaning", description: "Dedicated wheel buckets and brushes to clean wheels and tires" },
      { step: 3, title: "Foam Pre-Wash", description: "Snow foam application to further loosen dirt (Premium package)" },
      { step: 4, title: "Two-Bucket Wash", description: "Hand wash from top to bottom using wash mitt and proper technique" },
      { step: 5, title: "Rinse", description: "Thorough rinse removing all shampoo and loosened dirt" },
      { step: 6, title: "Drying", description: "Microfiber towel drying and air blower for mirrors and trim" },
      { step: 7, title: "Finishing", description: "Tire dressing, glass cleaning, and final inspection" }
    ],
    packages: [
      {
        name: "Express Wash",
        price: "₹399",
        duration: "30 Minutes",
        features: ["Exterior wash", "Wheel cleaning", "Tire dressing", "Window cleaning"],
        warranty: "Satisfaction Guaranteed"
      },
      {
        name: "Premium Wash",
        price: "₹699",
        duration: "45 Minutes",
        features: ["Foam pre-wash", "Two-bucket wash", "Door jambs", "Air blower dry", "Interior vacuum"],
        warranty: "Satisfaction Guaranteed",
        recommended: true
      },
      {
        name: "Deluxe Wash",
        price: "₹999",
        duration: "60 Minutes",
        features: ["Everything in Premium", "Quick interior wipe", "Glass inside & out", "Spray wax protection"],
        warranty: "Satisfaction Guaranteed"
      }
    ],
    faqs: [
      { question: "How often should I wash my car?", answer: "Weekly washing is ideal to prevent dirt buildup. In dusty areas or after rain, more frequent washing protects your paint." },
      { question: "Is this safe for ceramic-coated cars?", answer: "Yes, our pH-neutral shampoo is specifically safe for ceramic coatings, PPF, and wax. It won't degrade your existing protection." },
      { question: "Why is hand wash better than automatic?", answer: "Automatic washes use harsh brushes that cause swirl marks. Our hand wash uses proper technique that gently cleans without scratching." },
      { question: "Do you clean the interior too?", answer: "Premium and Deluxe packages include basic interior cleaning. For deep interior cleaning, see our Interior Detailing service." }
    ],
    relatedServices: ["interior-detailing", "exterior-detailing", "ceramic-coating"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "complete-detailing": {
    id: "complete-detailing",
    title: "Complete Car Detailing",
    subtitle: "The Ultimate All-Inclusive Transformation",
    shortDescription: "Complete interior and exterior detailing with paint correction and protection - total vehicle restoration.",
    fullDescription: "Our Complete Car Detailing is our most comprehensive service - a full-day transformation that addresses every aspect of your vehicle. This all-inclusive package combines intensive interior deep-cleaning, multi-stage exterior paint correction, and protective coating application. Your vehicle will look better than the day it left the showroom, inside and out.",
    whatIsIt: "Complete detailing is the ultimate automotive rejuvenation service. It's not just a combination of interior and exterior services - it's a coordinated transformation where each process enhances the other. From the engine bay to the trunk, every surface is cleaned, restored, and protected. This is the service for those who want their vehicle in perfect condition.",
    whyChoose: [
      "One-day transformation for your entire vehicle",
      "Best value when combining all services",
      "Coordinated approach ensures nothing is missed",
      "Showroom+ condition inside and out",
      "Ideal for pre-sale preparation or special occasions"
    ],
    benefits: [
      { icon: "Sparkles", title: "Showroom Finish", description: "Paint corrected to better-than-new condition" },
      { icon: "Wind", title: "Fresh Interior", description: "Deep-cleaned cabin free of odors and stains" },
      { icon: "Shield", title: "Protected", description: "Sealant or coating for lasting results" },
      { icon: "Gem", title: "Complete", description: "Every surface addressed, nothing overlooked" },
      { icon: "Clock", title: "Efficient", description: "All services in one coordinated session" },
      { icon: "Award", title: "Best Value", description: "Package pricing saves 25% vs. individual services" }
    ],
    specs: [
      { label: "Interior", value: "Steam + Extraction" },
      { label: "Exterior", value: "Clay + Correction" },
      { label: "Paint Stages", value: "2-Stage Correction" },
      { label: "Protection", value: "6-Month Sealant" },
      { label: "Engine Bay", value: "Included" },
      { label: "Duration", value: "8-12 Hours" },
      { label: "Team Size", value: "2-3 Technicians" },
      { label: "Value Save", value: "25% vs Individual" }
    ],
    process: [
      { step: 1, title: "Assessment", description: "Complete vehicle inspection to create detailed work plan" },
      { step: 2, title: "Interior Deep Clean", description: "Full interior detailing including steam and extraction" },
      { step: 3, title: "Exterior Prep", description: "Deep wash and clay bar decontamination" },
      { step: 4, title: "Paint Correction", description: "Two-stage machine polishing for flawless finish" },
      { step: 5, title: "Protection", description: "Premium sealant or ceramic coating application" },
      { step: 6, title: "Engine Bay", description: "Detailed cleaning and dressing of engine compartment" },
      { step: 7, title: "Final Touches", description: "Glass, trim, wheels - every detail perfected" },
      { step: 8, title: "Quality Check", description: "Comprehensive inspection with customer walkthrough" }
    ],
    packages: [
      {
        name: "Complete Standard",
        price: "₹7,999",
        duration: "1 Day",
        features: ["Interior detailing", "Exterior + 1-stage polish", "Sealant protection", "Engine bay"],
        warranty: "6 Month Sealant"
      },
      {
        name: "Complete Premium",
        price: "₹11,999",
        duration: "1 Day",
        features: ["Luxury interior detail", "Exterior + 2-stage correction", "1-year ceramic coating", "Engine bay", "Headlight restoration"],
        warranty: "1 Year Coating",
        recommended: true
      },
      {
        name: "Complete Ultimate",
        price: "₹16,999",
        duration: "2 Days",
        features: ["Everything in Premium", "3-stage paint correction", "3-year ceramic coating", "PPF on high-impact areas", "Underbody coating"],
        warranty: "3 Year Protection"
      }
    ],
    faqs: [
      { question: "How long does complete detailing take?", answer: "Standard takes 1 day (8-10 hours). Premium is 1 long day. Ultimate may take 2 days for the most thorough results." },
      { question: "Is it worth the investment?", answer: "Absolutely. The package saves 25% compared to booking services separately. Plus, the coordinated approach delivers better results than separate appointments." },
      { question: "Do I need to drop off my car?", answer: "Yes, complete detailing requires full-day access to your vehicle. We can arrange pickup/drop-off service in local areas." },
      { question: "What's the difference between packages?", answer: "Standard is great for maintenance. Premium adds ceramic coating for lasting protection. Ultimate is for enthusiasts wanting the best possible result with maximum protection." }
    ],
    relatedServices: ["interior-detailing", "exterior-detailing", "ceramic-coating"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "rubbing-polishing": {
    id: "rubbing-polishing",
    title: "Rubbing & Polishing",
    subtitle: "Professional Paint Correction & Gloss Restoration",
    shortDescription: "Multi-stage machine polishing and rubbing compound treatment to remove swirl marks, scratches, and restore showroom shine.",
    fullDescription: "Our Rubbing & Polishing service is a specialized paint correction treatment designed to restore your vehicle's finish to its original glory. Using professional-grade rubbing compounds and machine polishers, we remove surface imperfections including swirl marks, light scratches, oxidation, and holograms. This service reveals the true depth and clarity of your paint before applying protective sealants or wax.",
    whatIsIt: "Rubbing and polishing is a mechanical paint correction process that uses abrasive compounds and machine polishers to level the clear coat. The 'rubbing' stage uses cutting compounds to remove deeper defects, while 'polishing' uses finer compounds to restore gloss. This process removes microscopic layers of damaged clear coat to reveal fresh, unblemished paint underneath.",
    whyChoose: [
      "Removes 80-95% of swirl marks and light scratches",
      "Restores faded and oxidized paint to like-new condition",
      "Essential preparation before ceramic coating or PPF",
      "Multiple polish stages for different defect levels",
      "Paint thickness measurement ensures safe correction"
    ],
    benefits: [
      { icon: "Sparkles", title: "Mirror Finish", description: "Restores deep gloss and reflective clarity" },
      { icon: "Shield", title: "Defect Removal", description: "Eliminates swirl marks, holograms, and light scratches" },
      { icon: "Sun", title: "Oxidation Repair", description: "Restores color from sun-faded paint" },
      { icon: "Layers", title: "Smooth Surface", description: "Creates glass-like smoothness" },
      { icon: "Gem", title: "Paint Prep", description: "Perfect foundation for protective coatings" },
      { icon: "Eye", title: "Clarity", description: "Enhances metallic flake and paint depth" }
    ],
    specs: [
      { label: "Correction Levels", value: "1-3 Stage" },
      { label: "Defect Removal", value: "80-95%" },
      { label: "Pad Types", value: "Foam/Microfiber/Wool" },
      { label: "Compound Grade", value: "Cutting to Finishing" },
      { label: "Paint Check", value: "Thickness Gauge" },
      { label: "Machine Type", value: "Dual-Action/Rotary" },
      { label: "Duration", value: "3-8 Hours" },
      { label: "Finish", value: "Showroom Gloss" }
    ],
    process: [
      { step: 1, title: "Paint Assessment", description: "Detailed inspection and paint thickness measurement" },
      { step: 2, title: "Deep Clean", description: "Wash and clay bar to remove surface contaminants" },
      { step: 3, title: "Tape Protection", description: "Masking of trim, rubber, and sensitive areas" },
      { step: 4, title: "Compound Stage", description: "Machine polishing with cutting compound for defect removal" },
      { step: 5, title: "Polish Stage", description: "Finer polish to restore gloss and remove haze" },
      { step: 6, title: "Finishing", description: "Final polish for maximum gloss and clarity" },
      { step: 7, title: "Inspection", description: "LED light inspection to ensure flawless finish" }
    ],
    packages: [
      {
        name: "Single Stage Polish",
        price: "₹1,999",
        duration: "3-4 Hours",
        features: ["Light swirl removal", "Gloss enhancement", "All painted panels"],
        warranty: "Satisfaction Guaranteed"
      },
      {
        name: "Two Stage Correction",
        price: "₹3,999",
        duration: "5-6 Hours",
        features: ["Compound + polish", "Moderate defect removal", "Paint thickness check", "All exterior panels"],
        warranty: "Satisfaction Guaranteed",
        recommended: true
      },
      {
        name: "Three Stage Concours",
        price: "₹6,999",
        duration: "7-8 Hours",
        features: ["Heavy cutting", "Refining polish", "Jeweling finish", "Coating preparation"],
        warranty: "Showroom Finish Guaranteed"
      }
    ],
    faqs: [
      { question: "Will polishing remove all scratches?", answer: "Polishing removes light surface scratches and swirl marks. Deep scratches that reach the primer or bare metal cannot be fully removed but may be minimized." },
      { question: "Is machine polishing safe for my paint?", answer: "Yes, we use paint thickness gauges to ensure safe correction. Our technicians are trained to work within safe parameters for your specific paint system." },
      { question: "How often should I polish my car?", answer: "Most vehicles benefit from polishing every 1-2 years. Over-polishing can thin the clear coat, so we measure paint thickness before every service." },
      { question: "What's the difference between rubbing and polishing?", answer: "Rubbing (compounding) removes deeper defects. Polishing restores gloss after rubbing. Both are machine processes using different abrasive levels." }
    ],
    relatedServices: ["exterior-detailing", "ceramic-coating", "complete-detailing"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "hydrowash-wax": {
    id: "hydrowash-wax",
    title: "Premium Hydrowash & Wax",
    subtitle: "Deep Clean with Hand-Applied Protection",
    shortDescription: "Thorough hand wash with high-quality carnauba wax application for a glossy, protected finish that lasts for months.",
    fullDescription: "Our Premium Hydrowash & Wax service combines meticulous hand washing with premium wax protection. Unlike quick automated washes, our hydrowash uses pressurized water and pH-neutral cleaners to safely remove dirt without scratching. The hand-applied carnauba or synthetic wax creates a hydrophobic barrier that protects your paint, enhances gloss, and makes future cleaning easier for up to 3 months.",
    whatIsIt: "Hydrowash is a high-pressure, hand-wash technique that uses controlled water pressure to safely lift and remove dirt before contact washing. Combined with premium wax application, this service cleans thoroughly while adding a protective layer. The wax fills microscopic imperfections, creates water-beading properties, and provides UV protection for your paint.",
    whyChoose: [
      "High-pressure rinse removes loose dirt before touching the paint",
      "Hand-applied wax provides 2-3 months of protection",
      "Carnauba wax creates warm, deep gloss finish",
      "Hydrophobic surface makes washing easier between visits",
      "Safe for all paint types including matte finishes"
    ],
    benefits: [
      { icon: "Droplets", title: "Hydrophobic", description: "Water beads and rolls off easily" },
      { icon: "Sparkles", title: "Enhanced Gloss", description: "Deep, wet-looking shine" },
      { icon: "Shield", title: "UV Protection", description: "Wax shields paint from sun damage" },
      { icon: "Droplets", title: "Easier Cleaning", description: "Dirt doesn't bond as easily" },
      { icon: "Clock", title: "Quick Service", description: "1-2 hour transformation" },
      { icon: "Wallet", title: "Affordable", description: "Regular protection at accessible price" }
    ],
    specs: [
      { label: "Wash Method", value: "Hand + Pressure" },
      { label: "Wax Type", value: "Carnauba/Synthetic" },
      { label: "Protection Duration", value: "2-3 Months" },
      { label: "Water Pressure", value: "Controlled High" },
      { label: "Shampoo", value: "pH-Neutral" },
      { label: "Drying", value: "Microfiber + Air" },
      { label: "Duration", value: "1-2 Hours" },
      { label: "Finish", value: "Glossy Protected" }
    ],
    process: [
      { step: 1, title: "Pre-Rinse", description: "High-pressure water to loosen and remove surface dirt" },
      { step: 2, title: "Foam Application", description: "pH-neutral snow foam to lift remaining contaminants" },
      { step: 3, title: "Hand Wash", description: "Two-bucket method with premium wash mitt" },
      { step: 4, title: "Wheel Detail", description: "Deep cleaning of wheels, tires, and wheel wells" },
      { step: 5, title: "Rinse", description: "Thorough rinse with filtered water" },
      { step: 6, title: "Dry", description: "Microfiber drying and air blower for crevices" },
      { step: 7, title: "Wax Application", description: "Hand application of premium carnauba or synthetic wax" },
      { step: 8, title: "Buff", description: "Microfiber buffing to reveal glossy finish" }
    ],
    packages: [
      {
        name: "Hydrowash Express",
        price: "₹599",
        duration: "45 Minutes",
        features: ["High-pressure wash", "Quick dry", "Spray wax sealant"],
        warranty: "Satisfaction Guaranteed"
      },
      {
        name: "Hydrowash + Wax",
        price: "₹1,299",
        duration: "1.5 Hours",
        features: ["Complete hand wash", "Premium carnauba wax", "Tire dressing", "Glass cleaning"],
        warranty: "2 Month Protection",
        recommended: true
      },
      {
        name: "Hydrowash Deluxe",
        price: "₹1,999",
        duration: "2 Hours",
        features: ["Everything in Wax package", "Clay bar treatment", "Synthetic sealant", "Interior vacuum"],
        warranty: "3 Month Protection"
      }
    ],
    faqs: [
      { question: "How long does the wax protection last?", answer: "Our carnauba wax lasts 2-3 months depending on weather and washing frequency. Synthetic options may last slightly longer." },
      { question: "Is hydrowash better than regular washing?", answer: "Yes, the controlled high-pressure rinse removes more loose dirt before contact, reducing the chance of swirl marks during washing." },
      { question: "Will wax remove scratches?", answer: "Wax fills minor swirl marks temporarily but doesn't remove them. For scratch removal, see our Rubbing & Polishing service." },
      { question: "How often should I wax my car?", answer: "Every 2-3 months for optimal protection. More frequent waxing is fine and provides additional benefits." }
    ],
    relatedServices: ["car-wash", "exterior-detailing", "ceramic-coating"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "anti-rust-alloy": {
    id: "anti-rust-alloy",
    title: "Anti Rust Coating & Alloy Treatment",
    subtitle: "Complete Underbody & Wheel Protection",
    shortDescription: "Comprehensive rust protection for underbody plus specialized alloy wheel coating to prevent corrosion and brake dust buildup.",
    fullDescription: "Our Anti Rust Coating & Alloy Treatment provides dual protection for your vehicle's most vulnerable metal surfaces. The underbody receives a thick rubberized coating that seals out moisture and prevents rust formation. Simultaneously, alloy wheels are treated with a ceramic-based coating that protects against brake dust, road salt, and corrosion while making future cleaning effortless. Essential for vehicles in coastal areas or harsh climates.",
    whatIsIt: "This is a two-part protection service. Anti-rust coating applies a durable rubberized layer to the vehicle's undercarriage, chassis, and wheel wells to prevent corrosion. Alloy treatment is a ceramic coating specifically formulated for wheels that creates a heat-resistant barrier against brake dust, salt, and grime. Together they protect your vehicle's structural integrity and maintain wheel appearance.",
    whyChoose: [
      "Rubberized underbody coating prevents rust for 5+ years",
      "Alloy wheel coating resists brake dust and heat up to 400°C",
      "Essential for coastal areas and winter climates",
      "Makes wheel cleaning effortless - dirt wipes right off",
      "Maintains resale value by preventing structural corrosion"
    ],
    benefits: [
      { icon: "Shield", title: "Rust Prevention", description: "Seals underbody from moisture and salt" },
      { icon: "Gem", title: "Wheel Protection", description: "Ceramic coating resists brake dust" },
      { icon: "Sun", title: "Heat Resistant", description: "Withstands high brake temperatures" },
      { icon: "Droplets", title: "Easy Cleaning", description: "Wheels clean with just water" },
      { icon: "VolumeX", title: "Noise Reduction", description: "Undercoating dampens road noise" },
      { icon: "Clock", title: "Long Lasting", description: "5+ years underbody, 1-2 years wheels" }
    ],
    specs: [
      { label: "Underbody Material", value: "Rubberized Bitumen" },
      { label: "Wheel Coating", value: "SiO2 Ceramic" },
      { label: "Heat Resistance", value: "Up to 400°C" },
      { label: "Underbody Warranty", value: "5 Years" },
      { label: "Wheel Coating Life", value: "1-2 Years" },
      { label: "Application Time", value: "3-4 Hours" },
      { label: "Curing Time", value: "24 Hours" },
      { label: "Coverage", value: "Full Underbody + 4 Wheels" }
    ],
    process: [
      { step: 1, title: "Lift & Inspect", description: "Vehicle raised for undercarriage inspection and wheel removal" },
      { step: 2, title: "Deep Clean", description: "High-pressure cleaning of underbody and wheels" },
      { step: 3, title: "Rust Treatment", description: "Existing rust spots treated with converter" },
      { step: 4, title: "Masking", description: "Protecting brake components and moving parts" },
      { step: 5, title: "Underbody Coating", description: "Spray application of rubberized coating" },
      { step: 6, title: "Wheel Prep", description: "Thorough cleaning and decontamination of alloys" },
      { step: 7, title: "Wheel Coating", description: "Ceramic coating applied to wheel faces and barrels" },
      { step: 8, title: "Curing", description: "24-hour curing before vehicle return" }
    ],
    packages: [
      {
        name: "Rust Protection Only",
        price: "₹3,999",
        duration: "2 Hours",
        features: ["Underbody coating", "Wheel wells", "3-year warranty"],
        warranty: "3 Years"
      },
      {
        name: "Complete Protection",
        price: "₹6,999",
        duration: "4 Hours",
        features: ["Full underbody coating", "Alloy wheel ceramic coat", "Brake dust resistance", "5-year rust warranty"],
        warranty: "5 Years",
        recommended: true
      },
      {
        name: "Premium Shield",
        price: "₹9,999",
        duration: "5 Hours",
        features: ["Everything in Complete", "Cavity wax injection", "Door panel treatment", "Annual inspection included"],
        warranty: "7 Years"
      }
    ],
    faqs: [
      { question: "Is anti-rust coating necessary for new cars?", answer: "Yes, factory undercoating is minimal. Our comprehensive coating provides superior long-term protection, especially in coastal or snowy regions." },
      { question: "Will wheel coating affect brake performance?", answer: "No, we carefully mask brake components. The coating is applied only to wheel surfaces and withstands high temperatures." },
      { question: "How do I clean coated wheels?", answer: "Simply rinse with water - most brake dust and grime will wash away without scrubbing. For stubborn dirt, use pH-neutral wheel cleaner." },
      { question: "Can rust coating be applied to rusty cars?", answer: "Light surface rust is treated before coating. Severe structural rust may need repair first. We inspect before application." }
    ],
    relatedServices: ["underbody-coating", "ceramic-coating", "exterior-detailing"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "engine-ac-treatment": {
    id: "engine-ac-treatment",
    title: "Engine Coating & AC Vent Treatment",
    subtitle: "Protect & Sanitize Critical Systems",
    shortDescription: "High-temperature engine bay coating plus deep AC vent sanitization to protect components and ensure fresh cabin air.",
    fullDescription: "Our Engine Coating & AC Vent Treatment service addresses two often-neglected but critical areas of your vehicle. The engine bay receives a protective coating that resists heat, dust, and moisture while keeping components looking new. Simultaneously, the AC system undergoes deep sanitization using antimicrobial treatment and ozone therapy to eliminate bacteria, mold, and odors from vents and evaporator coils, ensuring fresh, healthy cabin air.",
    whatIsIt: "Engine coating is a heat-resistant protective dressing applied to engine bay components that prevents dust accumulation, protects against moisture, and keeps rubber and plastic parts supple. AC vent treatment is a comprehensive sanitization process using specialized foaming agents, antimicrobial solutions, and ozone treatment to clean the entire HVAC system including vents, ducts, and evaporator coils - the source of most vehicle odors.",
    whyChoose: [
      "Engine coating protects against heat up to 200°C and prevents dust buildup",
      "AC treatment eliminates 99.9% of bacteria, mold, and allergens",
      "Prevents musty odors and improves air conditioning efficiency",
      "Makes future engine bay cleaning effortless",
      "Extends life of rubber hoses and plastic engine components"
    ],
    benefits: [
      { icon: "Shield", title: "Engine Protection", description: "Heat and moisture resistant coating" },
      { icon: "Wind", title: "Fresh Air", description: "Eliminates odors at the source" },
      { icon: "Heart", title: "Healthier Cabin", description: "Removes bacteria and allergens" },
      { icon: "Zap", title: "AC Efficiency", description: "Clean system runs more efficiently" },
      { icon: "Sparkles", title: "Like-New Look", description: "Engine bay looks showroom fresh" },
      { icon: "Clock", title: "Long Lasting", description: "6-month engine, 3-month AC protection" }
    ],
    specs: [
      { label: "Engine Coating", value: "Heat-Resistant Dressing" },
      { label: "Heat Tolerance", value: "Up to 200°C" },
      { label: "AC Treatment", value: "Antimicrobial + Ozone" },
      { label: "Bacteria Removal", value: "99.9%" },
      { label: "Coverage", value: "Engine Bay + All Vents" },
      { label: "Duration", value: "2-3 Hours" },
      { label: "Engine Coating Life", value: "6 Months" },
      { label: "Ozone Treatment", value: "30 Minutes" }
    ],
    process: [
      { step: 1, title: "Engine Inspection", description: "Check for any issues before treatment" },
      { step: 2, title: "Engine Deep Clean", description: "Degreasing and detailing of all components" },
      { step: 3, title: "Drying", description: "Complete drying before coating application" },
      { step: 4, title: "Coating Application", description: "Heat-resistant dressing applied to all surfaces" },
      { step: 5, title: "AC System Access", description: "Cabin filter removal and vent access" },
      { step: 6, title: "Foam Treatment", description: "Antimicrobial foam through all vents" },
      { step: 7, title: "Ozone Therapy", description: "Ozone generator sanitizes entire system" },
      { step: 8, title: "Final Check", description: "AC operation test and quality inspection" }
    ],
    packages: [
      {
        name: "AC Treatment Only",
        price: "₹1,499",
        duration: "1 Hour",
        features: ["Vent sanitization", "Antimicrobial foam", "Ozone treatment", "Cabin filter check"],
        warranty: "3 Month Freshness"
      },
      {
        name: "Engine + AC Combo",
        price: "₹2,999",
        duration: "2.5 Hours",
        features: ["Engine bay coating", "Full AC sanitization", "Ozone treatment", "Component protection"],
        warranty: "Satisfaction Guaranteed",
        recommended: true
      },
      {
        name: "Complete System Care",
        price: "₹4,499",
        duration: "3 Hours",
        features: ["Everything in Combo", "Cabin filter replacement", "AC performance check", "6-month engine warranty"],
        warranty: "6 Month Protection"
      }
    ],
    faqs: [
      { question: "Is engine coating safe for modern electronics?", answer: "Yes, we use water-based, non-conductive dressings specifically designed for modern engine bays. Sensitive electronics are protected during application." },
      { question: "How often should AC be treated?", answer: "Every 6 months is recommended, especially if you notice musty odors when first turning on the AC." },
      { question: "Will this fix a broken AC?", answer: "No, this is a cleaning and sanitization service. Mechanical AC issues require repair services." },
      { question: "Is ozone treatment safe?", answer: "Yes, we run the generator while the vehicle is unoccupied and ventilate thoroughly before return. It's completely safe and leaves no residue." }
    ],
    relatedServices: ["interior-detailing", "complete-detailing", "premium-detailing"],
    beforeAfterImages: [] // Images removed - add back when available
  }
};

export const getServiceById = (id: string): ServiceDetail | undefined => {
  return servicesData[id];
};

export const getAllServices = (): ServiceDetail[] => {
  return Object.values(servicesData);
};

export const getRelatedServices = (ids: string[]): ServiceDetail[] => {
  return ids.map(id => servicesData[id]).filter(Boolean);
};
