import HomeClient from "@/components/HomeClient";
import { getTravelData } from "@/lib/getTrips";

export default async function Page() {
  const travelData = await getTravelData(); 
  return (
     <HomeClient travelData={travelData} />
  );
}