import React from "react";
import { Routes, Route } from "react-router-dom";
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
        <Route path="/portfolio" element={<h1>Porfolio page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
