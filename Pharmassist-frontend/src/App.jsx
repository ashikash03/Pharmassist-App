import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Auth from './Pages/Auth/auth';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AdminHome from './Pages/Home/AdminHome';
import PharmacistHome from './Pages/Home/Pharmacisthome';
import PatientHome from './Pages/Home/PatientHome';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        {/* Route for Registration */}
        <Route path="/register" element={<Auth register={true} />} />

        {/* Route for Login */}
        <Route path="/login" element={<Auth register={false} />} />

        {/* Route for Admin */}
        <Route path="/adminhome" element={<AdminHome />} />

        {/* Route for Admin */}
        <Route path="/pharmacisthome" element={<PharmacistHome />} />

        {/* Route for Admin */}
        <Route path="/patienthome" element={<PatientHome />} />

        {/* Default Route (Optional) */}
        <Route
          path="*"
          element={<h1>404 - Page Not Found</h1>}
        />
      </Routes>
      <Footer/>
      </>
  );
}

export default App;
