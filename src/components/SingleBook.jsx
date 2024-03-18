import React from 'react'
import './AllTheBooks.css';
import { Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import CommentArea from './CommentArea';

export default function SingleBook(props) {

    const {asin, img, title} = props;

    //Stato selezione copertina del libro
    const [selected, setSelected] = useState(false);

    function redBorderBook() {
        setSelected(!selected);
    }

  return (
    <>
        <Col xs={12} md={3} key={asin}>
              <Card className="d-flex flex-column" border={selected ? 'danger' : 'none'} onClick={redBorderBook}>
                <Card.Img variant="top" src={img} className='img-style'/>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                </Card.Body>
                {selected && <CommentArea />}
              </Card>
        </Col>
    </>
  )
}
