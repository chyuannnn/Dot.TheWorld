// 1. Define the interface based on your JSON structure
export interface Trip {
  id: number;
  name: string;
  city: string;
  region: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  date: string;
  post: {
    username: string;
    profileImage?: string;
    images: string[];
    caption: string;
    hashtags: string[];
  };
}

export async function getTravelData(): Promise<Trip[]> {
  const url = process.env.TRAVEL_DATA_URL;

  if (!url) {
    console.error("Travel data URL is not defined in .env");
    return [];
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch");
    
    const rawData = await response.json();

    return rawData.map((item: Omit<Trip, 'id'>, index: number) => ({
      ...item,
      id: index + 1
    }));
    
  } catch (error) {
    console.error(error);
    return [];
  }
}