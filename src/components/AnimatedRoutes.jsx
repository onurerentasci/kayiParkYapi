import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Proje4 from "../pages/Proje4";
import Proje3 from "../pages/Proje3";
import TumProjeler from "../pages/TumProjeler";
import Anasayfa from "../pages/Anasayfa";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/projeler" element={<TumProjeler />} />
        <Route path="/proje3" element={<Proje3 />} />
        <Route path="/proje4" element={<Proje4 />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
