import React from 'react'
import './AllTheBooks.css';
import { Col, Card } from 'react-bootstrap';

export default function SingleBook(props) {
  return (
    <>
        <Col xs={12} md={4} key={props.asin}>
              <Card className="d-flex flex-column">
                <Card.Img variant="top" src={props.img} className='img-style'/>
                <Card.Body>
                  <Card.Title>{props.title}</Card.Title>
                </Card.Body>
              </Card>
        </Col>
    </>
  )
}
