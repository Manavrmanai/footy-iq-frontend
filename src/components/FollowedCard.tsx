
import React from 'react';

interface FollowedCardProps {
  type: 'team' | 'player';
  name: string;
  subtitle: string;
  nextMatch?: string;
  rating?: number;
}

const FollowedCard: React.FC<FollowedCardProps> = ({
  type,
  name,
  subtitle,
  nextMatch,
  rating
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors cursor-pointer border border-gray-700">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">
            {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-white font-medium">{name}</h3>
          <p className="text-gray-400 text-sm">{subtitle}</p>
        </div>
        {rating && (
          <div className="text-green-400 font-bold text-lg">
            {rating}
          </div>
        )}
      </div>
      
      {nextMatch && (
        <div className="mt-3 pt-3 border-t border-gray-700">
          <p className="text-gray-400 text-xs">Next Match</p>
          <p className="text-white text-sm">{nextMatch}</p>
        </div>
      )}
    </div>
  );
};

export default FollowedCard;
