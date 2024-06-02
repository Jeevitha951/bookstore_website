// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Header from './components/Header';
import BookCarousel from './components/BookCarousel';
import BookCard from './components/BookCard';
import Footer from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

const books = [
  { image: 'https://via.placeholder.com/150', title: 'Book 1', author: 'Author 1', price: '$10', description: 'Description 1' },
  { image: 'https://via.placeholder.com/150', title: 'Book 2', author: 'Author 2', price: '$15', description: 'Description 2' },
  { image: 'https://via.placeholder.com/150', title: 'Book 3', author: 'Author 3', price: '$20', description: 'Description 3' }
];

function App() {
  return (
    <div>
      <Header />
      <BookCarousel />
      <Container>
        <Row>
          {books.map((book, index) => (
            <Col key={index} md={4}>
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
