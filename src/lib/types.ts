
export type Category = 'Beaches' | 'Restaurants' | 'Culture' | 'Parks' | 'Historical Places' | 'Nightlife';

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  address: string;
  imageUrl: string;
  openingHours: string;
  description: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  distance?: string; // Distance from a specific attraction
}

export interface Attraction {
  id: string;
  title: string;
  description: string;
  address: string;
  openingHours: string;
  rating: number;
  category: Category;
  imageUrl: string;
  coords: {
    lat: number;
    lng: number;
  };
  nearbyRestaurantIds: string[]; // Reference by ID to avoid duplication
}

export type Language = 'en' | 'pt' | 'es' | 'fr';
