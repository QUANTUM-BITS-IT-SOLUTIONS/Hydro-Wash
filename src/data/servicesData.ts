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
  "ceramic-coating": {
    id: "ceramic-coating",
    title: "Ceramic coating",
    subtitle: "Nano-Technology Protection with Showroom Shine",
    shortDescription: "Premium SiO2-based nano-ceramic coating that creates a permanent bond with your paint, delivering exceptional gloss and long-lasting protection.",
    fullDescription: "Our Ceramic Coating is a professional-grade nano-ceramic treatment that chemically bonds with your vehicle's paint, creating a permanent hydrophobic layer. Formulated with high-grade Silicon Dioxide (SiO2), this coating delivers exceptional gloss, extreme water beading, and superior protection against UV rays, oxidation, chemical stains, and environmental contaminants.",
    whatIsIt: "Ceramic coating is a liquid polymer that contains nano-ceramic particles. When applied to paint, these particles bond at the molecular level to create a glass-like protective layer.",
    whyChoose: [
      "9H pencil hardness rating for maximum scratch resistance",
      "Extreme water beading and hydrophobic properties",
      "UV & oxidation protection against harsh sun",
      "Long-lasting gloss and mirror-like finish",
      "Reduces maintenance time by 70%"
    ],
    benefits: [
      { icon: "Diamond", title: "9H Hardness", description: "Extreme scratch resistance" },
      { icon: "Droplets", title: "Hydrophobic", description: "Water beads and rolls off easily" },
      { icon: "Sun", title: "UV Protection", description: "Prevents oxidation and fading" }
    ],
    specs: [
      { label: "Hardness Rating", value: "9H Pencil Hardness" },
      { label: "Durability", value: "3-5 Years" }
    ],
    process: [
      { step: 1, title: "Deep Cleanse", description: "Multi-stage wash and chemical decontamination" },
      { step: 2, title: "Paint Correction", description: "Machine polishing to remove swirl marks" },
      { step: 3, title: "Coating Application", description: "Precise application of ceramic coating" }
    ],
    packages: [
      {
        name: "Standard Ceramic",
        price: "₹14,999/-",
        duration: "1-2 Days",
        features: ["9H hardness coating", "Paint correction included", "Extreme hydrophobicity", "Warranty certificate"],
        warranty: "3 Years",
        recommended: true
      }
    ],
    faqs: [
      { question: "How long does it last?", answer: "Our professional ceramic coating lasts between 3 to 5 years with proper maintenance." }
    ],
    relatedServices: ["graphene-coating", "ppf"],
    beforeAfterImages: []
  },
  "graphene-coating": {
    id: "graphene-coating",
    title: "graphene coating",
    subtitle: "Advanced Graphene Protection",
    shortDescription: "Next-generation graphene-infused coating offering superior heat dissipation and reduced water spotting.",
    fullDescription: "Graphene coating represents the cutting edge of automotive protection technology. Utilizing graphene, this coating delivers unmatched slickness, superior heat dissipation, and dramatically reduced water spotting compared to traditional ceramic coatings.",
    whatIsIt: "Graphene is a single layer of carbon atoms that, when infused into a coating, provides superior strength and thermal properties.",
    whyChoose: [
      "Superior heat dissipation prevents water spot etching",
      "Extreme slickness and deeper gloss",
      "Anti-static properties repel dust",
      "7+ years of protection"
    ],
    benefits: [
      { icon: "Zap", title: "Heat Dissipation", description: "Prevents water spot etching" },
      { icon: "Shield", title: "Maximum Strength", description: "Superior durability and protection" }
    ],
    specs: [
      { label: "Active Material", value: "Graphene Oxide + SiO2" },
      { label: "Durability", value: "7+ Years" }
    ],
    process: [
      { step: 1, title: "Paint Perfection", description: "Multi-stage machine polishing" },
      { step: 2, title: "Graphene Application", description: "Precise application of graphene layers" }
    ],
    packages: [
      {
        name: "Pro Graphene",
        price: "₹19,999/-",
        duration: "2 Days",
        features: ["Superior heat dissipation", "Reduced water spotting", "7+ years protection"],
        warranty: "7 Years",
        recommended: true
      }
    ],
    faqs: [],
    relatedServices: ["ceramic-coating", "ppf"],
    beforeAfterImages: []
  },
  "premium-detailing": {
    id: "premium-detailing",
    title: "Premium detaling (Exterior & Interior)",
    subtitle: "Complete Showroom Restoration",
    shortDescription: "Comprehensive restoration service for both the inside and outside of your vehicle, restoring it to showroom condition.",
    fullDescription: "Our Premium Detailing is a deep-dive restoration of your vehicle. It covers everything from engine bay cleaning to deep interior sanitization and exterior paint correction.",
    whatIsIt: "Premium detailing is a combined service that addresses every inch of your vehicle to restore its original beauty.",
    whyChoose: ["Complete interior and exterior restoration", "Attention to every detail", "Showroom condition finish"],
    benefits: [
      { icon: "Sparkles", title: "Complete Refresh", description: "Every corner of your car is cleaned and restored" }
    ],
    specs: [],
    process: [],
    packages: [
      {
        name: "Premium Detailing",
        price: "₹1,999/-",
        duration: "6-8 Hours",
        features: ["Full interior deep clean", "Multi-stage paint correction", "Premium sealant application"],
        warranty: "Satisfaction Guaranteed",
        recommended: true
      }
    ],
    faqs: [],
    relatedServices: ["interior-cleaning", "compounding-polishing"],
    beforeAfterImages: []
  },
  "ppf": {
    id: "ppf",
    title: "Ppf paint protection film",
    subtitle: "Invisible Armor for Your Car",
    shortDescription: "Advanced self-healing urethane film that forms an invisible armor around your vehicle's paint.",
    fullDescription: "Paint Protection Film (PPF) is the ultimate protection against road debris, stone chips, and scratches. Our high-quality film features self-healing technology that repairs minor marks with heat.",
    whatIsIt: "PPF is a clear, durable film applied to the painted surfaces of your vehicle to protect it from physical damage.",
    whyChoose: ["Self-healing technology", "Ultimate stone chip protection", "10-year warranty"],
    benefits: [
      { icon: "Shield", title: "Impact Protection", description: "Absorbs impacts from road debris" }
    ],
    specs: [
      { label: "Material", value: "TPU" },
      { label: "Warranty", value: "10 Years" }
    ],
    process: [],
    packages: [
      {
        name: "Standard PPF",
        price: "₹49,999/-",
        duration: "3-5 Days",
        features: ["Self-healing technology", "Computer-precision cutting", "10-year manufacturer warranty"],
        warranty: "10 Years",
        recommended: true
      }
    ],
    faqs: [],
    relatedServices: ["ceramic-coating"],
    beforeAfterImages: []
  },
  "hydrowash-wax": {
    id: "hydrowash-wax",
    title: "Premium hydrowash &wax",
    subtitle: "Safe & Glossy Wash",
    shortDescription: "Thorough hand wash using high-pressure rinse with premium wax application for enhanced gloss.",
    fullDescription: "Our Premium Hydrowash & Wax is a safe and effective way to keep your car clean and protected. We use high-pressure water and premium wax to ensure a scratch-free finish.",
    whatIsIt: "A professional hand wash service that includes a layer of protective wax.",
    whyChoose: ["High-pressure rinse for thorough cleaning", "Premium wax for gloss and protection"],
    benefits: [],
    specs: [],
    process: [],
    packages: [
      {
        name: "Hydrowash & Wax",
        price: "₹1,199/-",
        duration: "1 Hour",
        features: ["High-pressure pre-rinse", "Premium carnauba wax", "Hydrophobic protection"],
        warranty: "Satisfaction Guaranteed",
        recommended: true
      }
    ],
    faqs: [],
    relatedServices: ["interior-cleaning"],
    beforeAfterImages: []
  },
  "interior-cleaning": {
    id: "interior-cleaning",
    title: "Car interior deep cleaning",
    subtitle: "Deep Sanitization & Cleaning",
    shortDescription: "Meticulous cleaning of all interior surfaces, including carpets, seats, and dashboard.",
    fullDescription: "Our Interior Deep Cleaning service ensures a healthy and clean environment inside your car. We use steam cleaning and specialized shampoos to remove stains and odors.",
    whatIsIt: "A comprehensive interior cleaning service focusing on sanitization and deep cleaning of all surfaces.",
    whyChoose: ["Steam cleaning & sanitization", "Leather conditioning", "Ozone odor elimination"],
    benefits: [],
    specs: [],
    process: [],
    packages: [
      {
        name: "Deep Cleaning",
        price: "₹1,999/-",
        duration: "4 Hours",
        features: ["Steam cleaning", "Stain removal", "Leather conditioning"],
        warranty: "Satisfaction Guaranteed",
        recommended: true
      }
    ],
    faqs: [],
    relatedServices: ["premium-detailing"],
    beforeAfterImages: []
  },
  "compounding-polishing": {
    id: "compounding-polishing",
    title: "Compounding and polishing",
    subtitle: "Restore Your Paint's Clarity",
    shortDescription: "Professional paint correction to remove swirl marks, scratches, and restore depth to your paint.",
    fullDescription: "Compounding and polishing is essential for removing swirl marks and light scratches that dull your car's appearance. We restore the original depth and shine of your paint.",
    whatIsIt: "A paint correction process using machine polishers and specialized compounds.",
    whyChoose: ["Swirl mark removal", "Paint oxidation repair", "Gloss restoration"],
    benefits: [],
    specs: [],
    process: [],
    packages: [
      {
        name: "Paint Correction",
        price: "₹4,499/-",
        duration: "6 Hours",
        features: ["Swirl mark removal", "Paint oxidation repair", "Gloss restoration"],
        warranty: "Satisfaction Guaranteed",
        recommended: true
      }
    ],
    faqs: [],
    relatedServices: ["ceramic-coating"],
    beforeAfterImages: []
  },
  "anti-rust": {
    id: "anti-rust",
    title: "Anti Rust coating",
    subtitle: "Underbody Protection",
    shortDescription: "Protective coating applied to the undercarriage to prevent rust and corrosion from moisture and debris.",
    fullDescription: "The undercarriage is the most vulnerable part of your car. Our anti-rust coating provides a durable barrier against moisture, salt, and debris.",
    whatIsIt: "A rubberized coating applied to the underbody of the vehicle to prevent corrosion.",
    whyChoose: ["Rust & corrosion prevention", "Sound dampening properties", "5-year protection warranty"],
    benefits: [],
    specs: [],
    process: [],
    packages: [
      {
        name: "Anti-Rust",
        price: "₹4,499",
        duration: "4 Hours",
        features: ["Full underbody coating", "Sound dampening", "5-year warranty"],
        warranty: "5 Years",
        recommended: true
      }
    ],
    faqs: [],
    relatedServices: ["alloy-treatment"],
    beforeAfterImages: []
  },
  "alloy-treatment": {
    id: "alloy-treatment",
    title: "Alloy treatment",
    subtitle: "Wheel Protection & Shine",
    shortDescription: "Specialized cleaning and protective coating for your alloy wheels to resist brake dust and corrosion.",
    fullDescription: "Keep your alloys looking new with our specialized treatment. We clean and apply a protective layer that repels brake dust and prevents corrosion.",
    whatIsIt: "A specialized service for cleaning and protecting alloy wheels.",
    whyChoose: ["Brake dust resistance", "Alloy wheel ceramic coat", "High-gloss finish"],
    benefits: [],
    specs: [],
    process: [],
    packages: [
      {
        name: "Alloy Treatment",
        price: "₹999",
        duration: "1 Hour",
        features: ["Brake dust resistance", "Alloy wheel ceramic coat", "High-gloss finish"],
        warranty: "Satisfaction Guaranteed",
        recommended: true
      }
    ],
    faqs: [],
    relatedServices: ["anti-rust"],
    beforeAfterImages: []
  },
  "engine-coating": {
    id: "engine-coating",
    title: "Engine coating",
    subtitle: "Engine Bay Protection",
    shortDescription: "Protective heat-resistant coating for your engine bay, making it easier to clean and preventing corrosion.",
    fullDescription: "A clean engine bay is easier to maintain. Our heat-resistant coating protects components and gives your engine a showroom look.",
    whatIsIt: "A protective coating for the engine bay components.",
    whyChoose: ["Heat-resistant protection", "Moisture barrier", "Showroom finish"],
    benefits: [],
    specs: [],
    process: [],
    packages: [
      {
        name: "Engine Coating",
        price: "₹999/-",
        duration: "1 Hour",
        features: ["Heat-resistant protection", "Moisture barrier", "Showroom finish"],
        warranty: "Satisfaction Guaranteed",
        recommended: true
      }
    ],
    faqs: [],
    relatedServices: ["ac-treatment"],
    beforeAfterImages: []
  },
  "ac-treatment": {
    id: "ac-treatment",
    title: "Ac vent treatment",
    subtitle: "Clean & Fresh Air",
    shortDescription: "Deep cleaning and sanitization of the AC vents to eliminate bacteria, mold, and odors.",
    fullDescription: "Eliminate smells and bacteria from your AC system with our vent treatment. We sanitize the vents to ensure fresh cabin air.",
    whatIsIt: "A sanitization service for the vehicle's AC system.",
    whyChoose: ["AC vent sanitization", "Antimicrobial treatment", "Fresh cabin air"],
    benefits: [],
    specs: [],
    process: [],
    packages: [
      {
        name: "AC Treatment",
        price: "₹1,299/-",
        duration: "1 Hour",
        features: ["AC vent sanitization", "Antimicrobial treatment", "Fresh cabin air"],
        warranty: "Satisfaction Guaranteed",
        recommended: true
      }
    ],
    faqs: [],
    relatedServices: ["engine-coating"],
    beforeAfterImages: []
  },
  "headlight-restoration": {
    id: "headlight-restoration",
    title: "Headlight restoration",
    subtitle: "Clear Visibility Restored",
    shortDescription: "Professional restoration of oxidized or yellowed headlights to improve visibility and aesthetics.",
    fullDescription: "Restore foggy headlights to their original clarity. This service improves night visibility and the overall look of your car.",
    whatIsIt: "A restoration process for cloudy or yellowed headlight lenses.",
    whyChoose: ["UV damage removal", "Crystal-clear clarity", "UV-resistant sealant"],
    benefits: [],
    specs: [],
    process: [],
    packages: [
      {
        name: "Headlight Restore",
        price: "₹999/-",
        duration: "1 Hour",
        features: ["UV damage removal", "Crystal-clear clarity", "UV-resistant sealant"],
        warranty: "1 Year",
        recommended: true
      }
    ],
    faqs: [],
    relatedServices: ["compounding-polishing"],
    beforeAfterImages: []
  }
};

export const getAllServices = (): ServiceDetail[] => {
  return Object.values(servicesData);
};

export const getServiceById = (id: string): ServiceDetail | undefined => {
  return servicesData[id];
};

export const getRelatedServices = (ids: string[]): ServiceDetail[] => {
  return ids
    .map(id => servicesData[id])
    .filter((service): service is ServiceDetail => service !== undefined);
};
