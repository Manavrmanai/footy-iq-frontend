
import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  duration: string;
  thumbnail: string;
  category: string;
  publishedAt: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  duration,
  thumbnail,
  category,
  publishedAt
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors cursor-pointer border border-gray-700 min-w-80">
      <div className="relative h-48 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <Play className="w-6 h-6 text-white fill-white" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full uppercase tracking-wide">
            {category}
          </span>
          <span className="text-gray-400 text-xs">{publishedAt}</span>
        </div>
        
        <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default VideoCard;
