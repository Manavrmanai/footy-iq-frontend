
import React from 'react';
import FollowedCard from '../components/FollowedCard';
import NotificationItem from '../components/NotificationItem';
import NewsCard from '../components/NewsCard';

const Dashboard = () => {
  const followedTeams = [
    {
      type: 'team' as const,
      name: 'Manchester City',
      subtitle: 'Premier League',
      nextMatch: 'vs Liverpool - Dec 18, 15:00'
    },
    {
      type: 'team' as const,
      name: 'Barcelona',
      subtitle: 'La Liga',
      nextMatch: 'vs Real Madrid - Dec 20, 21:00'
    },
    {
      type: 'team' as const,
      name: 'Bayern Munich',
      subtitle: 'Bundesliga',
      nextMatch: 'vs Dortmund - Dec 19, 18:30'
    }
  ];

  const followedPlayers = [
    {
      type: 'player' as const,
      name: 'Erling Haaland',
      subtitle: 'Manchester City',
      rating: 9.2,
      nextMatch: 'vs Liverpool - Dec 18'
    },
    {
      type: 'player' as const,
      name: 'Lionel Messi',
      subtitle: 'Inter Miami',
      rating: 8.8,
      nextMatch: 'vs Orlando - Dec 17'
    },
    {
      type: 'player' as const,
      name: 'Kylian Mbappé',
      subtitle: 'PSG',
      rating: 9.0,
      nextMatch: 'vs Marseille - Dec 19'
    }
  ];

  const notifications = [
    {
      type: 'match' as const,
      title: 'Manchester City vs Liverpool',
      message: 'Match starting in 30 minutes',
      time: '30 minutes ago',
      isRead: false
    },
    {
      type: 'player' as const,
      title: 'Haaland scores hat-trick',
      message: 'Your followed player scored 3 goals in today\'s match',
      time: '2 hours ago',
      isRead: false
    },
    {
      type: 'news' as const,
      title: 'Transfer News',
      message: 'Barcelona interested in signing new midfielder',
      time: '4 hours ago',
      isRead: true
    },
    {
      type: 'team' as const,
      title: 'Bayern Munich wins',
      message: 'Your followed team won 3-1 against Hoffenheim',
      time: '1 day ago',
      isRead: true
    },
    {
      type: 'match' as const,
      title: 'Upcoming El Clasico',
      message: 'Barcelona vs Real Madrid in 2 days',
      time: '1 day ago',
      isRead: true
    }
  ];

  const personalizedNews = [
    {
      title: 'Haaland\'s Record-Breaking Season Continues',
      summary: 'The Norwegian striker adds another milestone to his incredible debut season with Manchester City.',
      author: 'Sports Desk',
      publishedAt: '3 hours ago',
      category: 'Player News'
    },
    {
      title: 'Barcelona\'s Youth Academy Produces Another Star',
      summary: 'La Masia graduate makes impressive debut in El Clasico preparation match.',
      author: 'Youth Reporter',
      publishedAt: '5 hours ago',
      category: 'Youth Football'
    },
    {
      title: 'Bayern Munich Tactical Evolution Under New Coach',
      summary: 'How the Bavarian giants are adapting their playing style for European success.',
      author: 'Tactical Analyst',
      publishedAt: '8 hours ago',
      category: 'Tactics'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Your personalized football hub</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Followed Teams */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Followed Teams</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {followedTeams.map((team, index) => (
                  <FollowedCard key={index} {...team} />
                ))}
              </div>
            </section>

            {/* Followed Players */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Followed Players</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {followedPlayers.map((player, index) => (
                  <FollowedCard key={index} {...player} />
                ))}
              </div>
            </section>

            {/* Personalized News */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4">News from Your Teams</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalizedNews.map((article, index) => (
                  <NewsCard key={index} {...article} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Notifications</h2>
              <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                {notifications.map((notification, index) => (
                  <NotificationItem key={index} {...notification} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
