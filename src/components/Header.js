import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/Logo tree.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed w-full bg-green-700 shadow-lg z-50 h-24">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* Logo */}
              <img
                src={logo}
                alt="NatureConnect Logo"
                className="h-16 w-auto border-none"
              />
              {/* Text */}
              <div className="text-white font-bold text-2xl leading-tight">
                NatureConnect
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* Navigation */}
          <Navigation isMenuOpen={isMenuOpen} />
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

const Navigation = ({ isMenuOpen }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Profile', path: '/profile' },
    { name: 'Service', path: '/service' },
    { name: 'Organization', path: '/organization' },
    { name: 'Client', path: '/client' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`
      md:static md:flex md:space-x-8 md:items-center
      ${isMenuOpen ? 'block fixed top-20 left-0 right-0 bg-green-700 p-6' : 'hidden'}
      `}
    >
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`block md:inline-block text-xl font-medium 
            transition-all duration-300 
            relative 
            mb-4 md:mb-0
            ${
              location.pathname === item.path
                ? 'text-green-400 scale-110'
                : 'text-white hover:text-green-300 hover:scale-105'
            }
            ${isMenuOpen ? 'sm:pl-6' : ''} 
          `}
        >
          {item.name}
       </Link>

      ))}
    </nav>
  );
};

export default Header;