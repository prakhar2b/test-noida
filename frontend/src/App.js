import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PropertiesSection from "./components/PropertiesSection";
import StatsSection from "./components/StatsSection";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PropertiesSection />
        <StatsSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
