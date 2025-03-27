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
import ProInformation from "./components/ProInformation";
import RequestPage from "./pages/requestsPage/requestsPage";
import ExchangePage from "./pages/exchangePage/ExchangePage";
import PartnersPage from "./pages/partnersPage/PartnersPage";

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser).username : "";
  });

  let userType = "";
  if (username !== "") {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((user) => user.username === username);
    if (user) {
      userType = user.userType;
    } else {
      console.warn("User not found");
    }
  }

  const location = useLocation();

  const hideNavbarRoutes = [
    "/auth/signin",
    "/auth/signup",
    "/registration-form",
  ];

  const messages = JSON.parse(localStorage.getItem("messages")) || [];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && (
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          username={username}
          userType={userType}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={<LandingPage isLoggedIn={isLoggedIn} username={username} />}
        />
        {userType === "provider" && (
          <Route path="/requests" element={<RequestPage />} />
        )}
        <Route
          path="/auth/:page"
          element={
            <AuthPage
              setIsLoggedIn={setIsLoggedIn}
              setUsername_={setUsername}
            />
          }
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

        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/pro-information" element={<ProInformation />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/professionals"
          element={
            <Professionals isLoggedIn={isLoggedIn} username={username} />
          }
        />
        <Route
          path="/exchanges"
          element={
            <ExchangePage
              isLoggedIn={isLoggedIn}
              user={username}
              userType={userType}
              messages={messages}
            />
          }
        />
        <Route path="/call" element={<OrderProfessional />} />
        <Route
          path="/pro-profile"
          element={
            <ProfessionalProfilePage
              isLoggedIn={isLoggedIn}
              username={username}
            />
          }
        />
        <Route path="/partners" element={<PartnersPage />} />
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
