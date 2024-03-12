import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasy from '../data/fantasy.json';
import { Row , Col, Card, Container } from 'react-bootstrap';

export default function AllTheBooks() {
  return (
    <Container>
    <Row className="g-2">
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={4} key={book.asin}>
            <Card className="d-flex flex-column">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
    </Container>
  )
}
