import { NGO } from '@/types';

export const ngos: NGO[] = [
  {
    id: '1',
    name: 'Paws & Care',
    logo: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=300&auto=format&fit=crop',
    description:
      'Dedicated to rescuing and rehoming stray and abandoned animals, providing medical care and shelter.',
    mission:
      'Our mission is to ensure every animal finds a loving home and receives the care they deserve.',
    location: {
      address: '123 Animal Welfare Road, Andheri East',
      city: 'Mumbai',
      country: 'India',
      coordinates: {
        lat: 19.076,
        lng: 72.8777,
      },
    },
    contactInfo: {
      phone: '+91 9876543210',
      email: 'contact@pawscare.org',
      website: 'https://www.pawscare.org',
      social: {
        facebook: 'https://facebook.com/pawscare',
        instagram: 'https://instagram.com/pawscare',
        twitter: 'https://twitter.com/pawscare',
      },
    },
    services: [
      {
        id: 's1',
        name: 'Animal Rescue',
        description: '24/7 rescue operations for animals in distress',
        icon: 'life-buoy',
      },
      {
        id: 's2',
        name: 'Adoption Services',
        description: 'Finding forever homes for rescued animals',
        icon: 'home',
      },
      {
        id: 's3',
        name: 'Medical Treatment',
        description: 'Full veterinary services for injured and sick animals',
        icon: 'stethoscope',
      },
    ],
    volunteerOpportunities: [
      {
        id: 'v1',
        title: 'Rescue Volunteer',
        description:
          'Join our rescue teams to help animals in emergency situations',
        requirements: [
          "Driver's license",
          'Basic first aid knowledge',
          'Available on weekends',
        ],
      },
      {
        id: 'v2',
        title: 'Shelter Assistant',
        description:
          'Help with daily care, feeding, and socializing of animals in our shelter',
        requirements: [
          'Animal handling experience',
          'Min. 4 hours per week commitment',
        ],
      },
    ],
    gallery: [
      {
        id: 'g1',
        title: 'Rescue Operation - Coastline',
        imageUrl:
          'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?q=80&w=800&auto=format&fit=crop',
        description: 'Our team rescuing stranded sea animals after a storm',
      },
      {
        id: 'g2',
        title: 'New Shelter Opening',
        imageUrl:
          'https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=800&auto=format&fit=crop',
        description:
          'Opening ceremony of our new state-of-the-art shelter facility',
      },
      {
        id: 'g3',
        title: 'Adoption Day Event',
        imageUrl:
          'https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=800&auto=format&fit=crop',
        description: 'Happy new pet parents at our monthly adoption event',
      },
    ],
    videos: [
      {
        id: 'vid1',
        title: 'A Day at Paws & Care',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail:
          'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?q=80&w=500&auto=format&fit=crop',
      },
      {
        id: 'vid2',
        title: 'Rescue Stories - Spring 2023',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail:
          'https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=500&auto=format&fit=crop',
      },
    ],
    impactStories: [
      {
        id: 'is1',
        title: "Max's Journey",
        story:
          'Max was found severely injured by the roadside. After months of treatment and care, he not only recovered but found his forever home with a loving family.',
        imageUrl:
          'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&w=600&auto=format&fit=crop',
        date: '2023-05-15',
      },
      {
        id: 'is2',
        title: 'The Beach Cleanup Initiative',
        story:
          'Our volunteers removed over 500kg of plastic waste from local beaches, protecting hundreds of marine animals from potential harm.',
        imageUrl:
          'https://images.unsplash.com/photo-1618477462146-050d2767eac4?q=80&w=600&auto=format&fit=crop',
        date: '2023-07-22',
      },
    ],
    donationLinks: [
      {
        id: 'd1',
        platform: 'Direct Donation',
        url: 'https://www.pawscare.org/donate',
        description: '100% of your donation goes directly to animal care',
      },
      {
        id: 'd2',
        platform: 'Amazon Wishlist',
        url: 'https://www.amazon.com/wishlist/pawscare',
        description: 'Purchase supplies directly for our shelter',
      },
    ],
    yearsActive: 15,
    size: 'large',
    causes: ['rescue', 'adoption', 'medical aid', 'education'],
    rating: 4.9,
    featured: true,
    createdAt: '2008-03-12',
  },
  {
    id: '2',
    name: 'Wildlife Guardians',
    logo: 'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=300&auto=format&fit=crop',
    description:
      'Protecting endangered wildlife species and their habitats through conservation efforts and education.',
    mission:
      'To preserve wildlife biodiversity and ensure the survival of endangered species for future generations.',
    location: {
      address: '456 Biodiversity Avenue, Near Cubbon Park',
      city: 'Bengaluru',
      country: 'India',
      coordinates: {
        lat: 12.9716,
        lng: 77.5946,
      },
    },
    contactInfo: {
      phone: '+91 8765432109',
      email: 'info@wildlifeguardians.org',
      website: 'https://www.wildlifeguardians.org',
      social: {
        facebook: 'https://facebook.com/wildlifeguardians',
        instagram: 'https://instagram.com/wildlifeguardians',
        twitter: 'https://twitter.com/wildlifeguard',
      },
    },
    services: [
      {
        id: 's1',
        name: 'Wildlife Rehabilitation',
        description: 'Rescue and rehabilitation of injured wildlife',
        icon: 'first-aid',
      },
      {
        id: 's2',
        name: 'Habitat Conservation',
        description: 'Protecting and restoring natural habitats',
        icon: 'tree',
      },
      {
        id: 's3',
        name: 'Education Programs',
        description: 'Wildlife education for schools and communities',
        icon: 'school',
      },
    ],
    volunteerOpportunities: [
      {
        id: 'v1',
        title: 'Field Researcher',
        description:
          'Assist our research team in monitoring wildlife populations',
        requirements: [
          'Biology background',
          'Wilderness experience',
          'Commitment of 2+ weeks',
        ],
      },
      {
        id: 'v2',
        title: 'Education Ambassador',
        description: 'Lead educational workshops about wildlife conservation',
        requirements: [
          'Public speaking skills',
          'Knowledge of wildlife conservation',
          'Weekday availability',
        ],
      },
    ],
    gallery: [
      {
        id: 'g1',
        title: 'Elk Population Study',
        imageUrl:
          'https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=800&auto=format&fit=crop',
        description: 'Our researchers tracking the local elk population',
      },
      {
        id: 'g2',
        title: 'Eagle Rehabilitation',
        imageUrl:
          'https://images.unsplash.com/photo-1622568538225-8eed4b236a98?q=80&w=800&auto=format&fit=crop',
        description:
          'Releasing a rehabilitated golden eagle back into the wild',
      },
    ],
    videos: [
      {
        id: 'vid1',
        title: 'The Importance of Wetlands',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail:
          'https://images.unsplash.com/photo-1568095175388-930a01aa41d3?q=80&w=500&auto=format&fit=crop',
      },
    ],
    impactStories: [
      {
        id: 'is1',
        title: 'Bringing Back the Wolves',
        story:
          'Our decade-long effort to reintroduce wolves to their native habitat has resulted in a thriving population of over 150 wolves.',
        imageUrl:
          'https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=600&auto=format&fit=crop',
        date: '2023-01-10',
      },
    ],
    donationLinks: [
      {
        id: 'd1',
        platform: 'Monthly Sponsorship',
        url: 'https://www.wildlifeguardians.org/sponsor',
        description: 'Sponsor a wildlife conservation project',
      },
    ],
    yearsActive: 22,
    size: 'medium',
    causes: [
      'wildlife conservation',
      'habitat protection',
      'research',
      'education',
    ],
    rating: 4.7,
    featured: true,
    createdAt: '2001-06-20',
  },
  {
    id: '3',
    name: 'Furry Friends Foundation',
    logo: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=300&auto=format&fit=crop',
    description:
      'Specializing in the rescue and rehabilitation of domestic pets, with a focus on senior and special needs animals.',
    mission:
      'To ensure that every pet, regardless of age or health condition, receives the love and care they deserve.',
    location: {
      address: '789 Pet Haven Lane, Hauz Khas',
      city: 'New Delhi',
      country: 'India',
      coordinates: {
        lat: 28.6139,
        lng: 77.209,
      },
    },
    contactInfo: {
      phone: '+91 7654321098',
      email: 'hello@furryfriends.org',
      website: 'https://www.furryfriends.org',
      social: {
        facebook: 'https://facebook.com/furryfriends',
        instagram: 'https://instagram.com/furryfriends',
      },
    },
    services: [
      {
        id: 's1',
        name: 'Senior Pet Care',
        description: 'Specialized care for elderly animals',
        icon: 'heart',
      },
      {
        id: 's2',
        name: 'Special Needs Adoption',
        description: 'Finding homes for pets with special needs',
        icon: 'users',
      },
      {
        id: 's3',
        name: 'Pet Therapy',
        description:
          'Bringing animal companions to hospitals and senior centers',
        icon: 'smile',
      },
    ],
    volunteerOpportunities: [
      {
        id: 'v1',
        title: 'Pet Therapy Volunteer',
        description: 'Visit hospitals and care facilities with therapy animals',
        requirements: [
          'Patient demeanor',
          'Reliable transportation',
          'Weekly commitment',
        ],
      },
    ],
    gallery: [
      {
        id: 'g1',
        title: 'Senior Dog Sanctuary',
        imageUrl:
          'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=800&auto=format&fit=crop',
        description: 'Our peaceful sanctuary space for senior dogs',
      },
    ],
    videos: [
      {
        id: 'vid1',
        title: 'The Joy of Pet Therapy',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail:
          'https://images.unsplash.com/photo-1596491123089-a902e88d40b9?q=80&w=500&auto=format&fit=crop',
      },
    ],
    impactStories: [
      {
        id: 'is1',
        title: "Bella's Second Chance",
        story:
          'Bella, a 12-year-old cat with diabetes, was overlooked by adopters until the Johnson family fell in love with her story.',
        imageUrl:
          'https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?q=80&w=600&auto=format&fit=crop',
        date: '2023-04-03',
      },
    ],
    donationLinks: [
      {
        id: 'd1',
        platform: 'Medical Fund',
        url: 'https://www.furryfriends.org/medical-fund',
        description: 'Support veterinary care for animals with special needs',
      },
    ],
    yearsActive: 8,
    size: 'small',
    causes: ['senior pets', 'special needs', 'therapy', 'adoption'],
    rating: 4.8,
    featured: false,
    createdAt: '2015-09-05',
  },
  {
    id: '4',
    name: 'Marine Life Protectors',
    logo: 'https://images.unsplash.com/photo-1567316106249-b2ecb8e52bed?q=80&w=300&auto=format&fit=crop',
    description:
      'Focused on ocean conservation, marine animal rescue, and educating the public about marine ecosystems.',
    mission:
      'To protect and preserve marine life and ocean ecosystems through direct action and public education.',
    location: {
      address: '101 Coastal Road, Near Marina Beach',
      city: 'Chennai',
      country: 'India',
      coordinates: {
        lat: 13.0827,
        lng: 80.2707,
      },
    },
    contactInfo: {
      phone: '+91 6543210987',
      email: 'contact@marineprotectors.org',
      website: 'https://www.marineprotectors.org',
      social: {
        facebook: 'https://facebook.com/marineprotectors',
        instagram: 'https://instagram.com/marineprotectors',
        twitter: 'https://twitter.com/marineprotect',
      },
    },
    services: [
      {
        id: 's1',
        name: 'Marine Rescue',
        description: 'Rescuing stranded or injured marine animals',
        icon: 'anchor',
      },
      {
        id: 's2',
        name: 'Beach Cleanups',
        description: 'Organizing community beach cleanup events',
        icon: 'trash',
      },
      {
        id: 's3',
        name: 'Ocean Education',
        description: 'Educational programs about marine conservation',
        icon: 'book',
      },
    ],
    volunteerOpportunities: [
      {
        id: 'v1',
        title: 'Beach Cleanup Leader',
        description: 'Coordinate volunteers during beach cleanup events',
        requirements: [
          'Leadership skills',
          'Environmental knowledge',
          'Weekend availability',
        ],
      },
    ],
    gallery: [
      {
        id: 'g1',
        title: 'Sea Turtle Rescue',
        imageUrl:
          'https://images.unsplash.com/photo-1551279880-03041531948f?q=80&w=800&auto=format&fit=crop',
        description: 'Rescuing an endangered sea turtle entangled in plastic',
      },
    ],
    videos: [
      {
        id: 'vid1',
        title: 'Coral Reef Restoration Project',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail:
          'https://images.unsplash.com/photo-1546026423-cc4642628d2b?q=80&w=500&auto=format&fit=crop',
      },
    ],
    impactStories: [
      {
        id: 'is1',
        title: 'Saving the Mangroves',
        story:
          'Our mangrove restoration project has replanted over 5,000 trees, creating new habitats for countless marine species.',
        imageUrl:
          'https://images.unsplash.com/photo-1559539618-60c40da7c55c?q=80&w=600&auto=format&fit=crop',
        date: '2023-02-28',
      },
    ],
    donationLinks: [
      {
        id: 'd1',
        platform: 'Rescue Fund',
        url: 'https://www.marineprotectors.org/rescue',
        description: 'Support our marine animal rescue operations',
      },
    ],
    yearsActive: 12,
    size: 'medium',
    causes: ['marine conservation', 'rescue', 'education', 'cleanup'],
    rating: 4.6,
    featured: false,
    createdAt: '2011-07-14',
  },
  {
    id: '5',
    name: 'Exotic Animal Sanctuary',
    logo: 'https://images.unsplash.com/photo-1559094022-e75ee4449659?q=80&w=300&auto=format&fit=crop',
    description:
      'Providing sanctuary and rehabilitation for exotic animals rescued from illegal trade and improper ownership.',
    mission:
      'To offer a safe haven for exotic animals and educate the public about the needs of these special creatures.',
    location: {
      address: '567 Sanctuary Road, Ranthambore',
      city: 'Jaipur',
      country: 'India',
      coordinates: {
        lat: 26.9124,
        lng: 75.7873,
      },
    },
    contactInfo: {
      phone: '+91 5432109876',
      email: 'info@exoticsanctuary.org',
      website: 'https://www.exoticsanctuary.org',
      social: {
        facebook: 'https://facebook.com/exoticsanctuary',
        instagram: 'https://instagram.com/exoticsanctuary',
      },
    },
    services: [
      {
        id: 's1',
        name: 'Exotic Animal Rescue',
        description:
          'Rescuing exotic animals from illegal trade and improper care',
        icon: 'alert-triangle',
      },
      {
        id: 's2',
        name: 'Permanent Sanctuary',
        description: 'Providing lifelong care for rescued exotic animals',
        icon: 'shield',
      },
      {
        id: 's3',
        name: 'Public Education',
        description:
          'Educational programs about exotic animals and wildlife trafficking',
        icon: 'book-open',
      },
    ],
    volunteerOpportunities: [
      {
        id: 'v1',
        title: 'Animal Care Assistant',
        description: 'Help with daily care of sanctuary animals',
        requirements: [
          'Animal handling experience',
          'Physical fitness',
          'Weekly commitment',
        ],
      },
    ],
    gallery: [
      {
        id: 'g1',
        title: 'Big Cat Habitat',
        imageUrl:
          'https://images.unsplash.com/photo-1603993097397-89c963e325c7?q=80&w=800&auto=format&fit=crop',
        description: 'Our spacious habitats for rescued big cats',
      },
    ],
    videos: [
      {
        id: 'vid1',
        title: 'The Problems with Exotic Pet Trade',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail:
          'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=500&auto=format&fit=crop',
      },
    ],
    impactStories: [
      {
        id: 'is1',
        title: "Raja's New Life",
        story:
          'Raja, a tiger rescued from a roadside zoo, now enjoys a spacious natural habitat with proper care for the first time in his life.',
        imageUrl:
          'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=600&auto=format&fit=crop',
        date: '2023-03-15',
      },
    ],
    donationLinks: [
      {
        id: 'd1',
        platform: 'Animal Sponsorship',
        url: 'https://www.exoticsanctuary.org/sponsor',
        description: "Sponsor a specific animal's care and rehabilitation",
      },
    ],
    yearsActive: 18,
    size: 'large',
    causes: ['exotic animals', 'rescue', 'sanctuary', 'education'],
    rating: 4.5,
    featured: true,
    createdAt: '2005-11-30',
  },
];

export const causes = [
  'rescue',
  'adoption',
  'medical aid',
  'wildlife conservation',
  'habitat protection',
  'education',
  'senior pets',
  'special needs',
  'therapy',
  'exotic animals',
  'sanctuary',
  'research',
];
