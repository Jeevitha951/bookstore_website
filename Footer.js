import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row>
          <Col>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </Col>
          <Col>
            <p>Follow us on:</p>
            <p>Social Media Links</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
