// app/page.tsx
import HomeClient from "@/components/HomeClient";
// Imagine this is a database call or an API fetch
import { getTrips } from "@/lib/getTrips"; 

export default async function Page() {
  // Fetch data on the server
  const trips = await getTrips(); 

  // Pass data to the client component
  return <HomeClient initialTrips={trips} />;
}