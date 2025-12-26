import React from 'react';
import { ShieldCheck, Users, BadgePercent, Video, FileText, HeadphonesIcon } from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Users,
  BadgePercent,
  Video,
  FileText,
  HeadphonesIcon,
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Verified Properties",
      description: "All properties listed are verified by our team for authenticity and legal compliance.",
      icon: "ShieldCheck"
    },
    {
      title: "Expert Guidance",
      description: "Our real estate experts provide personalized guidance throughout your property journey.",
      icon: "Users"
    },
    {
      title: "Best Deals",
      description: "Get access to exclusive deals and offers not available anywhere else.",
      icon: "BadgePercent"
    },
    {
      title: "Virtual Tours",
      description: "Explore properties from the comfort of your home with our 3D virtual tours.",
      icon: "Video"
    },
    {
      title: "Legal Assistance",
      description: "Complete legal support for documentation and registration process.",
      icon: "FileText"
    },
    {
      title: "Post-Sale Support",
      description: "Our relationship doesn't end at sale. We provide continuous support.",
      icon: "HeadphonesIcon"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            The InvestoXpert Advantage
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to making your property buying journey smooth, transparent, and rewarding
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-200">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;