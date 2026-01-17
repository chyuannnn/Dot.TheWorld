import { motion, AnimatePresence } from "framer-motion";

interface BottomCardProps {
    isOpen: boolean;
    onToggle: (state: boolean) => void;
}

export default function BottomCard({ isOpen, onToggle }: BottomCardProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    // Animation states
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}

                    // Drag logic
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                        // If swiped up (negative y) more than 50px OR fast enough
                        if (info.offset.y < -50 || info.velocity.y < -500) {
                            onToggle(false);
                        }
                    }}
                    className="bg-white-60 text-black w-screen md:w-96 lg:w-96 mx-1 rounded-2xl overflow-hidden shadow-2xl"
                >
                    <div className="h-10"/>
                    <div className="flex items-center justify-center h-5">
                        <p className="text-black/70 text-xs font-bold uppercase tracking-widest font-sans">
                            Swipe Up To View the Post
                        </p>
                    </div>
                    <div className="mx-auto w-2/4 h-1 rounded-full bg-white my-1" />
                    <div className="h-4"/>
                </motion.div>
            )}
        </AnimatePresence>
    );
}