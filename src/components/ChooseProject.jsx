import React from "react";
import { Row, Col } from "react-bootstrap";
import proje3 from "../assets/proje3.png";
import proje4 from "../assets/proje4.png";

import "../styles/Projeler.css";

function ChooseProject() {
  return (
    <Col style={{ justifyContent: "center", alignContent: "center" }}>
      <Row className="project-anim" style={{ padding: "1vh" }}>
        <a href="/proje3">
          <img className="project-button" src={proje3} alt="Upper Image" />
        </a>
      </Row>
      <Row className="project-anim" style={{ padding: "1vh" }}>
        <a href="/proje4">
          <img className="project-button" src={proje4} alt="Upper Image" />
        </a>
      </Row>
      <Row style={{ padding: "2vh", justifyContent: "end" }}>
        <button
          onClick={() => {
            window.location.href = "/projeler";
          }}
          className="list-button"
          style={{ maxWidth: "40%" }}
        >
          Tüm Projeler
        </button>
      </Row>
    </Col>
  );
}

export default ChooseProject;
