"use client";
import { X, Heart, MessageCircle, Send, Bookmark, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import travelLog from '@/data/data';

interface PostProps {
  id: number;
  onClose: () => void;
}

export default function Post({
  id,
  onClose
}: PostProps) {

  const trip = travelLog.find((item) => item.id === id);
  if (!trip) return null;
  const { post } = trip;
  const images = post.images || [];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      handleNextImage();
    }
    if (touchStart - touchEnd < -50) {
      handlePrevImage();
    }
  };

  return (
    <div className="bg-black text-white w-full sm:w-full md:w-96 lg:w-96 rounded-2xl overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between p-3 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={post.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-bold text-sm ">{post.username}</div>
            <div className="text-xs text-gray-400">{post.location}</div>
          </div>
        </div>
        <button onClick={onClose} className="text-white hover:opacity-70 transition-opacity p-1">
          <X size={20} />
        </button>
      </div>

      <div
        ref={imageContainerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative w-full aspect-square bg-gray-900 overflow-hidden group cursor-grab active:cursor-grabbing"
      >
        <img
          src={images[currentImageIndex]}
          alt={`Post ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'w-6 bg-white'
                      : 'w-1.5 bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>

            <div className="absolute top-3 right-3 bg-black/60 px-2 py-1 rounded text-xs font-semibold">
              {currentImageIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      <div className="p-4">
        <div className="space-y-2">
          <div className="text-xs">
            <span className="font-semibold">{post.username}</span>{' '}
            <span className="text-gray-300">{post.caption}</span>
          </div>
          <div className="text-xs text-blue-400 font-semibold">
            {post.hashtag}
          </div>
          <div className="text-xs text-gray-500 pt-1">
            {post.date}
          </div>
        </div>
      </div>
    </div>
  );
}
