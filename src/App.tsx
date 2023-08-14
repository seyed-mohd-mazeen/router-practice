import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home";
import { ErrorPage } from "./components/pages/error-page";
import { LoginScreen } from "./components/login-screen";
import { About } from "./components/pages/about";
import { Contact } from "./components/pages/contact";
import { Services } from "./components/pages/services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" index element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
