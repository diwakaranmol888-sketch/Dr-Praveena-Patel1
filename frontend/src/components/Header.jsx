import React, { useState } from 'react';
import { Button } from './ui/button';
import { contactInfo, doctorInfo } from '../data/mockData';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-2">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{doctorInfo.name}</h1>
              <p className="text-xs text-gray-600">{doctorInfo.specialty}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('appointment')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('appointment')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Contact
            </button>
          </nav>

          {/* Call Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-teal-600 hover:bg-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => window.location.href = `tel:${contactInfo.phones[0]}`}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-left text-gray-700 hover:text-teal-600 font-medium py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-teal-600 font-medium py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('appointment')} className="text-left text-gray-700 hover:text-teal-600 font-medium py-2">
                About
              </button>
              <button onClick={() => scrollToSection('appointment')} className="text-left text-gray-700 hover:text-teal-600 font-medium py-2">
                Contact
              </button>
              <Button 
                className="bg-teal-600 hover:bg-teal-700 text-white w-full"
                onClick={() => window.location.href = `tel:${contactInfo.phones[0]}`}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
