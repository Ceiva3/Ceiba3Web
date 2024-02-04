import React, { useEffect, useRef } from "react";
import { Carousel, Image } from "react-bootstrap";

export default function MyCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Carousel ref={carouselRef} interval={20000} touch={false}>
      <Carousel.Item>
        <Image
          src={"/1.webp"}
          style={{
            height: "75vh",
            objectFit: "cover",
            display: "block",
          }}
        />
        <Carousel.Caption>
          <h3>Equipo de Ángulo Ambiental</h3>
          <p>Comenzando reforestación</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={"/3.webp"}
          style={{
            height: "75vh",
            objectFit: "cover",
            display: "block",
          }}
        />
        <Carousel.Caption>
          <h3>Equipo Dev de Ceiba3</h3>
          <p>Equipo de desarrolladores de Ceiba3</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={"/2.webp"}
          style={{
            height: "75vh",
            objectFit: "cover",
            display: "block",
          }}
        />
        <Carousel.Caption>
          <h3>Equipo de Ángulo Ambiental</h3>
          <p>Comenzando reforestación</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
