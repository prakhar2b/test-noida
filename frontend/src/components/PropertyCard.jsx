import React, { useState } from 'react';
import { MapPin, Star, Calendar, Phone, Share2, GitCompare, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

const PropertyCard = ({ property }) => {
  const [showConfigurations, setShowConfigurations] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getBadgeColor = (badge) => {
    switch (badge.toLowerCase()) {
      case 'new launch':
        return 'bg-green-500';
      case 'featured':
        return 'bg-blue-500';
      case 'trending':
        return 'bg-orange-500';
      case 'luxury':
        return 'bg-purple-500';
      case 'ready to move':
        return 'bg-teal-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <div className={`absolute inset-0 bg-gray-200 animate-pulse ${imageLoaded ? 'hidden' : ''}`} />
        <img
          src={property.image}
          alt={property.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Badge */}
        <span className={`absolute top-4 left-4 ${getBadgeColor(property.badge)} text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide`}>
          {property.badge}
        </span>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white/90 rounded-full hover:bg-white shadow-md transition-colors">
            <Share2 size={16} className="text-gray-600" />
          </button>
          <button className="p-2 bg-white/90 rounded-full hover:bg-white shadow-md transition-colors">
            <GitCompare size={16} className="text-gray-600" />
          </button>
        </div>

        {/* For Sale Tag */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-600">
          For Sale
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title & Location */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {property.name}
        </h3>
        
        <div className="flex items-center gap-1 text-gray-500 mb-3">
          <MapPin size={14} />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Rating & Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{property.rating} Rating</span>
          </div>
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {property.status}
          </span>
        </div>

        {/* Possession */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Calendar size={14} />
          <span>Possession: <strong>{property.possession}</strong></span>
        </div>

        {/* Price */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-gray-500">Starting from</p>
              <p className="text-xl font-bold text-green-600">{property.priceStart}</p>
            </div>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md"
            >
              <Phone size={14} className="mr-1" />
              Callback
            </Button>
          </div>

          {/* Configuration Toggle */}
          <button
            onClick={() => setShowConfigurations(!showConfigurations)}
            className="w-full flex items-center justify-between py-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            <span>View Configurations</span>
            {showConfigurations ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {/* Configurations Table */}
          {showConfigurations && (
            <div className="mt-2 bg-gray-50 rounded-lg p-3 animate-in slide-in-from-top-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500 border-b border-gray-200">
                    <th className="text-left pb-2">Unit</th>
                    <th className="text-left pb-2">Size</th>
                    <th className="text-right pb-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {property.configurations.map((config, idx) => (
                    <tr key={idx} className="border-b border-gray-100 last:border-0">
                      <td className="py-2 font-medium">{config.unit}</td>
                      <td className="py-2 text-gray-600">{config.size}</td>
                      <td className="py-2 text-right font-semibold text-green-600">{config.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;