import React from "react";
import "../styles/Projeler.css";
import { Row, Col } from "react-bootstrap";
import SideSlider from "../components/sideSlider/SideSlider";
import ChooseProject from "../components/ChooseProject";
import { motion } from "framer-motion";

function Projeler() {
  return (
    <motion.div
      id="projeler"
      className="d-flex flex-column w-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 }  }}
    >
      <h2 className="text-center">Güncel Projeler</h2>
      <Row
        className="justify-content-center"
        style={{ padding: "30px", width: "99%", alignSelf: "center" }}
      >
        <Col xs={12} sm={6}>
          <SideSlider />
        </Col>
        <Col xs={12} sm={6}>
          <ChooseProject />
        </Col>
      </Row>
    </motion.div>
  );
}

export default Projeler;
