import React from 'react';
import { Button } from './ui/button';
import { doctorInfo, stats } from '../data/mockData';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image and Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={doctorInfo.image} 
                alt={doctorInfo.name}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Stats Cards */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-11/12">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="grid grid-cols-3 divide-x divide-gray-200">
                  <div className="text-center px-4">
                    <p className="text-3xl font-bold text-teal-600">{stats.happyPatients}</p>
                    <p className="text-xs text-gray-600 mt-1">Happy Patients</p>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-3xl font-bold text-teal-600">{stats.rating}</p>
                    <p className="text-xs text-gray-600 mt-1">Google Rating</p>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-3xl font-bold text-teal-600">{stats.experience}</p>
                    <p className="text-xs text-gray-600 mt-1">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 mt-12 md:mt-0">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">
                Meet The Expert
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
                {doctorInfo.name}
              </h2>
              <p className="text-xl text-gray-700 font-medium mb-2">
                {doctorInfo.specialty}
              </p>
              <p className="text-gray-600">
                {doctorInfo.qualifications}
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              {doctorInfo.about}
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Specialized in Medical & Cosmetic Dermatology</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Advanced Laser & Aesthetic Treatments</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Personalized Patient-Centric Care</p>
              </div>
            </div>

            <Button 
              size="lg"
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg mt-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
