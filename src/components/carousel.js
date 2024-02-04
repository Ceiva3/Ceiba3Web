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
          src={'/1.webp'} 
          style={{
            height: '75vh',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Some representative placeholder content for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={'/3.webp'} 
          style={{
            height: '75vh',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Some representative placeholder content for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={'/2.webp'} 
          style={{
            height: '75vh',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Some representative placeholder content for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
