import React from "react";
import "../styles/TumProjeler.css";
import { motion } from "framer-motion";

const ProjelerList = ({ ad, resim, link }) => {
  return (
    <motion.div
      className="d-flex flex-column"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div
        className="proje-list mb-3"
        onClick={() => (window.location.href = link)}
      >
        <img
          className="project-button"
          variant="top"
          src={resim}
          alt="Proje Resmi"
        ></img>
        <div className="project-name-overlay">
          <div className="project-name">{ad}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjelerList;
