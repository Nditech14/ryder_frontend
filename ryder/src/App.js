import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/landing_page/appNavbar";
import LandingPage from "./components/landing_page/landingPage";
import Footer from "./components/landing_page/footer";
//import ConfirmEmail from "./components/ConfirmEmail";
import Login from "./components/Login";

// Import require Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/landingPage.css";

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" element={<Login/>} />
        </Routes> 
      <Footer />
      </div>
    </Router>
  );
}

export default App;
