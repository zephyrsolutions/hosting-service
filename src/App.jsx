import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";
import PaymentPage from "./components/PaymentPage/PaymentPage";

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
      </Routes>
      <Footer />
    </>
  );
};

export default App;
