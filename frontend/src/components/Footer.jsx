import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Property in Noida', href: '#properties' },
    { name: 'New Launch Projects', href: '#' },
    { name: 'Ready to Move', href: '#' },
    { name: 'Luxury Properties', href: '#' },
    { name: 'Affordable Housing', href: '#' },
  ];

  const locations = [
    'Sector 44, Noida',
    'Sector 94, Noida',
    'Sector 128, Noida',
    'Sector 150, Noida',
    'Greater Noida West',
    'Yamuna Expressway',
  ];

  const builders = [
    'Godrej Properties',
    'M3M',
    'ATS',
    'ACE Group',
    'Mahagun',
    'Gulshan',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xl px-3 py-2 rounded-lg inline-block mb-6">
              Investo<span className="text-yellow-400">Xpert</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              InvestoXpert is Noida's leading real estate platform, helping you discover your dream property 
              with verified listings and expert guidance.
            </p>
            <div className="space-y-3">
              <a href="tel:+919880083870" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone size={18} />
                <span>+91 9880083870</span>
              </a>
              <a href="mailto:info@investoxpert.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail size={18} />
                <span>info@investoxpert.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Sector 62, Noida, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-1 transition-all"
                  >
                    <ChevronRight size={14} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h4 className="text-lg font-bold mb-6">Popular Locations</h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location}>
                  <a 
                    href="#properties"
                    className="flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-1 transition-all"
                  >
                    <ChevronRight size={14} />
                    {location}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Builders */}
          <div>
            <h4 className="text-lg font-bold mb-6">Top Builders</h4>
            <ul className="space-y-3">
              {builders.map((builder) => (
                <li key={builder}>
                  <a 
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-1 transition-all"
                  >
                    <ChevronRight size={14} />
                    {builder}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-400">Follow us on social media</p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
                { Icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
                { Icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
                { Icon: Linkedin, href: '#', color: 'hover:bg-blue-700' },
                { Icon: Youtube, href: '#', color: 'hover:bg-red-600' },
              ].map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white ${color} transition-all`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2025 InvestoXpert. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=919958845444"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all z-50"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </footer>
  );
};

export default Footer;