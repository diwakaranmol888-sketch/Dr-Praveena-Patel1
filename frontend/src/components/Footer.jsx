import React from 'react';
import { contactInfo, doctorInfo } from '../data/mockData';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">{doctorInfo.name}</h3>
                <p className="text-sm text-gray-400">{doctorInfo.specialty}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Expert dermatological care in {contactInfo.city}. Providing comprehensive solutions for all your skin, hair, and aesthetic needs.
            </p>
            <p className="text-sm text-gray-500">
              {doctorInfo.qualifications}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-teal-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-teal-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-teal-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-teal-400 transition-colors">
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  {contactInfo.address}
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  {contactInfo.phones.map((phone, index) => (
                    <a 
                      key={index}
                      href={`tel:${phone}`}
                      className="block text-gray-400 hover:text-teal-400 transition-colors text-sm"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {doctorInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for healthier skin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
