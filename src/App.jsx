import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/landingPage/LandingPage";
import AuthPage from "./pages/authPage/authPage";
import HomePage from "./pages/homePage/HomePage";
import ProfilesPage from "./pages/profilesPage/ProfilesPage";
import BenefitsPage from "./pages/benefitsPage/BenefitsPage";
import HIWPage from "./pages/hiwPage/HIWPage";
import DomainServiceDetailPage from "./pages/domainServiceDetailPage/DomainServiceDetailPage";
import FindProfessionalPage from "./pages/findProfessionalPage/FindProfessionalPage";
import ProfessionalProfilePage from "./pages/professionalProfilePage/ProfessionalProfilePage";
import AboutUsPage from "./pages/aboutUsPage.jsx/AboutUsPage";
import RegistrationForm from "./pages/registrationForm/RegistrationForm";
import ProInformation from "./components/ProInformation";



function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation(); // Now inside BrowserRouter context

  const hideNavbarRoutes = ["/auth/signin", "/auth/signup"];

  return (
    <>
      {/* Conditionally render Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && (
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/auth/:page"
          element={<AuthPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/professional-profiles" element={<ProfilesPage />} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/how-it-works" element={<HIWPage />} />
        <Route
          path="/domain/service-details"
          element={<DomainServiceDetailPage />}
        />
        <Route path="/find-pro" element={<FindProfessionalPage />} />
        <Route path="/pro-profile" element={<ProfessionalProfilePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/pro-information" element={<ProInformation />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
