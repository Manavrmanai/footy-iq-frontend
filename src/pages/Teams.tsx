
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import TeamCard from '../components/TeamCard';

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('All');

  const leagues = ['All', 'Premier League', 'La Liga', 'Bundesliga', 'Serie A', 'Ligue 1'];

  const teams = [
    { name: 'Manchester City', league: 'Premier League', country: 'England', founded: 1880 },
    { name: 'Liverpool', league: 'Premier League', country: 'England', founded: 1892 },
    { name: 'Barcelona', league: 'La Liga', country: 'Spain', founded: 1899 },
    { name: 'Real Madrid', league: 'La Liga', country: 'Spain', founded: 1902 },
    { name: 'Bayern Munich', league: 'Bundesliga', country: 'Germany', founded: 1900 },
    { name: 'Dortmund', league: 'Bundesliga', country: 'Germany', founded: 1909 },
    { name: 'Juventus', league: 'Serie A', country: 'Italy', founded: 1897 },
    { name: 'AC Milan', league: 'Serie A', country: 'Italy', founded: 1899 },
    { name: 'PSG', league: 'Ligue 1', country: 'France', founded: 1970 },
    { name: 'Marseille', league: 'Ligue 1', country: 'France', founded: 1899 },
    { name: 'Chelsea', league: 'Premier League', country: 'England', founded: 1905 },
    { name: 'Arsenal', league: 'Premier League', country: 'England', founded: 1886 }
  ];

  const filteredTeams = teams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLeague = selectedLeague === 'All' || team.league === selectedLeague;
    return matchesSearch && matchesLeague;
  });

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-6">Teams</h1>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search teams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none"
              />
            </div>
            
            <select
              value={selectedLeague}
              onChange={(e) => setSelectedLeague(e.target.value)}
              className="px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none"
            >
              {leagues.map((league) => (
                <option key={league} value={league}>
                  {league}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeams.map((team, index) => (
            <TeamCard key={index} {...team} />
          ))}
        </div>

        {filteredTeams.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No teams found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teams;
