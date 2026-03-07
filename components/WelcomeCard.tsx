import React from 'react';
import { X, MapPin, MousePointer2 } from 'lucide-react';

interface WelcomeCardProps {
  onClose: () => void;
}

export default function WelcomeCard({ onClose }: WelcomeCardProps) {
  return (
    <div className="absolute inset-0 z-50 flex justify-center items-center px-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative border border-gray-100">
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Header with Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-100 p-2 rounded-lg">
            <MapPin className="text-blue-600" size={24} />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800">• The World</h2>
        </div>

        {/* Content */}
        <div className="space-y-4 text-black leading-relaxed">
          <p>
            This this a website that records my memories from around the world.
          </p>
          
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <p className="text-sm font-semibold text-blue-700 mb-2 flex items-center gap-2">
              <MousePointer2 size={16} /> How to explore:
            </p>
            <ul className="text-sm space-y-2">
              <li>• Click on any <span className="font-bold text-blue-600">Blue Dot</span> on the map.</li>
              <li>• Look for the <span className="font-bold text-blue-600">Indicator</span> at the bottom.</li>
              <li>• <span className="font-bold text-blue-600">Swipe Up</span> to reveal the surprise inside!</li>
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <button
          className="w-full mt-8 bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transform active:scale-95 transition-all shadow-lg shadow-blue-200"
          onClick={onClose}
        >
          Start Exploring
        </button>
      </div>
    </div>
  );
}