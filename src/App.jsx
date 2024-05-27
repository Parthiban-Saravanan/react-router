import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Import Header
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AllCourses from './pages/AllCourses';
import FullStackDevelopment from './pages/FullStackDevelopment';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';

const App = () => {
  return (
    <Router>
      <Header />  {/* Add Header here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<AllCourses />} />
        <Route path="/fullstack" element={<FullStackDevelopment />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
