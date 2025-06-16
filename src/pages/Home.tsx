
import React from 'react';
import MatchCard from '../components/MatchCard';
import PlayerCard from '../components/PlayerCard';
import NewsCard from '../components/NewsCard';

const Home = () => {
  // Mock data
  const liveMatches = [
    {
      homeTeam: "Manchester City",
      awayTeam: "Liverpool",
      homeScore: 2,
      awayScore: 1,
      status: "Live",
      time: "78",
      league: "Premier League",
      isLive: true
    },
    {
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      homeScore: 1,
      awayScore: 1,
      status: "Live",
      time: "45",
      league: "La Liga",
      isLive: true
    },
    {
      homeTeam: "Bayern Munich",
      awayTeam: "Dortmund",
      homeScore: 3,
      awayScore: 0,
      status: "FT",
      time: "90",
      league: "Bundesliga"
    }
  ];

  const trendingPlayers = [
    {
      name: "Erling Haaland",
      team: "Manchester City",
      position: "Striker",
      rating: 9.2,
      goals: 15,
      assists: 3
    },
    {
      name: "Kylian Mbappé",
      team: "PSG",
      position: "Forward",
      rating: 8.9,
      goals: 12,
      assists: 7
    },
    {
      name: "Kevin De Bruyne",
      team: "Manchester City",
      position: "Midfielder",
      rating: 8.7,
      goals: 4,
      assists: 11
    }
  ];

  const newsHighlights = [
    {
      title: "Manchester City Continues Their Winning Streak",
      summary: "Pep Guardiola's side secured another victory with a dominant performance against Liverpool in today's Premier League clash.",
      author: "John Smith",
      publishedAt: "2 hours ago",
      category: "Match Report"
    },
    {
      title: "Transfer Window Update: Top Players on the Move",
      summary: "Latest updates on the biggest transfers happening this season, including potential moves for world-class players.",
      author: "Sarah Johnson",
      publishedAt: "4 hours ago",
      category: "Transfers"
    },
    {
      title: "AI Predictions: Weekend's Most Likely Upsets",
      summary: "Our AI model analyzes form, statistics, and historical data to predict which underdogs might surprise this weekend.",
      author: "FootyIQ AI",
      publishedAt: "6 hours ago",
      category: "Analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to FootyIQ
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Live scores, AI predictions, and comprehensive football analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Live Matches
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              View AI Predictions
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Live Matches Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Live Matches</h2>
            <button className="text-green-400 hover:text-green-300 transition-colors">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveMatches.map((match, index) => (
              <MatchCard key={index} {...match} />
            ))}
          </div>
        </section>

        {/* Trending Players Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Trending Players</h2>
            <button className="text-green-400 hover:text-green-300 transition-colors">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPlayers.map((player, index) => (
              <PlayerCard key={index} {...player} />
            ))}
          </div>
        </section>

        {/* AI Predictions Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">🤖 AI Match Predictions</h2>
            <p className="text-gray-200 mb-6">
              Our advanced AI analyzes team form, player statistics, and historical data to predict match outcomes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Chelsea vs Arsenal</span>
                  <span className="text-green-400 font-bold">87% Confidence</span>
                </div>
                <p className="text-gray-400 text-sm">Predicted: Chelsea Win (2-1)</p>
                <div className="mt-2 text-xs text-gray-500">
                  Based on recent form and head-to-head record
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Juventus vs AC Milan</span>
                  <span className="text-yellow-400 font-bold">73% Confidence</span>
                </div>
                <p className="text-gray-400 text-sm">Predicted: Draw (1-1)</p>
                <div className="mt-2 text-xs text-gray-500">
                  Evenly matched teams with similar form
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Highlights Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Latest News</h2>
            <button className="text-green-400 hover:text-green-300 transition-colors">
              View All News
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsHighlights.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
