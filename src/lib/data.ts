import { Attraction, Restaurant } from './types';
import placeholderData from '@/app/lib/placeholder-images.json';

const getImg = (id: string) => placeholderData.placeholderImages.find(img => img.id === id)?.imageUrl || '';

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'coco-bambu',
    name: {
      en: 'Coco Bambu Beira Mar',
      pt: 'Coco Bambu Beira Mar',
      es: 'Coco Bambu Beira Mar',
      fr: 'Coco Bambu Beira Mar'
    },
    cuisine: {
      en: 'Seafood',
      pt: 'Frutos do Mar',
      es: 'Mariscos',
      fr: 'Fruits de mer'
    },
    category: 'Seafood',
    rating: 4.8,
    address: {
      en: '3698 Beira Mar Avenue',
      pt: 'Av. Beira Mar, 3698',
      es: 'Avenida Beira Mar, 3698',
      fr: 'Avenue Beira Mar, 3698'
    },
    openingHours: {
      en: '11:30 AM - 12:00 AM',
      pt: '11:30 - 00:00',
      es: '11:30 - 00:00',
      fr: '11:30 - 00:00'
    },
    priceRange: '$$$',
    description: {
      en: 'The most iconic seafood destination in Fortaleza. Famous for huge platters of shrimp and lobster with a stunning ocean view.',
      pt: 'O destino de frutos do mar mais icônico de Fortaleza. Famoso por enormes travessas de camarão e lagosta com uma vista deslumbrante para o mar.',
      es: 'El destino de mariscos más icónico de Fortaleza. Famoso por sus enormes bandejas de camarones y langostas con una vista impresionante al mar.',
      fr: 'La destination de fruits de mer la plus emblématique de Fortaleza. Célèbre pour ses immenses plateaux de crevettes et de homards avec une vue imprenable sur l\'océan.'
    },
    imageUrl: getImg('rest-seafood-1'),
    coords: { lat: -3.7258, lng: -38.4905 }
  },
  {
    id: 'crocobeach',
    name: {
      en: 'Crocobeach',
      pt: 'Crocobeach',
      es: 'Crocobeach',
      fr: 'Crocobeach'
    },
    cuisine: {
      en: 'Regional & Seafood',
      pt: 'Regional e Frutos do Mar',
      es: 'Regional y Mariscos',
      fr: 'Régional et Fruits de mer'
    },
    category: 'Beach Restaurants',
    rating: 4.7,
    address: {
      en: '3125 Clóvis Arrais Maia Avenue',
      pt: 'Av. Clóvis Arrais Maia, 3125',
      es: 'Avenida Clóvis Arrais Maia, 3125',
      fr: 'Avenue Clóvis Arrais Maia, 3125'
    },
    openingHours: {
      en: '08:00 AM - 06:00 PM',
      pt: '08:00 - 18:00',
      es: '08:00 - 18:00',
      fr: '08h00 - 18h00'
    },
    priceRange: '$$',
    description: {
      en: 'A massive beach club at Praia do Futuro. Offers the best infrastructure, swimming pools, and the famous Thursday night crab feast.',
      pt: 'Um enorme clube de praia na Praia do Futuro. Oferece a melhor infraestrutura, piscinas e a famosa caranguejada de quinta-feira à noite.',
      es: 'Un enorme club de playa en Praia do Futuro. Ofrece la mejor infraestructura, piscinas y la famosa fiesta del cangrejo de los jueves por la noche.',
      fr: 'Un immense club de plage à Praia do Futuro. Offre la meilleure infrastructure, des piscines et la célèbre fête du crabe le jeudi soir.'
    },
    imageUrl: getImg('rest-beach-1'),
    coords: { lat: -3.7383, lng: -38.4552 }
  },
  {
    id: 'santa-clara',
    name: {
      en: 'Santa Clara Organic Coffee',
      pt: 'Santa Clara Café Orgânico',
      es: 'Santa Clara Café Orgánico',
      fr: 'Café Bio Santa Clara'
    },
    cuisine: {
      en: 'Specialty Coffee & Snacks',
      pt: 'Cafés Especiais e Lanches',
      es: 'Cafés Especiales y Aperitivos',
      fr: 'Cafés de spécialité et collations'
    },
    category: 'Cafés',
    rating: 4.9,
    address: {
      en: '81 Dragão do Mar Street',
      pt: 'R. Dragão do Mar, 81',
      es: 'Calle Dragão do Mar, 81',
      fr: 'Rue Dragão do Mar, 81'
    },
    openingHours: {
      en: '08:00 AM - 10:00 PM',
      pt: '08:00 - 22:00',
      es: '08:00 - 22:00',
      fr: '08h00 - 22h00'
    },
    priceRange: '$',
    description: {
      en: 'Located in the Dragão do Mar cultural center, serving award-winning organic coffee from the mountains of Ceará.',
      pt: 'Localizado no centro cultural Dragão do Mar, servindo cafés orgânicos premiados das serras do Ceará.',
      es: 'Ubicado en el centro cultural Dragão do Mar, sirve cafés orgánicos galardonados de las montañas de Ceará.',
      fr: 'Situé dans le centre culturel Dragão do Mar, servant un café biologique primé des montagnes du Ceará.'
    },
    imageUrl: getImg('rest-cafe-1'),
    coords: { lat: -3.7219, lng: -38.5209 }
  },
  {
    id: 'lo-restaurante',
    name: {
      en: "L'Ô Restaurant",
      pt: "L'Ô Restaurante",
      es: "L'Ô Restaurante",
      fr: "L'Ô Restaurant"
    },
    cuisine: {
      en: 'Contemporary European',
      pt: 'Europeia Contemporânea',
      es: 'Europea Contemporánea',
      fr: 'Européenne Contemporaine'
    },
    category: 'Fine Dining',
    rating: 4.9,
    address: {
      en: '217 Pessoa Anta Avenue',
      pt: 'Av. Pessoa Anta, 217',
      es: 'Avenida Pessoa Anta, 217',
      fr: 'Avenue Pessoa Anta, 217'
    },
    openingHours: {
      en: '07:00 PM - 11:30 PM',
      pt: '19:00 - 23:30',
      es: '19:00 - 23:30',
      fr: '19h00 - 23h30'
    },
    priceRange: '$$$$',
    description: {
      en: 'Sophisticated venue featuring a modern menu with French and Italian influences in a stunning architectural setting.',
      pt: 'Local sofisticado com um menu moderno de influências francesas e italianas em um ambiente arquitetônico deslumbrante.',
      es: 'Lugar sofisticado con un menú moderno de influencias francesas e italianas en un entorno arquitectónico impresionante.',
      fr: 'Lieu sophistiqué doté d\'un menu moderne aux influences françaises et italiennes dans un cadre architectural époustouflant.'
    },
    imageUrl: getImg('rest-fine-1'),
    coords: { lat: -3.7205, lng: -38.5215 }
  },
  {
    id: 'cantinho-faustino',
    name: {
      en: 'Faustino Corner',
      pt: 'Cantinho do Faustino',
      es: 'Rincón de Faustino',
      fr: 'Le Coin de Faustino'
    },
    cuisine: {
      en: 'Regional Brazilian',
      pt: 'Regional Brasileira',
      es: 'Regional Brasileña',
      fr: 'Régional Brésilien'
    },
    category: 'Brazilian Food',
    rating: 4.6,
    address: {
      en: '736 Tibúrcio Cavalcante Street',
      pt: 'R. Tibúrcio Cavalcante, 736',
      es: 'Calle Tibúrcio Cavalcante, 736',
      fr: 'Rue Tibúrcio Cavalcante, 736'
    },
    openingHours: {
      en: '11:00 AM - 11:00 PM',
      pt: '11:00 - 23:00',
      es: '11:00 - 23:00',
      fr: '11h00 - 23h00'
    },
    priceRange: '$$',
    description: {
      en: 'A classic local spot famous for "Carne de Sol" (sun-dried meat) and traditional side dishes in a cozy atmosphere.',
      pt: 'Um local clássico famoso pela Carne de Sol e acompanhamentos tradicionais em um ambiente acolhedor.',
      es: 'Un lugar clásico famoso por su Carne de Sol y acompañamientos tradicionales en un ambiente acogedor.',
      fr: 'Un lieu classique célèbre pour sa Carne de Sol et ses accompagnements traditionnels dans une ambiance chaleureuse.'
    },
    imageUrl: getImg('rest-regional-1'),
    coords: { lat: -3.7285, lng: -38.5085 }
  }
];

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'iracema',
    title: {
      en: 'Iracema Beach',
      pt: 'Praia de Iracema',
      es: 'Playa de Iracema',
      fr: 'Plage d\'Iracema'
    },
    description: {
      en: 'Iconic beach known for its bohemian spirit, sunset views, and the famous Iracema statue.',
      pt: 'Praia icônica conhecida por seu espírito boêmio, vista do pôr do sol e a famosa estátua de Iracema.',
      es: 'Playa icónica conocida por su espíritu bohemio, vistas al atardecer y la famosa estatua de Iracema.',
      fr: 'Plage emblématique connue pour son esprit bohème, ses vues sur le coucher du soleil et sa célèbre statue d\'Iracema.'
    },
    address: {
      en: 'Iracema Beach, Fortaleza - CE',
      pt: 'Praia de Iracema, Fortaleza - CE',
      es: 'Playa de Iracema, Fortaleza - CE',
      fr: 'Plage d\'Iracema, Fortaleza - CE'
    },
    openingHours: {
      en: 'Open 24h',
      pt: 'Aberto 24h',
      es: 'Abierto 24h',
      fr: 'Ouvert 24h'
    },
    rating: 4.7,
    category: 'Beaches',
    imageUrl: getImg('iracema'),
    coords: { lat: -3.7208, lng: -38.5173 },
    nearbyRestaurantIds: ['lo-restaurante', 'marcel', 'burgues-burger']
  },
  {
    id: 'futuro',
    title: {
      en: 'Future Beach',
      pt: 'Praia do Futuro',
      es: 'Playa del Futuro',
      fr: 'Plage du Futur'
    },
    description: {
      en: 'The most popular beach for swimming, famous for its massive "mega-barracas" offering full infrastructure.',
      pt: 'A praia mais popular para banho, famosa pelas suas enormes barracas que oferecem infraestrutura completa.',
      es: 'La playa más popular para nadar, famosa por sus enormes barracas que ofrecen infraestructura completa.',
      fr: 'La plage la plus populaire pour la baignade, célèbre pour ses énormes paillotes offrant une infrastructure complète.'
    },
    address: {
      en: 'Clóvis Arrais Maia Avenue, Fortaleza - CE',
      pt: 'Av. Clóvis Arrais Maia, Fortaleza - CE',
      es: 'Avenida Clóvis Arrais Maia, Fortaleza - CE',
      fr: 'Avenue Clóvis Arrais Maia, Fortaleza - CE'
    },
    openingHours: {
      en: 'Open 24h',
      pt: 'Aberto 24h',
      es: 'Abierto 24h',
      fr: 'Ouvert 24h'
    },
    rating: 4.8,
    category: 'Beaches',
    imageUrl: getImg('futuro'),
    coords: { lat: -3.7383, lng: -38.4552 },
    nearbyRestaurantIds: ['crocobeach', 'burgues-burger']
  },
  {
    id: 'mercado',
    title: {
      en: 'Central Market',
      pt: 'Mercado Central',
      es: 'Mercado Central',
      fr: 'Marché Central'
    },
    description: {
      en: 'A massive multi-story market filled with local crafts, lace, cashews, and traditional Ceará souvenirs.',
      pt: 'Um enorme mercado de vários andares repleto de artesanato local, rendas, castanhas e lembranças tradicionais do Ceará.',
      es: 'Un enorme mercado de varios pisos lleno de artesanías locales, encajes, castañas y recuerdos tradicionales de Ceará.',
      fr: 'Un immense marché à plusieurs étages regorgeant d\'artisanat local, de dentelle, de noix de cajou et de souvenirs traditionnels du Ceará.'
    },
    address: {
      en: '199 Alberto Nepomuceno Avenue',
      pt: 'Av. Alberto Nepomuceno, 199',
      es: 'Avenida Alberto Nepomuceno, 199',
      fr: 'Avenue Alberto Nepomuceno, 199'
    },
    openingHours: {
      en: '08:00 AM - 06:00 PM',
      pt: '08:00 - 18:00',
      es: '08:00 - 18:00',
      fr: '08h00 - 18h00'
    },
    rating: 4.6,
    category: 'Culture',
    imageUrl: getImg('mercado'),
    coords: { lat: -3.7231, lng: -38.5255 },
    nearbyRestaurantIds: ['santa-clara', 'lo-restaurante']
  },
  {
    id: 'coco',
    title: {
      en: 'Cocó Park',
      pt: 'Parque do Cocó',
      es: 'Parque de Cocó',
      fr: 'Parc du Cocó'
    },
    description: {
      en: 'A vast ecological park protecting the Cocó River mangrove, offering trails and boat tours.',
      pt: 'Um vasto parque ecológico que protege o manguezal do Rio Cocó, oferecendo trilhas e passeios de barco.',
      es: 'Un vasto parque ecológico que protege el manglar del río Cocó, con senderos y paseos en bote.',
      fr: 'Un vaste parc écologique protégeant la mangrove de la rivière Cocó, proposant des sentiers et des balades en bateau.'
    },
    address: {
      en: 'Padre Antônio Tomás Avenue, Fortaleza - CE',
      pt: 'Av. Padre Antônio Tomás, s/n',
      es: 'Avenida Padre Antônio Tomás, s/n',
      fr: 'Avenue Padre Antônio Tomás, s/n'
    },
    openingHours: {
      en: '05:30 AM - 10:00 PM',
      pt: '05:30 - 22:00',
      es: '05:30 - 22:00',
      fr: '05h30 - 22h00'
    },
    rating: 4.7,
    category: 'Parks',
    imageUrl: getImg('coco'),
    coords: { lat: -3.7468, lng: -38.4835 },
    nearbyRestaurantIds: ['giz-cozinha', 'moleskine', 'cantinho-faustino']
  }
];
