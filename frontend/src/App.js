import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import USADeliveryPage from "./pages/USADeliveryPage";
import EUDeliveryPage from "./pages/EUDeliveryPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/usa-delivery" element={<USADeliveryPage />} />
              <Route path="/eu-delivery" element={<EUDeliveryPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
        <Toaster position="top-right" />
      </div>
    </LanguageProvider>
  );
}

export default App;
