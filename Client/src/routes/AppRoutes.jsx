// src/routes/AppRoutes.jsx
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingFallback from '../components/LoadingFallback';

const HomePage = lazy(() => import('../pages/homepage/Homepage'));
const About = lazy(() => import('../pages/About'));
const CommunitySupport = lazy(() => import('../pages/CommunitySupport'));
const Contact = lazy(() => import('../pages/Contact'));
const Donations = lazy(() => import('../pages/Donations'));
const HealthServices = lazy(() => import('../pages/HealthServices'));
const Help = lazy(() => import('../pages/Help'));
const HousingAssistance = lazy(() => import('../pages/HousingAssistance'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Organize = lazy(() => import('../pages/Organize'));
const Register = lazy(() => import('../pages/auth/Register'));
const PetServices = lazy(() => import('../pages/PetServices'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Terms = lazy(() => import('../pages/Terms'));
const UserProfile = lazy(() => import('../pages/UserProfile'));

const AppRoutes = () => (
  <Suspense fallback={<LoadingFallback />}>
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
