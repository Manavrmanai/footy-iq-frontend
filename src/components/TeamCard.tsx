
import React from 'react';

interface TeamCardProps {
  name: string;
  league: string;
  country: string;
  founded: number;
  logo?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  league,
  country,
  founded,
  logo
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-all duration-200 cursor-pointer border border-gray-700 hover:border-green-500">
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg">{name}</h3>
          <p className="text-gray-400 text-sm">{league}</p>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Country</span>
          <span className="text-white text-sm">{country}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Founded</span>
          <span className="text-white text-sm">{founded}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
