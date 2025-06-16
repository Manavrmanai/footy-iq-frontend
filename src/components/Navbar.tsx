
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FQ</span>
            </div>
            <span className="text-white font-bold text-xl">FootyIQ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/matches" className="text-gray-300 hover:text-white transition-colors">
              Matches
            </Link>
            <Link to="/teams" className="text-gray-300 hover:text-white transition-colors">
              Teams
            </Link>
            <Link to="/news" className="text-gray-300 hover:text-white transition-colors">
              News
            </Link>
            <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
              Dashboard
            </Link>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Login
            </Link>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-300" />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-white">
                Home
              </Link>
              <Link to="/matches" className="block px-3 py-2 text-gray-300 hover:text-white">
                Matches
              </Link>
              <Link to="/teams" className="block px-3 py-2 text-gray-300 hover:text-white">
                Teams
              </Link>
              <Link to="/news" className="block px-3 py-2 text-gray-300 hover:text-white">
                News
              </Link>
              <Link to="/dashboard" className="block px-3 py-2 text-gray-300 hover:text-white">
                Dashboard
              </Link>
              <Link to="/login" className="block px-3 py-2 bg-green-600 text-white rounded-lg">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
