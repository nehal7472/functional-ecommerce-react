import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroImage from "../../../public/ecommerce-hero.jpg"; // Replace with your image
import HeroSection from "../../components/frontend/HeroSection";
import Feature from "../../components/frontend/Feature";
import CallAction from "../../components/frontend/CallAction";

const Home = () => {
  return (
    <main className="bg-white dark:bg-gray-900 ">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <Feature />

      {/* Call to Action */}
      <CallAction />
    </main>
  );
};

export default Home;
