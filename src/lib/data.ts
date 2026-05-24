
import { Attraction, Restaurant } from './types';
import placeholderData from '@/app/lib/placeholder-images.json';

const getImg = (id: string) => placeholderData.placeholderImages.find(img => img.id === id)?.imageUrl || '';

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'coco-bambu',
    name: 'Coco Bambu Beira Mar',
    cuisine: 'Seafood',
    rating: 4.8,
    address: 'Av. Beira Mar, 3698',
    openingHours: '11:30 - 00:00',
    priceRange: '$$$',
    description: 'The most famous seafood restaurant in Fortaleza, known for its generous portions and beautiful view of the Atlantic.',
    imageUrl: getImg('rest-seafood-1')
  },
  {
    id: 'crocobeach',
    name: 'Crocobeach',
    cuisine: 'Beach Food & Seafood',
    rating: 4.7,
    address: 'Av. Clóvis Arrais Maia, 3125',
    openingHours: '08:00 - 18:00',
    priceRange: '$$',
    description: 'A massive beach club at Praia do Futuro offering swimming pools, live shows, and local delicacies like crab.',
    imageUrl: getImg('rest-beach-1')
  },
  {
    id: 'santa-clara',
    name: 'Santa Clara Café Orgânico',
    cuisine: 'Café',
    rating: 4.9,
    address: 'R. Dragão do Mar, 81',
    openingHours: '08:00 - 22:00',
    priceRange: '$',
    description: 'Premium organic coffee from Ceará served in a cozy atmosphere inside the Dragão do Mar cultural center.',
    imageUrl: getImg('rest-cafe-1')
  },
  {
    id: 'lo-restaurante',
    name: "L'Ô Restaurant",
    cuisine: 'Fine Dining / French-Italian',
    rating: 4.9,
    address: 'Av. Pessoa Anta, 217',
    openingHours: '19:00 - 23:30',
    priceRange: '$$$$',
    description: 'Sophisticated dining with modern European influences. Perfect for a romantic evening or special celebration.',
    imageUrl: getImg('rest-fine-1')
  },
  {
    id: 'cantinho-faustino',
    name: 'Cantinho do Faustino',
    cuisine: 'Regional Brazilian',
    rating: 4.6,
    address: 'R. Tibúrcio Cavalcante, 736',
    openingHours: '11:00 - 23:00',
    priceRange: '$$',
    description: 'Classic Fortaleza restaurant specializing in local flavors like sun-dried meat (carne de sol) and seafood.',
    imageUrl: getImg('rest-regional-1')
  },
  {
    id: 'burgues-burger',
    name: 'Burguês Burger',
    cuisine: 'Fast Food / Gourmet Burgers',
    rating: 4.5,
    address: 'Various Locations',
    openingHours: '17:00 - 01:00',
    priceRange: '$',
    description: 'Voted one of the best burgers in the city, using high-quality local ingredients and artisan buns.',
    imageUrl: getImg('rest-fast-1')
  }
];

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'iracema',
    title: 'Praia de Iracema',
    description: 'Iconic beach known for its bohemian spirit, sunset views, and the Iracema Guardiã statue.',
    address: 'Praia de Iracema, Fortaleza - CE',
    openingHours: 'Open 24h',
    rating: 4.7,
    category: 'Beaches',
    imageUrl: getImg('iracema'),
    coords: { lat: -3.7208, lng: -38.5173 },
    nearbyRestaurantIds: ['lo-restaurante', 'cantinho-faustino', 'burgues-burger']
  },
  {
    id: 'futuro',
    title: 'Praia do Futuro',
    description: 'The most popular beach for swimming, famous for its massive "mega-barracas" offering full infrastructure.',
    address: 'Av. Clóvis Arrais Maia, Fortaleza - CE',
    openingHours: 'Open 24h',
    rating: 4.8,
    category: 'Beaches',
    imageUrl: getImg('futuro'),
    coords: { lat: -3.7383, lng: -38.4552 },
    nearbyRestaurantIds: ['crocobeach', 'burgues-burger']
  },
  {
    id: 'beiramar',
    title: 'Beira Mar',
    description: 'The main seaside promenade, perfect for walking, jogging, and visiting the traditional fish market.',
    address: 'Av. Beira Mar, Fortaleza - CE',
    openingHours: 'Open 24h',
    rating: 4.9,
    category: 'Beaches',
    imageUrl: getImg('beiramar'),
    coords: { lat: -3.7251, lng: -38.4988 },
    nearbyRestaurantIds: ['coco-bambu', 'cantinho-faustino']
  },
  {
    id: 'mercado',
    title: 'Mercado Central',
    description: 'A massive multi-story market filled with local crafts, lace, cashews, and traditional Ceará souvenirs.',
    address: 'Av. Alberto Nepomuceno, 199',
    openingHours: '08:00 - 18:00',
    rating: 4.6,
    category: 'Culture',
    imageUrl: getImg('mercado'),
    coords: { lat: -3.7231, lng: -38.5255 },
    nearbyRestaurantIds: ['santa-clara', 'lo-restaurante']
  },
  {
    id: 'dragao',
    title: 'Centro Dragão do Mar',
    description: 'The main cultural hub of the city, featuring cinemas, theaters, a planetarium, and museums.',
    address: 'R. Dragão do Mar, 81',
    openingHours: '09:00 - 22:00',
    rating: 4.8,
    category: 'Culture',
    imageUrl: getImg('dragao'),
    coords: { lat: -3.7219, lng: -38.5209 },
    nearbyRestaurantIds: ['santa-clara', 'lo-restaurante', 'burgues-burger']
  },
  {
    id: 'ponte',
    title: 'Ponte dos Ingleses',
    description: 'Also known as the Metal Bridge, it is one of the best spots to watch the sunset over the Atlantic.',
    address: 'R. dos Pacajús, 1',
    openingHours: 'Temporarily Closed for Reno',
    rating: 4.5,
    category: 'Historical Places',
    imageUrl: getImg('ponte'),
    coords: { lat: -3.7198, lng: -38.5178 },
    nearbyRestaurantIds: ['lo-restaurante', 'santa-clara']
  },
  {
    id: 'coco',
    title: 'Parque do Cocó',
    description: 'A vast ecological park protecting the Cocó River mangrove, offering trails and boat tours.',
    address: 'Av. Padre Antônio Tomás, s/n',
    openingHours: '05:30 - 22:00',
    rating: 4.7,
    category: 'Parks',
    imageUrl: getImg('coco'),
    coords: { lat: -3.7468, lng: -38.4835 },
    nearbyRestaurantIds: ['cantinho-faustino', 'burgues-burger']
  },
  {
    id: 'catedral',
    title: 'Catedral Metropolitana',
    description: 'An imposing neo-gothic cathedral inspired by the Cologne Cathedral in Germany.',
    address: 'Praça da Sé, s/n - Centro',
    openingHours: '08:00 - 12:00, 14:00 - 18:00',
    rating: 4.7,
    category: 'Historical Places',
    imageUrl: getImg('catedral'),
    coords: { lat: -3.7239, lng: -38.5264 },
    nearbyRestaurantIds: ['santa-clara', 'lo-restaurante']
  },
  {
    id: 'fortaleza',
    title: 'Fortaleza de N. S. da Assunção',
    description: 'The historic military fort where the city of Fortaleza was founded.',
    address: 'Av. Alberto Nepomuceno, s/n',
    openingHours: '09:00 - 12:00, 14:00 - 17:00',
    rating: 4.6,
    category: 'Historical Places',
    imageUrl: getImg('fortaleza'),
    coords: { lat: -3.7225, lng: -38.5250 },
    nearbyRestaurantIds: ['santa-clara', 'lo-restaurante']
  }
];
