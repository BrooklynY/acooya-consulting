import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FindConsultantsPage from './pages/FindConsultantsPage';
import EngagementPortal from './pages/EngagementPortal';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import ResourceDetailPage from './pages/ResourceDetailPage';
import InsightDetailPage from './pages/InsightDetailPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import MarketplacePage from './pages/MarketplacePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import './styles/globals.css';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes with Layout - includes all main pages */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/consultants" element={<FindConsultantsPage />} />
            <Route path="/engagements" element={<EngagementPortal />} />
            <Route path="/knowledge" element={<KnowledgeBasePage />} />
            <Route path="/resources" element={<KnowledgeBasePage />} />
            <Route path="/resource/:id" element={<ResourceDetailPage />} />
            <Route path="/insight/:id" element={<InsightDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/marketplace/:type/:id" element={<MarketplacePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />

          </Route>

          {/* Fallback Routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
