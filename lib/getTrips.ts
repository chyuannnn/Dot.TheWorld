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
  post: InstagramPostProps; 
}

export async function getTrips(): Promise<Trip[]> {
  const csvUrl = process.env.GOOGLE_SHEET_URL || '';

  try {
    const response = await fetch(csvUrl, { next: { revalidate: 3600 } }); 
    const csvText = await response.text();

    // Regex to split by comma but ignore commas inside quotes (standard CSV behavior)
    const rows = csvText.split(/\r?\n/).map(row => 
      row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g)?.map(val => val.replace(/"/g, "")) || []
    );
    
    const dataRows = rows.slice(1); // Skip header

    return dataRows.map((col, index) => {
      // Map columns based on your provided sheet structure
      return {
        id: index, // Assigning row index as a temporary ID
        name: col[0],
        state: col[1],
        country: col[2],
        date: col[3],
        locations: {
          lat: parseFloat(col[4]),
          lng: parseFloat(col[5]),
        },
        post: {
          username: col[6],
          profileImage: col[7],
          caption: col[8],
          hashtag: col[9],
          date: col[3], 
          location: `${col[0]}, ${col[1]}`, 
          // Slice images from index 10 to 18 (image1 to image9)
          images: col.slice(10, 19).filter(url => url && url.trim() !== "")
        }
      };
    });
  } catch (error) {
    console.error("Error fetching sheet data:", error);
    return [];
  }
}