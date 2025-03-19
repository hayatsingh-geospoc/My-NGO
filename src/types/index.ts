export interface NGO {
  id: string;
  name: string;
  logo: string;
  description: string;
  mission: string;
  location: {
    address: string;
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    social: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
      linkedin?: string;
    };
  };
  services: {
    id: string;
    name: string;
    description: string;
    icon?: string;
  }[];
  volunteerOpportunities: {
    id: string;
    title: string;
    description: string;
    requirements: string[];
  }[];
  gallery: {
    id: string;
    title: string;
    imageUrl: string;
    description?: string;
  }[];
  videos: {
    id: string;
    title: string;
    url: string;
    thumbnail?: string;
  }[];
  impactStories: {
    id: string;
    title: string;
    story: string;
    imageUrl?: string;
    date: string;
  }[];
  donationLinks: {
    id: string;
    platform: string;
    url: string;
    description?: string;
  }[];
  yearsActive: number;
  size: 'small' | 'medium' | 'large';
  causes: string[];
  rating: number;
  featured: boolean;
  createdAt: string;
}
