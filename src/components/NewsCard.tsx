
import React from 'react';

interface NewsCardProps {
  title: string;
  summary: string;
  author: string;
  publishedAt: string;
  image?: string;
  category: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  summary,
  author,
  publishedAt,
  image,
  category
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors cursor-pointer border border-gray-700">
      <div className="h-48 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
        <span className="text-white text-4xl font-bold">⚽</span>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full uppercase tracking-wide">
            {category}
          </span>
          <span className="text-gray-400 text-xs">{publishedAt}</span>
        </div>
        
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-3">
          {summary}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-xs">By {author}</span>
          <button className="text-green-400 text-sm hover:text-green-300 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
