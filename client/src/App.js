import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// Component
import Footer from "./component/Footer/Footer.jsx";
// Page
import HomePage from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
// style
import "./input.css";

// Context
import PortoContext from "./context/PortoContext.js";
import { FooterProvider } from "./context/FooterContext.js";
// Data
import jsonData from "./data/data.json";

if (process.env.NODE_ENV !== "development") {
  console.error = (message) => {
    throw new Error(message);
  };
}

function App() {
  return (
    <div className="App max-w-[100%] overflow-hidden">
      <PortoContext>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </PortoContext>
      <Routes>
        <Route path="/aboutus" element={<Link to="/">about page</Link>} />
      </Routes>

      <FooterProvider value={jsonData.homePage.footer}>
        <Footer />
      </FooterProvider>
    </div>
  );
}

export default App;
