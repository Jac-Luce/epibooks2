import React from 'react'
import './SingleBook.css';
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import CommentArea from '../Comment/CommentArea';
import  { ThemeContext } from '../../contextProvider/ThemeContextProvider';
import { useContext } from 'react';

export default function SingleBook(props) {

    const {book} = props;

    const {theme} = useContext(ThemeContext);

    //Stato selezione copertina del libro
    const [selected, setSelected] = useState(false);

    function redBorderBook() {
        setSelected(!selected);
    }

  return (
    <>
      <Card className="d-flex flex-column" border={selected ? 'danger' : 'none'} onClick={redBorderBook}  bg={theme} variant={theme}>
        <Card.Img variant="top" src={book.img} className='img-style'/>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={book.asin}/>}
        
    </>
  )
}
