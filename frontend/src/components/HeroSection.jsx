import React, { useState } from 'react';
import { Search, Home, Building2, MapPin, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { locations, budgetRanges, bedroomOptions } from '../data/mockData';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [propertyType, setPropertyType] = useState('residential');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
  const [showBedroomDropdown, setShowBedroomDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedBedroom, setSelectedBedroom] = useState('');

  return (
    <section className="relative min-h-[600px] flex items-center justify-center pt-28">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Discover Your Dream Property
          <span className="block text-yellow-400">in Noida</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Find the perfect home from 140+ verified properties in Noida & Greater Noida
        </p>

        {/* Search Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-4 mb-6 justify-center">
            <button
              onClick={() => setActiveTab('buy')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'buy'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Buy Property
            </button>
            <button
              onClick={() => setActiveTab('rent')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'rent'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Rent Property
            </button>
          </div>

          {/* Property Type Toggle */}
          <div className="flex gap-2 justify-center mb-6">
            <button
              onClick={() => setPropertyType('residential')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                propertyType === 'residential'
                  ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                  : 'bg-gray-50 text-gray-600 border-2 border-transparent hover:bg-gray-100'
              }`}
            >
              <Home size={18} />
              Residential
            </button>
            <button
              onClick={() => setPropertyType('commercial')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                propertyType === 'commercial'
                  ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                  : 'bg-gray-50 text-gray-600 border-2 border-transparent hover:bg-gray-100'
              }`}
            >
              <Building2 size={18} />
              Commercial
            </button>
          </div>

          {/* Search Fields */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Location Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowLocationDropdown(!showLocationDropdown);
                  setShowBudgetDropdown(false);
                  setShowBedroomDropdown(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-medium text-gray-800">
                      {selectedLocation || 'Select Location'}
                    </p>
                  </div>
                </div>
                <ChevronDown size={18} className="text-gray-400" />
              </button>
              {showLocationDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 max-h-60 overflow-y-auto z-50">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setShowLocationDropdown(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700 transition-colors"
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Budget Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowBudgetDropdown(!showBudgetDropdown);
                  setShowLocationDropdown(false);
                  setShowBedroomDropdown(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-colors text-left"
              >
                <div>
                  <p className="text-xs text-gray-500">Budget</p>
                  <p className="font-medium text-gray-800">
                    {selectedBudget || 'Select Budget'}
                  </p>
                </div>
                <ChevronDown size={18} className="text-gray-400" />
              </button>
              {showBudgetDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-50">
                  {budgetRanges.map((budget) => (
                    <button
                      key={budget}
                      onClick={() => {
                        setSelectedBudget(budget);
                        setShowBudgetDropdown(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700 transition-colors"
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Bedroom Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowBedroomDropdown(!showBedroomDropdown);
                  setShowLocationDropdown(false);
                  setShowBudgetDropdown(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-colors text-left"
              >
                <div>
                  <p className="text-xs text-gray-500">Bedrooms</p>
                  <p className="font-medium text-gray-800">
                    {selectedBedroom || 'Select Type'}
                  </p>
                </div>
                <ChevronDown size={18} className="text-gray-400" />
              </button>
              {showBedroomDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-50">
                  {bedroomOptions.map((bedroom) => (
                    <button
                      key={bedroom}
                      onClick={() => {
                        setSelectedBedroom(bedroom);
                        setShowBedroomDropdown(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 text-gray-700 transition-colors"
                    >
                      {bedroom}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <Button 
              className="h-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl text-lg shadow-lg shadow-blue-200 transition-all hover:shadow-xl hover:shadow-blue-300"
            >
              <Search size={20} className="mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">140+</p>
            <p className="text-gray-300">Properties</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">50+</p>
            <p className="text-gray-300">Builders</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">10K+</p>
            <p className="text-gray-300">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;