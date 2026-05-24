
export type Category = 'Beaches' | 'Restaurants' | 'Culture' | 'Parks' | 'Historical Places' | 'Nightlife';

export type RestaurantCategory = 'Seafood' | 'Brazilian Food' | 'Cafés' | 'Beach Restaurants' | 'Fine Dining' | 'Fast Food' | 'Italian';

export interface Coords {
  lat: number;
  lng: number;
}

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
  category: RestaurantCategory;
  distance?: string;
  coords: Coords;
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
  coords: Coords;
  nearbyRestaurantIds: string[];
}

export type Language = 'en' | 'pt' | 'es' | 'fr';
