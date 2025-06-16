
import React from 'react';
import { Bell, Trophy, Users, User } from 'lucide-react';

interface NotificationItemProps {
  type: 'match' | 'news' | 'team' | 'player';
  title: string;
  message: string;
  time: string;
  isRead?: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  type,
  title,
  message,
  time,
  isRead = false
}) => {
  const getIcon = () => {
    switch (type) {
      case 'match':
        return <Trophy className="w-5 h-5 text-green-400" />;
      case 'news':
        return <Bell className="w-5 h-5 text-blue-400" />;
      case 'team':
        return <Users className="w-5 h-5 text-purple-400" />;
      case 'player':
        return <User className="w-5 h-5 text-orange-400" />;
      default:
        return <Bell className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className={`p-4 border-b border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer ${!isRead ? 'bg-gray-800' : ''}`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-1">
          {getIcon()}
        </div>
        <div className="flex-1">
          <h4 className={`font-medium ${!isRead ? 'text-white' : 'text-gray-300'}`}>
            {title}
          </h4>
          <p className="text-gray-400 text-sm mt-1">{message}</p>
          <span className="text-gray-500 text-xs mt-1">{time}</span>
        </div>
        {!isRead && (
          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
        )}
      </div>
    </div>
  );
};

export default NotificationItem;
