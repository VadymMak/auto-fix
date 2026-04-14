export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  duration?: string;
  icon?: string;
}

export interface PricingCategory {
  id: string;
  name: string;
  items: ServiceItem[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: 'wide' | 'tall' | 'normal';
}

export interface WhyItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  initial: string;
  text: string;
  rating: number;
  car: string;
}

export interface ContactItem {
  icon: string;
  title: string;
  lines: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface QuickReply {
  id: string;
  label: string;
}

export interface ChatMessage {
  id: string;
  from: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

export interface ChatConfig {
  greeting: string;
  quickReplies: QuickReply[];
  whatsappNumber: string;
}

export interface ImageMap {
  hero: string;
  about: string;
  gallery: string[];
}
