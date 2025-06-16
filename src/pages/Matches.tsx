
import React, { useState } from 'react';
import MatchCard from '../components/MatchCard';

const Matches = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Today', 'Tomorrow', 'Top Leagues'];

  const liveMatches = [
    {
      homeTeam: 'Manchester City',
      awayTeam: 'Liverpool',
      homeScore: 2,
      awayScore: 1,
      status: 'Live',
      time: '78',
      league: 'Premier League',
      isLive: true
    },
    {
      homeTeam: 'Barcelona',
      awayTeam: 'Real Madrid',
      homeScore: 1,
      awayScore: 1,
      status: 'Live',
      time: '45',
      league: 'La Liga',
      isLive: true
    },
    {
      homeTeam: 'Bayern Munich',
      awayTeam: 'Dortmund',
      homeScore: 3,
      awayScore: 0,
      status: 'Live',
      time: '62',
      league: 'Bundesliga',
      isLive: true
    }
  ];

  const upcomingMatches = [
    {
      homeTeam: 'Chelsea',
      awayTeam: 'Arsenal',
      homeScore: 0,
      awayScore: 0,
      status: 'Tomorrow',
      time: '15:00',
      league: 'Premier League',
      isLive: false
    },
    {
      homeTeam: 'PSG',
      awayTeam: 'Marseille',
      homeScore: 0,
      awayScore: 0,
      status: 'Tomorrow',
      time: '20:00',
      league: 'Ligue 1',
      isLive: false
    },
    {
      homeTeam: 'Juventus',
      awayTeam: 'AC Milan',
      homeScore: 0,
      awayScore: 0,
      status: 'Dec 18',
      time: '18:30',
      league: 'Serie A',
      isLive: false
    },
    {
      homeTeam: 'Atletico Madrid',
      awayTeam: 'Valencia',
      homeScore: 0,
      awayScore: 0,
      status: 'Dec 19',
      time: '21:00',
      league: 'La Liga',
      isLive: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Matches</h1>
          
          {/* Filters */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === filter
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Live Matches */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Live Matches</h2>
          <div className="overflow-x-auto">
            <div className="flex space-x-4 pb-4">
              {liveMatches.map((match, index) => (
                <div key={index} className="flex-shrink-0 w-80">
                  <MatchCard {...match} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Matches */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Upcoming Matches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMatches.map((match, index) => (
              <MatchCard key={index} {...match} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Matches;
