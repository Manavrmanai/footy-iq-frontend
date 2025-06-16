
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FQ</span>
              </div>
              <span className="text-white font-bold text-xl">FootyIQ</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for football analytics, live scores, and AI-powered predictions.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/matches" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Live Matches
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Teams
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white transition-colors text-sm">
                  News
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">AI Predictions</li>
              <li className="text-gray-400 text-sm">Live Scores</li>
              <li className="text-gray-400 text-sm">Player Analytics</li>
              <li className="text-gray-400 text-sm">Team Statistics</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Twitter</li>
              <li className="text-gray-400 text-sm">Instagram</li>
              <li className="text-gray-400 text-sm">Facebook</li>
              <li className="text-gray-400 text-sm">YouTube</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 FootyIQ. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
