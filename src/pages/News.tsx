
import React from 'react';
import NewsCard from '../components/NewsCard';
import VideoCard from '../components/VideoCard';

const News = () => {
  const featuredNews = {
    title: 'Champions League Final Set: Manchester City vs Inter Milan',
    summary: 'Two European giants will clash in Istanbul as Manchester City seeks their first Champions League title while Inter Milan aims for their fourth European Cup.',
    author: 'Sarah Johnson',
    publishedAt: '2 hours ago',
    category: 'Champions League',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
  };

  const newsArticles = [
    {
      title: 'Messi Wins Eighth Ballon d\'Or in Historic Ceremony',
      summary: 'Lionel Messi claims his record-extending eighth Ballon d\'Or award after leading Argentina to World Cup glory.',
      author: 'Michael Rodriguez',
      publishedAt: '4 hours ago',
      category: 'Awards'
    },
    {
      title: 'Premier League Title Race Intensifies',
      summary: 'Arsenal maintains slim lead over Manchester City as the season enters its crucial final months.',
      author: 'Emma Thompson',
      publishedAt: '6 hours ago',
      category: 'Premier League'
    },
    {
      title: 'Transfer Window Roundup: Biggest Moves',
      summary: 'A comprehensive look at the most significant transfers that could reshape European football.',
      author: 'David Martinez',
      publishedAt: '8 hours ago',
      category: 'Transfers'
    },
    {
      title: 'World Cup 2026: Venues Announced',
      summary: 'FIFA reveals the final list of stadiums that will host matches across USA, Canada, and Mexico.',
      author: 'Lisa Chen',
      publishedAt: '12 hours ago',
      category: 'World Cup'
    },
    {
      title: 'VAR Technology Gets Major Upgrade',
      summary: 'New semi-automated offside technology promises faster and more accurate decisions.',
      author: 'James Wilson',
      publishedAt: '1 day ago',
      category: 'Technology'
    },
    {
      title: 'Women\'s Football Reaches New Heights',
      summary: 'Record-breaking attendance figures and TV viewership mark a golden era for women\'s football.',
      author: 'Anna Foster',
      publishedAt: '1 day ago',
      category: 'Women\'s Football'
    }
  ];

  const videoHighlights = [
    {
      title: 'Best Goals of the Week - Spectacular Finishes',
      duration: '5:32',
      thumbnail: 'placeholder',
      category: 'Highlights',
      publishedAt: '1 hour ago'
    },
    {
      title: 'Tactical Analysis: How City Dominated the Midfield',
      duration: '8:15',
      thumbnail: 'placeholder',
      category: 'Analysis',
      publishedAt: '3 hours ago'
    },
    {
      title: 'Rookie Mistakes That Cost Champions League Spots',
      duration: '6:28',
      thumbnail: 'placeholder',
      category: 'Analysis',
      publishedAt: '5 hours ago'
    },
    {
      title: 'Behind the Scenes: Training Ground Secrets',
      duration: '12:45',
      thumbnail: 'placeholder',
      category: 'Documentary',
      publishedAt: '1 day ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">News & Highlights</h1>
        </div>

        {/* Featured News */}
        <section className="mb-12">
          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
            <div className="h-64 md:h-80 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
              <span className="text-white text-6xl">🏆</span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full uppercase tracking-wide">
                  {featuredNews.category}
                </span>
                <span className="text-gray-400 text-sm">{featuredNews.publishedAt}</span>
              </div>
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                {featuredNews.title}
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                {featuredNews.summary}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">By {featuredNews.author}</span>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Video Highlights</h2>
          <div className="overflow-x-auto">
            <div className="flex space-x-4 pb-4">
              {videoHighlights.map((video, index) => (
                <VideoCard key={index} {...video} />
              ))}
            </div>
          </div>
        </section>

        {/* News Feed */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article, index) => (
              <NewsCard key={index} {...article} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;
