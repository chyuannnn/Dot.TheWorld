export interface Trip{
  id: number;
  name: string;
  city: string;
  region: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  }
  date: string;
  post: {
    username: string;
    profileImage?: string;
    images: string[];
    caption: string;
    hashtags: string[];
  };
}


export const travelData: Trip[] = [
  {
    "id": 1,
    "name": "The Lion City",
    "city": "Singapore",
    "region": "Central Region",
    "country": "Singapore",
    "coordinates": { "lat": 1.2878, "lng": 103.8666 },
    "date": "2024-03-15",
    "post": {
      "username": "globetrotter_jen",
      "profileImage": "https://example.com/profiles/jen.jpg",
      "images": ["https://example.com/photos/sg1.jpg", "https://example.com/photos/sg2.jpg"],
      "caption": "The Supertrees at night are pure magic! 🇸🇬",
      "hashtags": ["singapore", "travel", "gardensbythebay"]
    }
  },
  {
    "id": 2,
    "name": "Ancient Kyoto",
    "city": "Kyoto",
    "region": "Kansai",
    "country": "Japan",
    "coordinates": { "lat": 35.0116, "lng": 135.7681 },
    "date": "2024-04-02",
    "post": {
      "username": "temple_seeker",
      "images": ["https://example.com/photos/kyoto_zen.jpg"],
      "caption": "Finding peace in the bamboo groves of Arashiyama.",
      "hashtags": ["kyoto", "japan", "zen"]
    }
  },
  {
    "id": 3,
    "name": "Big Sky Adventure",
    "city": "Big Sky",
    "region": "Montana",
    "country": "USA",
    "coordinates": { "lat": 45.2618, "lng": -111.3080 },
    "date": "2024-01-20",
    "post": {
      "username": "powder_hound",
      "profileImage": "https://example.com/profiles/ski_king.jpg",
      "images": ["https://example.com/photos/bigsky_snow.jpg"],
      "caption": "Fresh corduroy and bluebird skies in Montana!",
      "hashtags": ["bigsky", "montana", "skiing"]
    }
  },
  {
    "id": 4,
    "name": "Geysers & Grizzlies",
    "city": "Yellowstone",
    "region": "Wyoming",
    "country": "USA",
    "coordinates": { "lat": 44.4280, "lng": -110.5885 },
    "date": "2024-07-10",
    "post": {
      "username": "nature_nerd",
      "images": ["https://example.com/photos/old_faithful.jpg", "https://example.com/photos/bison.jpg"],
      "caption": "Nature's own pressure cooker. Yellowstone is unreal.",
      "hashtags": ["yellowstone", "nationalparks", "wildlife"]
    }
  },
  {
    "id": 5,
    "name": "Hsinchu Tech & Tea",
    "city": "Hsinchu",
    "region": "Hsinchu County",
    "country": "Taiwan",
    "coordinates": { "lat": 24.8138, "lng": 120.9675 },
    "date": "2024-05-12",
    "post": {
      "username": "tech_nomad",
      "images": ["https://example.com/photos/hsinchu_market.jpg"],
      "caption": "Exploring the 'Windy City' of Taiwan. The food stalls are top-tier!",
      "hashtags": ["hsinchu", "taiwan", "streetfood"]
    }
  },
  {
    "id": 6,
    "name": "Imperial Legacy",
    "city": "Beijing",
    "region": "Beijing",
    "country": "China",
    "coordinates": { "lat": 39.9042, "lng": 116.4074 },
    "date": "2024-05-20",
    "post": {
      "username": "history_buff",
      "images": ["https://example.com/photos/great_wall.jpg", "https://example.com/photos/forbidden_city.jpg"],
      "caption": "Stepping back in time at the Forbidden City. The scale is breathtaking.",
      "hashtags": ["beijing", "china", "history"]
    }
  },
  {
    "id": 7,
    "name": "Matcha Moments",
    "city": "Uji",
    "region": "Kyoto",
    "country": "Japan",
    "coordinates": { "lat": 34.8892, "lng": 135.8077 },
    "date": "2024-04-05",
    "post": {
      "username": "matcha_mama",
      "profileImage": "https://example.com/profiles/tea.jpg",
      "images": ["https://example.com/photos/uji_tea.jpg"],
      "caption": "The best matcha of my life, right at the source in Uji. 🍵",
      "hashtags": ["uji", "japan", "matcha", "greentea"]
    }
  },
  {
    "id": 8,
    "name": "Deer & Temples",
    "city": "Nara",
    "region": "Kansai",
    "country": "Japan",
    "coordinates": { "lat": 34.6851, "lng": 135.8048 },
    "date": "2024-04-07",
    "post": {
      "username": "animal_lover",
      "images": ["https://example.com/photos/nara_deer.jpg"],
      "caption": "The deer in Nara are so polite (as long as you have crackers)! 🦌",
      "hashtags": ["nara", "japan", "travelgram"]
    }
  },
  {
    "id": 9,
    "name": "Neon & Nightlife",
    "city": "Osaka",
    "region": "Kansai",
    "country": "Japan",
    "coordinates": { "lat": 34.6937, "lng": 135.5023 },
    "date": "2024-04-10",
    "post": {
      "username": "foodie_explorer",
      "images": ["https://example.com/photos/osaka_food.jpg", "https://example.com/photos/dotonbori.jpg"],
      "caption": "Eat until you drop—Osaka lives up to the hype! Takoyaki is 10/10.",
      "hashtags": ["osaka", "japan", "streetfood", "dotonbori"]
    }
  },
  {
    "id": 10,
    "name": "The Heart of Japan",
    "city": "Tokyo",
    "region": "Kanto",
    "country": "Japan",
    "coordinates": { "lat": 35.6762, "lng": 139.6503 },
    "date": "2024-04-15",
    "post": {
      "username": "city_lights",
      "profileImage": "https://example.com/profiles/shibuya.jpg",
      "images": ["https://example.com/photos/tokyo_skyline.jpg"],
      "caption": "Tokyo is a beautiful organized chaos. I never want to leave.",
      "hashtags": ["tokyo", "japan", "shibuya", "cityscape"]
    }
  },
  {
    "id": 11,
    "name": "Coastal Soul",
    "city": "Fukuoka",
    "region": "Kyushu",
    "country": "Japan",
    "coordinates": { "lat": 33.5904, "lng": 130.4017 },
    "date": "2024-04-20",
    "post": {
      "username": "ramen_fanatic",
      "images": ["https://example.com/photos/hakata_ramen.jpg"],
      "caption": "Hakata ramen hits different in Fukuoka. Best bowl yet.",
      "hashtags": ["fukuoka", "japan", "ramen", "kyushu"]
    }
  },
  {
    "id": 12,
    "name": "City of Angels",
    "city": "Los Angeles",
    "region": "California",
    "country": "USA",
    "coordinates": { "lat": 34.0522, "lng": -118.2437 },
    "date": "2024-08-05",
    "post": {
      "username": "la_vibe",
      "images": ["https://example.com/photos/hollywood_sign.jpg", "https://example.com/photos/santa_monica.jpg"],
      "caption": "Sun, surf, and some serious traffic. Still love you, LA. 🌴",
      "hashtags": ["losangeles", "california", "hollywood"]
    }
  },
  {
    "id": 13,
    "name": "Golden Gate Days",
    "city": "San Francisco",
    "region": "California",
    "country": "USA",
    "coordinates": { "lat": 37.7749, "lng": -122.4194 },
    "date": "2024-08-10",
    "post": {
      "username": "fog_catcher",
      "images": ["https://example.com/photos/sf_bridge.jpg"],
      "caption": "Watching Karl the Fog roll over the bridge. Classic SF.",
      "hashtags": ["sanfrancisco", "goldengatebridge", "california"]
    }
  },
  {
    "id": 14,
    "name": "Basecamp Bozeman",
    "city": "Bozeman",
    "region": "Montana",
    "country": "USA",
    "coordinates": { "lat": 45.6770, "lng": -111.0429 },
    "date": "2024-09-01",
    "post": {
      "username": "mt_explorer",
      "images": ["https://example.com/photos/bozeman_main_st.jpg"],
      "caption": "The perfect mountain town. Coffee first, mountains second.",
      "hashtags": ["bozeman", "montana", "mountainlife"]
    }
  },
  {
    "id": 15,
    "name": "Crown of the Continent",
    "city": "Glacier",
    "region": "Montana",
    "country": "USA",
    "coordinates": { "lat": 48.7596, "lng": -113.7870 },
    "date": "2024-09-05",
    "post": {
      "username": "hike_more",
      "profileImage": "https://example.com/profiles/trek.jpg",
      "images": ["https://example.com/photos/glacier_lake.jpg"],
      "caption": "Going-to-the-Sun Road is the most beautiful drive in the world. Period.",
      "hashtags": ["glaciernationalpark", "montana", "hiking"]
    }
  },
  {
    "id": 16,
    "name": "Teton Majesty",
    "city": "Grand Teton",
    "region": "Wyoming",
    "country": "USA",
    "coordinates": { "lat": 43.7410, "lng": -110.8024 },
    "date": "2024-09-12",
    "post": {
      "username": "peaks_and_valleys",
      "images": ["https://example.com/photos/teton_reflection.jpg"],
      "caption": "Woke up at 5 AM for this reflection on Jenny Lake. Worth it.",
      "hashtags": ["grandteton", "wyoming", "sunrise"]
    }
  }
]

export default travelData;