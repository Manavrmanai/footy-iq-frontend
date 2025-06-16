
import React from 'react';

interface PlayerCardProps {
  name: string;
  team: string;
  position: string;
  rating: number;
  goals: number;
  assists: number;
  image?: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  name,
  team,
  position,
  rating,
  goals,
  assists,
  image
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-all duration-200 cursor-pointer border border-gray-700 hover:border-green-500">
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-gray-400 text-sm">{team}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Position</span>
          <span className="text-white text-sm font-medium">{position}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Rating</span>
          <span className="text-green-400 font-bold">{rating}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Goals</span>
          <span className="text-white font-medium">{goals}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Assists</span>
          <span className="text-white font-medium">{assists}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
