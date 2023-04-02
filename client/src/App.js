import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// Page
import HomePage from "./pages/Home.jsx";

// style
import "./input.css";

if (process.env.NODE_ENV !== "development") {
  console.error = (message) => {
    throw new Error(message);
  };
}

function App() {
  return (
    <div className="App max-w-[100%] overflow-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<Link to="/">Porfolio page</Link>} />
      </Routes>
    </div>
  );
}

export default App;
