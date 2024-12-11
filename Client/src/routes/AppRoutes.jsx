// src/routes/AppRoutes.jsx

// DESCRIPTION: Here is the 'AppRoutes' file, which is responsible for defining and rendering the different routes in the frontend of this application. We are using lazy loading to only load those componenets when they are needed. This helps to improve the performance of the application.

import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import LoadingFallback from "../components/LoadingFallback";
import ScrollToTop from "../components/ScrollToTop";

const HomePage = lazy(() => import("../pages/homepage/Homepage"));
const About = lazy(() => import("../pages/About"));
const CommunitySupport = lazy(() => import("../pages/CommunitySupport"));
const Contact = lazy(() => import("../pages/Contact"));
const Donations = lazy(() => import("../pages/Donate"));
const HealthServices = lazy(() => import("../pages/HealthServices"));
const Help = lazy(() => import("../pages/Help"));
const HousingAssistance = lazy(() => import("../pages/HousingAssistance"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Organize = lazy(() => import("../pages/Organize"));
const Register = lazy(() => import("../pages/auth/Register"));
const PetServices = lazy(() => import("../pages/PetServices"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Terms = lazy(() => import("../pages/Terms"));
const UserProfile = lazy(() => import("../pages/UserProfile"));
const Services = lazy(() => import("../pages/Services"));
const Donate = lazy(() => import("../pages/Donate"));

const OurTeam = lazy(() => import("../pages/OurTeam"));
const OurValues = lazy(() => import("../pages/OurValues"));
const GetInvolved = lazy(() => import("../pages/GetInvloved"));

const AppRoutes = () => (
  <Suspense fallback={<LoadingFallback />}>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/community-support" element={<CommunitySupport />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donations" element={<Donations />} />
      <Route path="/health-services" element={<HealthServices />} />
      <Route path="/help" element={<Help />} />
      <Route path="/housing-assistance" element={<HousingAssistance />} />
      <Route path="/register" element={<Register />} />
      <Route path="/organize" element={<Organize />} />
      <Route path="/pet-services" element={<PetServices />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/our-values" element={<OurValues />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/services" element={<Services />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
