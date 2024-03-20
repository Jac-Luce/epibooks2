import React from 'react'
import './SingleBook.css';
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import CommentArea from '../Comment/CommentArea';

export default function SingleBook(props) {

    const {book} = props;

    //Stato selezione copertina del libro
    const [selected, setSelected] = useState(false);

    function redBorderBook() {
        setSelected(!selected);
    }

  return (
    <>
      <Card className="d-flex flex-column" border={selected ? 'danger' : 'none'} onClick={redBorderBook}>
        <Card.Img variant="top" src={book.img} className='img-style'/>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={book.asin}/>}
        
    </>
  )
}
