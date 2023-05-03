import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// Page
import HomePage from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import DetailPortofolio from "./pages/DetailPortofolio.jsx";
// style
import "./input.css";

// Context
import PortosContext from "./context/PortosContext.js";

if (process.env.NODE_ENV !== "development") {
  console.error = (message) => {
    throw new Error(message);
  };
}

function App() {
  return (
    <div className="App max-w-[100%] overflow-hidden">
      <PortosContext>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio">
            <Route index element={<Portfolio />} />
            <Route path=":creator/:title" element={<DetailPortofolio />} />
          </Route>
        </Routes>
      </PortosContext>
      <Routes>
        <Route path="/aboutus" element={<Link to="/">about page</Link>} />
      </Routes>
    </div>
  );
}

export default App;
