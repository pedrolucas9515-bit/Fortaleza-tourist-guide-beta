export type Language = 'en' | 'pt' | 'es' | 'fr';

export type Category = 'Beaches' | 'Restaurants' | 'Culture' | 'Parks' | 'Historical Places' | 'Nightlife';

export type RestaurantCategory = 'Seafood' | 'Brazilian Food' | 'Cafés' | 'Beach Restaurants' | 'Fine Dining' | 'Fast Food' | 'Italian';

export interface Coords {
  lat: number;
  lng: number;
}

export interface Restaurant {
  id: string;
  name: Record<Language, string>;
  cuisine: Record<Language, string>;
  rating: number;
  address: Record<Language, string>;
  imageUrl: string;
  openingHours: Record<Language, string>;
  description: Record<Language, string>;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  category: RestaurantCategory;
  coords: Coords;
}

export interface Attraction {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  address: Record<Language, string>;
  openingHours: Record<Language, string>;
  rating: number;
  category: Category;
  imageUrl: string;
  coords: Coords;
  nearbyRestaurantIds: string[];
}
