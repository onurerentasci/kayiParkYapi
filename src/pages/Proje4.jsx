import React, { useState } from "react";
import "../styles/Projeler.css";
import { Container, Row, Col, Modal } from "react-bootstrap";
import images from "../components/Proje4Data";
import { motion } from "framer-motion";

function Proje4() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image.src);
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const navigateNext = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setSelectedImage(images[nextIndex].src);
    setCurrentImageIndex(nextIndex);
  };

  const navigatePrevious = () => {
    const previousIndex =
      (currentImageIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex].src);
    setCurrentImageIndex(previousIndex);
  };

  return (
    <motion.div
      style={{ paddingTop: "5vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 }  }}
    >
      <Container>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="proje-list-button"
          style={{ minWidth: "30%", maxWidth: "40%", marginBottom: "5vh" }}
        >
          Anasayfa
        </button>
        <Row>
          {images.map((image, index) => (
            <Col key={index} sm={6} md={5} lg={4}>
              <img
                src={image.src}
                alt={`Proje4 ${index + 1}`}
                className="img-fluid"
                onClick={() => openModal(image, index)}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Modal
        show={showModal}
        onHide={closeModal}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Body>
          <img
            src={selectedImage}
            alt="Seçilen Fotoğraf"
            className="modal-image"
            style={{ width: "100%", height: "auto" }}
          />
          <button className="modal-nav-button left" onClick={navigatePrevious}>
            &#8249;
          </button>
          <button className="modal-nav-button right" onClick={navigateNext}>
            &#8250;
          </button>
        </Modal.Body>
      </Modal>
    </motion.div>
  );
}

export default Proje4;
