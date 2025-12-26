import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Buy', href: '#properties', hasDropdown: true },
    { name: 'Rent', href: '#rent', hasDropdown: true },
    { name: 'Projects', href: '#projects', hasDropdown: false },
    { name: 'Resale', href: '#resale', hasDropdown: false },
    { name: 'Blog', href: '#blog', hasDropdown: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919880083870" className="flex items-center gap-2 hover:text-blue-100 transition-colors">
              <Phone size={14} />
              <span>+91 9880083870</span>
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=919958845444" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-100 transition-colors"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Us</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Noida's #1 Real Estate Platform</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xl px-3 py-2 rounded-lg">
              Investo<span className="text-yellow-400">Xpert</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={item.href}
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </a>
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-48 border border-gray-100">
                    <a href="#apartment" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">Apartment</a>
                    <a href="#villa" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">Villa</a>
                    <a href="#plot" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">Plot</a>
                    <a href="#commercial" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">Commercial</a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Search size={18} className="mr-2" />
              Search
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
              Post Property
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="py-4 px-4 space-y-2">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 text-gray-700 hover:bg-blue-50 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t space-y-2">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600">
                  Search Property
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Post Property
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;