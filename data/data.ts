export interface InstagramPostProps {
  username?: string;
  location?: string;
  profileImage?: string;
  images?: string[];
  caption?: string;
  hashtag?: string;
  date?: string;
}

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface Trip {
  id: number;
  name: string;
  state: string;
  country: string;
  date: string;
  locations: Coordinate;
  post: InstagramPostProps; // Strictly one post object
}

const travelLog: Trip[] = [
  // --- MALAYSIA ---
  {
    id: 1,
    name: "Kampar",
    state: "Perak",
    country: "Malaysia",
    date: "2024-01-15",
    locations: { lat: 4.3078, lng: 101.1518 },
    post: {
      username: 'travel_malaysia',
      location: 'Kampar Old Town',
      profileImage: 'https://res.cloudinary.com/dtwabsgbw/image/upload/v1768670841/72EDC4EE-0E34-404C-8B5A-1237F222D044_1_105_c_iznkme.jpg',
      images: ['https://images.pexels.com/photos/1651166/pexels-photo-1651166.jpeg?w=800'],
      caption: 'Best Claypot Chicken Rice in town! 🥘',
      hashtag: '#KamparEats',
      date: 'Jan 15, 2024'
    }
  },
  {
    id: 2,
    name: "Kuantan",
    state: "Pahang",
    country: "Malaysia",
    date: "2024-02-10",
    locations: { lat: 3.8077, lng: 103.3260 },
    post: {
      username: 'beach_vibes',
      location: 'Teluk Cempedak',
      profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100',
      images: ['https://images.pexels.com/photos/1007664/pexels-photo-1007664.jpeg?w=800'],
      caption: 'Evening breeze at the beach 🌊',
      hashtag: '#Kuantan',
      date: 'Feb 10, 2024'
    }
  },
  {
    id: 3,
    name: "Penang",
    state: "Pulau Pinang",
    country: "Malaysia",
    date: "2024-03-05",
    locations: { lat: 5.4141, lng: 100.3288 },
    post: {
      username: 'foodie_george',
      location: 'George Town Street Art',
      profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=100',
      images: ['https://images.pexels.com/photos/3020921/pexels-photo-3020921.jpeg?w=800'],
      caption: 'Walking through history and murals.',
      hashtag: '#PenangArt',
      date: 'Mar 05, 2024'
    }
  },
  {
    id: 4,
    name: "Langkawi",
    state: "Kedah",
    country: "Malaysia",
    date: "2024-04-12",
    locations: { lat: 6.3500, lng: 99.8000 },
    post: {
      username: 'island_hopper',
      location: 'Sky Bridge',
      profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=100',
      images: ['https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?w=800'],
      caption: 'High above the Andaman Sea.',
      hashtag: '#LangkawiMoments',
      date: 'Apr 12, 2024'
    }
  },

  // --- CHINA ---
  {
    id: 5,
    name: "Beijing",
    state: "Beijing",
    country: "China",
    date: "2024-06-20",
    locations: { lat: 39.9042, lng: 116.4074 },
    post: {
      username: 'history_buff',
      location: 'The Great Wall',
      profileImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=100',
      images: ['https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?w=800'],
      caption: 'Finally made it to the wall! 🧱',
      hashtag: '#BeijingChina',
      date: 'Jun 20, 2024'
    }
  },

  // --- USA ---
  {
    id: 6,
    name: "Bozeman",
    state: "Montana",
    country: "USA",
    date: "2024-08-15",
    locations: { lat: 45.6770, lng: -111.0429 },
    post: {
      username: 'mountain_man',
      location: 'Bridger Range',
      profileImage: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=100',
      images: ['https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?w=800'],
      caption: 'Fresh air and big skies.',
      hashtag: '#MontanaLife',
      date: 'Aug 15, 2024'
    }
  },
  {
    id: 7,
    name: "Los Angeles",
    state: "California",
    country: "USA",
    date: "2024-09-10",
    locations: { lat: 34.0522, lng: -118.2437 },
    post: {
      username: 'city_lights',
      location: 'Santa Monica Pier',
      profileImage: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?w=100',
      images: ['https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?w=800'],
      caption: 'Sunset by the Ferris wheel.',
      hashtag: '#LAConfidential',
      date: 'Sep 10, 2024'
    }
  },
  {
    id: 8,
    name: "San Francisco",
    state: "California",
    country: "USA",
    date: "2024-10-01",
    locations: { lat: 37.7749, lng: -122.4194 },
    post: {
      username: 'tech_travel',
      location: 'Golden Gate Bridge',
      profileImage: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?w=100',
      images: ['https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?w=800'],
      caption: 'Foggy mornings in SF.',
      hashtag: '#GoldenGate',
      date: 'Oct 01, 2024'
    }
  },

  // --- TAIWAN ---
  {
    id: 9,
    name: "Hsinchu",
    state: "Hsinchu",
    country: "Taiwan",
    date: "2024-11-20",
    locations: { lat: 24.8138, lng: 120.9675 },
    post: {
      username: 'hsinchu_eats',
      location: 'Chenghuang Temple Night Market',
      profileImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=100',
      images: ['https://images.pexels.com/photos/2323391/pexels-photo-2323391.jpeg?w=800'],
      caption: 'Best meatballs in Taiwan!',
      hashtag: '#HsinchuFood',
      date: 'Nov 20, 2024'
    }
  },

  // --- SINGAPORE ---
  {
    id: 10,
    name: "Singapore",
    state: "Singapore",
    country: "Singapore",
    date: "2024-12-25",
    locations: { lat: 1.3521, lng: 103.8198 },
    post: {
      username: 'lion_city',
      location: 'Gardens by the Bay',
      profileImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=100',
      images: ['https://images.pexels.com/photos/602604/pexels-photo-602604.jpeg?w=800'],
      caption: 'Supertrees lighting up the night.',
      hashtag: '#VisitSingapore',
      date: 'Dec 25, 2024'
    }
  },

  // --- JAPAN ---
  {
    id: 11,
    name: "Osaka",
    state: "Osaka",
    country: "Japan",
    date: "2025-01-10",
    locations: { lat: 34.6937, lng: 135.5023 },
    post: {
      username: 'osaka_adventures',
      location: 'Dotonbori',
      profileImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?w=100',
      images: ['https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?w=800'],
      caption: 'Takoyaki and neon lights.',
      hashtag: '#OsakaEats',
      date: 'Jan 10, 2025'
    }
  },
  {
    id: 12,
    name: "Kyoto",
    state: "Kyoto",
    country: "Japan",
    date: "2025-01-15",
    locations: { lat: 35.0116, lng: 135.7681 },
    post: {
      username: 'zen_traveler',
      location: 'Fushimi Inari Taisha',
      profileImage: 'https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?w=100',
      images: ['https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-161401.jpeg?w=800'],
      caption: 'Thousands of torii gates.',
      hashtag: '#KyotoJapan',
      date: 'Jan 15, 2025'
    }
  },
  {
    id: 13,
    name: "Fukuoka",
    state: "Fukuoka",
    country: "Japan",
    date: "2025-01-20",
    locations: { lat: 33.5904, lng: 130.4017 },
    post: {
      username: 'ramen_lover',
      location: 'Ichiran Honten',
      profileImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=100',
      images: ['https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?w=800'],
      caption: 'The birthplace of Tonkotsu ramen.',
      hashtag: '#FukuokaFood',
      date: 'Jan 20, 2025'
    }
  }
];

export default travelLog;