"use client";
import Mapbox from "@/components/Mapbox";
import PostView from "@/components/PostView";
import BottomCard from "@/components/BottomCard";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function HomeClient({ initialTrips }: { initialTrips: any[] }) {
  const [selectedMarkerId, setMarkerId] = useState<number | null>(null);
  const [showSwipe, setShowSwipe] = useState(true);
  
  return (
    <div className="relative h-screen w-full overflow-hidden bg-zinc-50 font-sans">
      <div className="absolute inset-0 z-0">
        <Mapbox 
          selectedMarker={(id) => setMarkerId(id)} 
          travelLog={initialTrips} 
        />
      </div>

      <AnimatePresence>
        {(!showSwipe && selectedMarkerId != null) && (
          <div className="absolute inset-0 z-20 flex justify-center items-center px-1 bg-white/50">
            <motion.div
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "50vh", opacity: 0 }}
              className="w-auto pointer-events-auto flex flex-col items-center"
            >
              <PostView id={selectedMarkerId} travelLog={initialTrips} onClose={() => setShowSwipe(true)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {selectedMarkerId && (
        <div className="absolute inset-x-0 z-20 flex justify-center bottom-0">
          <BottomCard isOpen={showSwipe} onToggle={setShowSwipe}/>
        </div>
      )}
    </div>
  );
}