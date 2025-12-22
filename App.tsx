
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PackagesPage from './pages/PackagesPage';
import DestinationsPage from './pages/DestinationsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
