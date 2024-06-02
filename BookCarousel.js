import React from 'react';
import { Carousel } from 'react-bootstrap';

const BookCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/719njS5bQhL._AC_UF1000,1000_QL80_.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>The Little Princes</h3>
          <h2>Author:Antoine de Saint-Exupéry</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>The Alchemist </h3>
          <h2>Author:Paulo Coelho </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Harry Potter and the Philosopher's Stone</h3>
        <h2>Author:J. K. Rowling</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BookCarousel;
