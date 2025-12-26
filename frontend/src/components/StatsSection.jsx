import React from 'react';
import { stats } from '../data/mockData';
import { TrendingUp, Users, Building2, MapPin } from 'lucide-react';

const StatsSection = () => {
  const iconMap = {
    "Happy Customers": Users,
    "Properties Listed": Building2,
    "Projects Delivered": TrendingUp,
    "Cities Covered": MapPin,
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.label] || TrendingUp;
            return (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 group-hover:bg-white/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-blue-100 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;