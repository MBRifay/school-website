import React from 'react';
import {Routes, Route, useLocation ,HashRouter } from 'react-router-dom';
import Dashboard from './Pages/admin/Dashboard';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutUs';
import './index.css';
import Academics from './Pages/Academic';
import AdmissionPage from './Pages/Admission';
import CurriculumPage from './Pages/Curriculum';
import Footer from './componentPage/Footer';
import Navbar from './componentPage/NavigationMenu';
import Heropage from './componentPage/Heropage';
import StudentPortal from './Pages/StudentPortal/StudentPortal';

function App() {
  const location = useLocation();
  const isAuthRoute = location.pathname.startsWith('/admin') || location.pathname.startsWith('/student');

  return (
    <>
    
      {!isAuthRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Heropage />}/>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/admin/*" element={<Dashboard />} />
        <Route path="/student/*" element={<StudentPortal />} />
      </Routes>
      {!isAuthRoute && <Footer />}
     
    </>
  );
}

const WrappedApp = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

export default WrappedApp;
