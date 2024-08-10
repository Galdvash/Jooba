import React from "react";
import { ThemeProvider } from "./hooks/ThemeContext";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
