import React, { useState } from 'react';
import { Filter, Grid3X3, List, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import PropertyCard from './PropertyCard';
import { properties } from '../data/mockData';

const PropertiesSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const itemsPerPage = 8;

  const filters = [
    { key: 'all', label: 'All Properties' },
    { key: 'new launch', label: 'New Launch' },
    { key: 'featured', label: 'Featured' },
    { key: 'trending', label: 'Trending' },
    { key: 'ready to move', label: 'Ready to Move' },
    { key: 'luxury', label: 'Luxury' },
  ];

  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(p => p.badge.toLowerCase() === filter);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProperties = filteredProperties.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Explore Properties</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Property in Noida
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover premium flats, apartments, villas & plots for sale in Noida from top builders
          </p>
        </div>

        {/* Filters & View Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => {
                  setFilter(f.key);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === f.key
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-gray-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Grid3X3 size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-600 mb-6">
          Showing <span className="font-semibold">{displayedProperties.length}</span> of{' '}
          <span className="font-semibold">{filteredProperties.length}</span> properties
        </p>

        {/* Properties Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {displayedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="disabled:opacity-50"
            >
              <ChevronLeft size={18} />
            </Button>
            
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-10 h-10 rounded-lg font-medium transition-all ${
                  currentPage === idx + 1
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
                }`}
              >
                {idx + 1}
              </button>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="disabled:opacity-50"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesSection;