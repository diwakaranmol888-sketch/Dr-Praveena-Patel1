import React from 'react';
import { Award, Heart, Star, Phone } from 'lucide-react';
import { highlights } from '../data/mockData';

const iconMap = {
  Award: Award,
  Heart: Heart,
  Star: Star,
  Phone: Phone
};

const HighlightsSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon];
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
