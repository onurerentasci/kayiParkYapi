import React from "react";
import NavbarBS from "../components/NavbarBS";
import Projeler from "./Projeler";
import Contact from "./Contact";
import Slider from "../components/MainSlider/Slider";
import { motion } from "framer-motion";

function Anasayfa() {
  return (
    <motion.div
      id="anasayfa"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <NavbarBS />
      <section className="anasayfa">
        <Slider />
      </section>
      <section className="projeler">
        <Projeler />
      </section>
      <section className="iletisim">
        <Contact />
      </section>
    </motion.div>
  );
}

export default Anasayfa;
