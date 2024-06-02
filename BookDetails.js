import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const BookDetails = ({ book }) => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <img src="book.image" alt={book.title} className="img-fluid" />
        </Col>
        <Col md={8}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <Button variant="primary">Buy Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
