import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjelerList from "../components/ProjelerList";
import ProjelerData from "../components/ProjelerData";
import "../styles/TumProjeler.css";
import { motion } from "framer-motion";

function TumProjeler() {
  const [projeler, setProjeler] = useState([]);

  // useEffect(() => {
  //   fetch("veritabanı-url") // Veritabanı URL'sini buraya ekleyin
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProjeler([...data, ...projeler]);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <motion.div
      style={{ paddingTop: "5vh", height: "90vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <Container style={{maxWidth: "80%"}}>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="proje-list-button"
          style={{ minWidth: "30%", maxWidth: "40%", marginBottom: "5vh" }}
        >
          Anasayfa
        </button>
        <Col style={{ justifyContent: "center", alignContent: "center" }}>
          {ProjelerData.map((proje, index) => (
            <Row key={index} className="project-button">
              <ProjelerList
                ad={proje.title}
                resim={proje.src}
                link={proje.link}
              />
            </Row>
          ))}
        </Col>
      </Container>
    </motion.div>
  );
}

export default TumProjeler;
