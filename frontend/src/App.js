import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AppointmentSection from "./components/AppointmentSection";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <HighlightsSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <AppointmentSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
