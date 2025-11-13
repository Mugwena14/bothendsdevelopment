import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServiceProvider"; 

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicesProvider" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
