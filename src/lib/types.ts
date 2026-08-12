export type Language = 'en' | 'pt' | 'es' | 'fr';

export type Category = 'Beaches' | 'Restaurants' | 'Culture' | 'Parks' | 'Historical Places' | 'Nightlife';

export type RestaurantCategory = 'Seafood' | 'Brazilian Food' | 'Cafés' | 'Beach Restaurants' | 'Fine Dining' | 'Fast Food' | 'Italian';

export type HotelCategory = 'Luxury' | 'Boutique' | 'Beachfront' | 'Business' | 'Budget';

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

export interface Hotel {
  id: string;
  name: Record<Language, string>;
  category: HotelCategory;
  rating: number;
  pricePerNight: number;
  address: Record<Language, string>;
  imageUrl: string;
  description: Record<Language, string>;
  amenities: Record<Language, string[]>;
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

export interface Badge {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  imagePath: string;
  target: number;
}

export interface BadgeProgress {
  visitedAttractions: string[];
  visitedRestaurants: string[];
  visitedHotels: string[];
  visitedCultural: string[];
  viewedTransport: boolean;
  viewedCuriosities: boolean;
  viewedSafety: boolean;
  viewedSlang: boolean;
  unlockedBadgeIds: string[];
}
