import React, { useState, useEffect } from "react";
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
import OrderProfessional from "./pages/OrderProfessional/OrderProfessional";
import ServicesPage from "./pages/servicePage/ServicesPage";
import Professionals from "./pages/Professionals/Professionals";
import ProfessionalRegistration from "./pages/ProfessionalRegistration/ProfessionalRegistration";
import ProInformation from "./components/ProInformation";



function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser).username : "";
  });

  const location = useLocation(); // Now inside BrowserRouter context

  const hideNavbarRoutes = ["/auth/signin", "/auth/signup", "/registration-form"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && (
        <Navbar 
          isLoggedIn={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn} 
          username = {username}
        />
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/auth/:page"
          element={<AuthPage setIsLoggedIn={setIsLoggedIn} setUsername_ = {setUsername}/>}
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
        <Route path="/registration-form" element={<RegistrationForm/>} />
        <Route path="/pro-information" element={<ProInformation />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/professionals" element={<Professionals/>} />
        <Route path="/call" element={<OrderProfessional/>} />
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
