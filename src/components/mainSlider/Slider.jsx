import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import dataSlider from "./DataSlider";

export default function Slider() {
  return (
    <Carousel fade interval={5000}>
      {dataSlider.map((photo, index) => (
        <Carousel.Item
          key={index}
          style={{ height: "88vh", marginTop: "110px" }}
        >
          <img
            className="d-flex flex-column h-100 w-100"
            src={photo.src}
            alt={`Slide ${index + 1}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            <h3>{photo.title}</h3>
            <p>{photo.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
