import { Attraction, Restaurant, Hotel } from './types';
import placeholderData from '@/app/lib/placeholder-images.json';

const getImg = (id: string) => placeholderData.placeholderImages.find(img => img.id === id)?.imageUrl || '';

export const HOTELS: Hotel[] = [
  {
    id: 'gran-marquise',
    name: {
      en: 'Hotel Gran Marquise',
      pt: 'Hotel Gran Marquise',
      es: 'Hotel Gran Marquise',
      fr: 'Hôtel Gran Marquise'
    },
    category: 'Luxury',
    rating: 5.0,
    pricePerNight: 850,
    address: {
      en: '3980 Beira Mar Avenue, Mucuripe',
      pt: 'Av. Beira Mar, 3980, Mucuripe',
      es: 'Avenida Beira Mar, 3980, Mucuripe',
      fr: 'Avenue Beira Mar, 3980, Mucuripe'
    },
    description: {
      en: 'The most prestigious luxury hotel in Fortaleza, located in the elegant Mucuripe area with a stunning rooftop pool.',
      pt: 'O hotel de luxo mais prestigiado de Fortaleza, localizado na elegante área do Mucuripe, com uma piscina deslumbrante na cobertura.',
      es: 'El hotel de lujo más prestigioso de Fortaleza, ubicado en la elegante zona de Mucuripe con una impresionante piscina en la azotea.',
      fr: 'L\'hôtel de luxe le plus prestigieux de Fortaleza, situé dans le quartier élégant de Mucuripe avec une superbe piscine sur le toit.'
    },
    amenities: {
      en: ['Spa', 'Rooftop Pool', 'Fitness Center', 'Ocean View'],
      pt: ['Spa', 'Piscina na Cobertura', 'Academia', 'Vista Mar'],
      es: ['Spa', 'Piscina en la Azotea', 'Gimnasio', 'Vista al Mar'],
      fr: ['Spa', 'Piscine sur le toit', 'Salle de sport', 'Vue sur la mer']
    },
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/da/c7/9f/caption.jpg?w=900&h=500&s=1',
    coords: { lat: -3.7275, lng: -38.4865 }
  },
  {
    id: 'villa-mayor',
    name: {
      en: 'Hotel Villa Mayor',
      pt: 'Hotel Villa Mayor',
      es: 'Hotel Villa Mayor',
      fr: 'Hôtel Villa Mayor'
    },
    category: 'Boutique',
    rating: 4.7,
    pricePerNight: 380,
    address: {
      en: '115 Visconde de Mauá Street, Meireles',
      pt: 'Rua Visconde de Mauá, 115, Meireles',
      es: 'Calle Visconde de Mauá, 115, Meireles',
      fr: 'Rue Visconde de Mauá, 115, Meireles'
    },
    description: {
      en: 'A charming historical-style hotel inspired by the architecture of old Fortaleza, located steps away from the Beira Mar.',
      pt: 'Um charmoso hotel de estilo histórico inspirado na arquitetura da antiga Fortaleza, localizado a poucos passos da Beira Mar.',
      es: 'Un encantador hotel de estilo histórico inspirado en la arquitectura de la antigua Fortaleza, ubicado a pocos pasos de Beira Mar.',
      fr: 'Un charmant hôtel de style historique inspiré de l\'architecture du vieux Fortaleza, situé à quelques pas de Beira Mar.'
    },
    amenities: {
      en: ['Garden Pool', 'Free Breakfast', 'Colonial Decor'],
      pt: ['Piscina com Jardim', 'Café da Manhã Grátis', 'Decoração Colonial'],
      es: ['Piscina con Jardín', 'Desayuno Gratis', 'Decoración Colonial'],
      fr: ['Piscine de jardin', 'Petit-déjeuner gratuit', 'Décoration coloniale']
    },
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/345279503.jpg?k=e6f43913031c30c3410ff0618b2084cf292deba04382104d7f9f95a1d95915b9&o=',
    coords: { lat: -3.7255, lng: -38.4985 }
  },
  {
    id: 'quality-fortaleza',
    name: {
      en: 'Quality Hotel Fortaleza',
      pt: 'Quality Hotel Fortaleza',
      es: 'Quality Hotel Fortaleza',
      fr: 'Quality Hotel Fortaleza'
    },
    category: 'Business',
    rating: 4.5,
    pricePerNight: 320,
    address: {
      en: '1310 Beira Mar Avenue, Meireles',
      pt: 'Av. Beira Mar, 1310, Meireles',
      es: 'Avenida Beira Mar, 1310, Meireles',
      fr: 'Avenue Beira Mar, 1310, Meireles'
    },
    description: {
      en: 'A premier choice for business travelers, featuring modern meeting facilities and a strategic location in the heart of the business district.',
      pt: 'Uma escolha premium para viajantes de negócios, com instalações modernas para reuniões e localização estratégica no coração do distrito empresarial.',
      es: 'Una opción de primer nivel para viajeros de negocios, con modernas instalaciones para reuniones y una ubicación estratégica en el corazón del distrito de negocios.',
      fr: 'Un choix de premier ordre pour les voyageurs d\'affaires, doté d\'installations de réunion modernes et d\'un emplacement stratégique au cœur du quartier des affaires.'
    },
    amenities: {
      en: ['Business Center', 'High-Speed Wi-Fi', 'Meeting Rooms', 'Gym'],
      pt: ['Centro de Negócios', 'Wi-Fi de Alta Velocidade', 'Salas de Reunião', 'Academia'],
      es: ['Centro de Negocios', 'Wi-Fi de Alta Velocidad', 'Salas de Reunión', 'Gimnasio'],
      fr: ['Centre d\'affaires', 'Wi-Fi haut débit', 'Salles de réunion', 'Salle de sport']
    },
    imageUrl: 'https://www.pacotestravel.com.br/img/pacote/quality-hotel-fortaleza/vista-frontal-156.jpeg',
    coords: { lat: -3.7315, lng: -38.4815 }
  },
  {
    id: 'stop-way-fortaleza',
    name: {
      en: 'Stop Way Hotel Fortaleza',
      pt: 'Stop Way Hotel Fortaleza',
      es: 'Stop Way Hotel Fortaleza',
      fr: 'Stop Way Hotel Fortaleza'
    },
    category: 'Budget',
    rating: 4.2,
    pricePerNight: 210,
    address: {
      en: '1500 Monsenhor Tabosa Avenue, Iracema',
      pt: 'Av. Monsenhor Tabosa, 1500, Iracema',
      es: 'Avenida Monsenhor Tabosa, 1500, Iracema',
      fr: 'Avenue Monsenhor Tabosa, 1500, Iracema'
    },
    description: {
      en: 'Practical and affordable accommodation near Praia de Iracema. Perfect for budget-conscious travelers looking for comfort and location.',
      pt: 'Acomodação prática e acessível perto da Praia de Iracema. Perfeito para viajantes focados em custo-benefício que buscam conforto e localização.',
      es: 'Alojamiento práctico y asequible cerca de Praia de Iracema. Perfecto para viajeros que cuidan su presupuesto y buscan comodidad y ubicación.',
      fr: 'Hébergement pratique et abordable à proximité de Praia de Iracema. Parfait pour les voyageurs soucieux de leur budget à la recherche de confort et d\'emplacement.'
    },
    amenities: {
      en: ['Free Wi-Fi', 'Air Conditioning', 'Breakfast Included'],
      pt: ['Wi-Fi Grátis', 'Ar Condicionado', 'Café da Manhã Incluso'],
      es: ['Wi-Fi Gratis', 'Aire Acondicionado', 'Desayuno Incluido'],
      fr: ['Wi-Fi gratuit', 'Climatisation', 'Petit-déjeuner inclus']
    },
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/36/60/e9/fachada.jpg?w=900&h=500&s=1',
    coords: { lat: -3.7235, lng: -38.5115 }
  },
  {
    id: 'seara-praia',
    name: {
      en: 'Seara Praia Hotel',
      pt: 'Seara Praia Hotel',
      es: 'Seara Praia Hotel',
      fr: 'Hôtel Seara Praia'
    },
    category: 'Beachfront',
    rating: 4.6,
    pricePerNight: 450,
    address: {
      en: '3080 Beira Mar Avenue, Meireles',
      pt: 'Av. Beira Mar, 3080, Meireles',
      es: 'Avenida Beira Mar, 3080, Meireles',
      fr: 'Avenue Beira Mar, 3080, Meireles'
    },
    description: {
      en: 'Modern hotel offering high-quality service, a panoramic rooftop, and easy access to the main tourist promenade.',
      pt: 'Hotel moderno que oferece serviço de alta qualidade, cobertura panorâmica e fácil acesso ao principal calçadão turístico.',
      es: 'Hotel moderno que ofrece un servicio de alta calidad, una azotea panorámica y fácil acceso al principal paseo turístico.',
      fr: 'Hôtel moderne offrant un service de haute qualité, un toit panoramique et un accès facile à la principale promenade touristique.'
    },
    amenities: {
      en: ['Pool', 'Sauna', 'Business Center', 'Events Area'],
      pt: ['Piscina', 'Sauna', 'Centro de Negócios', 'Área de Eventos'],
      es: ['Piscina', 'Sauna', 'Centro de Negocios', 'Área de Eventos'],
      fr: ['Piscine', 'Sauna', 'Centre d\'affaires', 'Espace événements']
    },
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdzG15hMFNj3kjaiKR2efg8tXel_Ss4h5AQ&s',
    coords: { lat: -3.7248, lng: -38.4955 }
  },
  {
    id: 'crocobeach-hotel',
    name: {
      en: 'Crocobeach Hotel',
      pt: 'Crocobeach Hotel',
      es: 'Crocobeach Hotel',
      fr: 'Crocobeach Hôtel'
    },
    category: 'Beachfront',
    rating: 4.7,
    pricePerNight: 350,
    address: {
      en: '3125 Clóvis Arrais Maia Avenue, Praia do Futuro',
      pt: 'Av. Clóvis Arrais Maia, 3125, Praia do Futuro',
      es: 'Avenida Clóvis Arrais Maia, 3125, Praia do Futuro',
      fr: 'Avenue Clóvis Arrais Maia, 3125, Praia du Futur'
    },
    description: {
      en: 'Modern beachfront hotel at Praia do Futuro. Offers the best infrastructure, swimming pools, and exclusive access to the Crocobeach club.',
      pt: 'Hotel moderno à beira-mar na Praia do Futuro. Oferece a melhor infraestrutura, piscinas e acesso exclusivo ao clube Crocobeach.',
      es: 'Hotel moderno frente al mar en Praia do Futuro. Ofrece la mejor infraestructura, piscinas y acceso exclusivo al club Crocobeach.',
      fr: 'Hôtel moderne en bord de mer à Praia do Futuro. Offre la meilleure infrastructure, des piscines et un accès exclusif au club Crocobeach.'
    },
    amenities: {
      en: ['Beach Club Access', 'Outdoor Pool', 'Gym', 'Restaurant'],
      pt: ['Acesso ao Clube de Praia', 'Piscina Externa', 'Academia', 'Restaurante'],
      es: ['Acceso al Club de Playa', 'Piscina al Aire Libre', 'Gimnasio', 'Restaurante'],
      fr: ['Accès au Beach Club', 'Piscine extérieure', 'Salle de sport', 'Restaurant']
    },
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/737559957.jpg?k=27c0143d05108ee46061dcdb77836d64ab1ebdffc6092e482a85a0febc972b74&o=',
    coords: { lat: -3.7383, lng: -38.4552 }
  }
];

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
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/09/70/a7/35/restaurante-coco-bambu.jpg',
    coords: { lat: -3.7258, lng: -38.4905 }
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
    imageUrl: 'https://www.3coracoes.com.br/wp-content/uploads/2019/06/cafeteria-santa-clara-fortaleza-cine-sao-luiz-1024x683.jpg',
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
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/6a/ab/ea/salao-principal.jpg?w=900&h=500&s=1',
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
    imageUrl: 'https://cms-blog.saipos.com/4Cantinho-do-Faustino-SAIPOS-Sistema-para-Restaurantes.jpg',
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
    imageUrl: 'https://dicasdefortalezaejeri.com.br/wp-content/uploads/sites/29/2021/03/praia-iracema-fortaleza-jpg.webp',
    coords: { lat: -3.7208, lng: -38.5173 },
    nearbyRestaurantIds: ['lo-restaurante', 'santa-clara']
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
    imageUrl: 'https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_webp/viajandocomamalarosa.com.br/wp-content/uploads/2021/07/whatsapp-image-2021-07-05-at-130852-1-1280x650.jpeg',
    coords: { lat: -3.7383, lng: -38.4552 },
    nearbyRestaurantIds: []
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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Mercado_Central_de_Fortaleza_2025.jpg',
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
    imageUrl: 'https://semeia.org.br/wp-content/uploads/2025/03/celso-oliveira-sema-ceara-5.jpg',
    coords: { lat: -3.7468, lng: -38.4835 },
    nearbyRestaurantIds: ['cantinho-faustino']
  },
  {
    id: 'beiramar',
    title: {
      en: 'Beira Mar Avenue',
      pt: 'Avenida Beira Mar',
      es: 'Avenida Beira Mar',
      fr: 'Avenue Beira Mar'
    },
    description: {
      en: 'The most traditional tourist area in Fortaleza, perfect for a walk, craft market, and enjoying the sea breeze.',
      pt: 'A área turística mais tradicional de Fortaleza, perfeita para uma caminhada, mercado de artesanato e curtir a brisa do mar.',
      es: 'La zona turística más tradicional de Fortaleza, perfecta para un paseo, mercado de artesanías y disfrutar de la brisa marina.',
      fr: 'Le quartier touristique le plus traditionnel de Fortaleza, parfait pour une promenade, un marché artisanal et profiter de la brise marine.'
    },
    address: {
      en: 'Beira Mar Avenue, Fortaleza - CE',
      pt: 'Av. Beira Mar, Fortaleza - CE',
      es: 'Avenida Beira Mar, Fortaleza - CE',
      fr: 'Avenue Beira Mar, Fortaleza - CE'
    },
    openingHours: {
      en: 'Open 24h',
      pt: 'Aberto 24h',
      es: 'Abierto 24h',
      fr: 'Ouvert 24h'
    },
    rating: 4.8,
    category: 'Beaches',
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/99/b0/42/beira-mar-avenue-fortaleza.jpg?w=700&h=400&s=1',
    coords: { lat: -3.7258, lng: -38.4905 },
    nearbyRestaurantIds: ['coco-bambu']
  },
  {
    id: 'dragao',
    title: {
      en: 'Dragão do Mar Center',
      pt: 'Centro Dragão do Mar',
      es: 'Centro Dragão do Mar',
      fr: 'Centre Dragão do Mar'
    },
    description: {
      en: 'A vibrant arts and culture center with museums, a planetarium, and many cafes and bars in a historic setting.',
      pt: 'Um vibrante centro de arte e cultura com museus, planetário e muitos cafés e bares em um cenário histórico.',
      es: 'Un vibrante centro de arte y cultura con museos, planetario y muchos cafés y bares en un entorno histórico.',
      fr: 'Un centre d\'art et de culture dynamique avec des musées, un planétarium et de nombreux cafés et bars dans un cadre historique.'
    },
    address: {
      en: '81 Dragão do Mar Street',
      pt: 'Rua Dragão do Mar, 81',
      es: 'Calle Dragão do Mar, 81',
      fr: 'Rue Dragão do Mar, 81'
    },
    openingHours: {
      en: '09:00 AM - 10:00 PM',
      pt: '09:00 - 22:00',
      es: '09:00 - 22:00',
      fr: '09h00 - 22h00'
    },
    rating: 4.7,
    category: 'Culture',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-MqSq38gInq_WdNZSQLj2bbZ1EYDjBu5ng&s',
    coords: { lat: -3.7219, lng: -38.5209 },
    nearbyRestaurantIds: ['santa-clara', 'lo-restaurante']
  },
  {
    id: 'catedral',
    title: {
      en: 'Metropolitan Cathedral',
      pt: 'Catedral Metropolitana',
      es: 'Catedral Metropolitana',
      fr: 'Cathédrale Métropolitaine'
    },
    description: {
      en: 'A stunning neo-gothic cathedral in the heart of the city, inspired by the Cologne Cathedral in Germany.',
      pt: 'Uma deslumbrante catedral neogótica no coração da cidade, inspirada na Catedral de Colônia, na Alemanha.',
      es: 'Una impresionante catedral neogótica en el corazón de la ciudad, inspirada en la Catedral de Colonia en Alemania.',
      fr: 'Une superbe cathédrale néo-gothique au cœur de la ville, inspirée de la cathédrale de Cologne en Allemagne.'
    },
    address: {
      en: 'Metropolitana Square, Centro',
      pt: 'Praça da Sé, Centro',
      es: 'Plaza de la Sé, Centro',
      fr: 'Place de la Sé, Centre'
    },
    openingHours: {
      en: '08:00 AM - 06:00 PM',
      pt: '08:00 - 18:00',
      es: '08:00 - 18:00',
      fr: '08h00 - 18h00'
    },
    rating: 4.8,
    category: 'Historical Places',
    imageUrl: 'https://comshalom.org/wp-content/uploads/2023/12/catedral-fortaleza.jpg',
    coords: { lat: -3.7235, lng: -38.5265 },
    nearbyRestaurantIds: ['mercado']
  },
  {
    id: 'assuncao',
    title: {
      en: 'N. S. da Assunção Fortress',
      pt: 'Fortaleza de N. S. da Assunção',
      es: 'Fortaleza de N. S. da Assunção',
      fr: 'Forteresse de N. S. da Assunção'
    },
    description: {
      en: 'The birthplace of the city, this historic fortress is now the headquarters of the 10th Military Region.',
      pt: 'O berço da cidade, esta fortaleza histórica é hoje a sede da 10ª Região Militar.',
      es: 'La cuna de la ciudad, esta fortaleza histórica es hoy la sede de la 10ª Región Militar.',
      fr: 'Berceau de la ville, cette forteresse historique est aujourd\'hui le quartier général de la 10e région militaire.'
    },
    address: {
      en: 'Alberto Nepomuceno Avenue, Centro',
      pt: 'Av. Alberto Nepomuceno, Centro',
      es: 'Avenida Alberto Nepomuceno, Centro',
      fr: 'Avenue Alberto Nepomuceno, Centre'
    },
    openingHours: {
      en: '09:00 AM - 12:00 PM',
      pt: '09:00 - 12:00',
      es: '09:00 - 12:00',
      fr: '09h00 - 12h00'
    },
    rating: 4.6,
    category: 'Historical Places',
    imageUrl: 'https://www.ipatrimonio.org/wp-content/uploads/2017/04/Fortaleza-de-Nossa-Senhora-da-Assun%C3%A7%C3%A3o-Imagem-Google-Street-View4.jpg',
    coords: { lat: -3.7225, lng: -38.5245 },
    nearbyRestaurantIds: ['mercado']
  }
];
