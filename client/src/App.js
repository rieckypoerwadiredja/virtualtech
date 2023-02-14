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
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
