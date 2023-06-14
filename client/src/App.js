import React from "react";
import { Routes, Route } from "react-router-dom";
// Page
import HomePage from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import DetailPortofolio from "./pages/DetailPortofolio.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
// style
import "./input.css";
// Context
import PortosContext from "./context/PortosContext.js";
import AboutUs from "./pages/AboutUs.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

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
            <Route path=":creator/:id/:title" element={<DetailPortofolio />} />
          </Route>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="*"
            element={
              <ErrorPage
                errorCode={404}
                status="Not Found"
                message="The requested resource was not found on the server."
              />
            }
          />
        </Routes>
      </PortosContext>
    </div>
  );
}

export default App;
