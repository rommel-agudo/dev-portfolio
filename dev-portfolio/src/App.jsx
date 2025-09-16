import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Sections/Navbar";
import HeroSection from "./components/Sections/HeroSection";

const App = () => {
  return (
    <ThemeProvider>
    <div>
      <Navbar />
      <HeroSection />
    </div>
    </ThemeProvider>
  );
};

export default App;
