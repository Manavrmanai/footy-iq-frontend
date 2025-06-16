
import React from 'react';

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: string;
  time: string;
  league: string;
  isLive?: boolean;
}

const MatchCard: React.FC<MatchCardProps> = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
  time,
  league,
  isLive = false
}) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors cursor-pointer border border-gray-700">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-gray-400 uppercase tracking-wide">{league}</span>
        {isLive && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            LIVE
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-white font-medium">{homeTeam}</span>
            <span className="text-xl font-bold text-white">{homeScore}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white font-medium">{awayTeam}</span>
            <span className="text-xl font-bold text-white">{awayScore}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-3 text-center">
        <span className="text-sm text-gray-400">
          {isLive ? `${time}'` : status}
        </span>
      </div>
    </div>
  );
};

export default MatchCard;
