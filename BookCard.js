import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BookCard = ({ book }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71HOUccJT6L._AC_UF1000,1000_QL80_.jpg" />
      <Card.Body>
        <Card.Title>And Then There Were None</Card.Title>
        <Card.Text>
        Agatha Christie
          <br />
          ₹.1443
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
        <Button variant="link">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
