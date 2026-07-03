export interface Review {
  id: string;
  companyId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  tag?: string;
  likes?: number;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SocialLink {
  platform: 'facebook' | 'linkedin' | 'twitter' | 'instagram' | 'youtube' | 'website' | 'github' | 'tiktok' | 'pinterest' | 'x' | 'snapchat';
  url: string;
  username: string;
}

export interface Company {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  logoColor: string; // Tailwind bg-color or border-color style
  accentColor: string; // Tailwind text color class e.g., 'text-amber-600'
  iconName: string; // Name of Lucide icon to represent logo
  sector: string;
  description: string;
  aboutText: string;
  address: string;
  coordinates: string;
  mapEmbedUrl: string;
  socialLinks: SocialLink[];
  stats: Stat[];
  services: string[];
}
