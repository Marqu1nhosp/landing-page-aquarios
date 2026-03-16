import type { LucideIcon } from 'lucide-react';

// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Benefits
export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Classes/Modalidades
export interface FitnessClass {
  name: string;
  description: string;
  color: string;
  icon: string;
}

// Pricing Plans
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  popular: boolean;
  badge?: string;
  features: string[];
}

// Testimonials
export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  image: string;
}

// Gallery
export interface GalleryImage {
  title: string;
  category: string;
  image: string;
}

// Statistics
export interface Stat {
  number: string;
  label: string;
}

// Footer Links
export interface FooterLinksGroup {
  [key: string]: string[];
}

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  link: string;
}

// Component Props
export interface NavbarProps {}

export interface HeroProps {
  title?: string;
  subtitle?: string;
}

export interface BenefitsProps {}

export interface ClassesProps {}

export interface PricingProps {}

export interface TestimonialsProps {}

export interface GalleryProps {}

export interface CTAProps {}

export interface FooterProps {}

export interface AppProps {}
