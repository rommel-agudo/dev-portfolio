import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Sections/Navbar";

const App = () => {
  return (
    <ThemeProvider>
    <div>
      <Navbar />
    </div>
    </ThemeProvider>
  );
};

export default App;
