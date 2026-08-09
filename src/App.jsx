import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";
import PaymentPage from "./components/PaymentPage/PaymentPage";
import DomainRenewal from "./components/DomainRenewal/DomainRenewal";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Pricing />
            </>
          }
        />
        <Route path="/payment/:planId" element={<PaymentPage />} />
        <Route path="/domains" element={<DomainRenewal />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
