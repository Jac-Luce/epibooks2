import React from 'react'
import './SingleBook.css';
import { Card, Button } from 'react-bootstrap';
//import { useState } from 'react';
//import CommentArea from '../Comment/CommentArea';
import  { ThemeContext } from '../../contextProvider/ThemeContextProvider';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function SingleBooks(props) {
  const {asin} = useParams();

  const bookNavigate = useNavigate();

    const {book, selected, setSelected} = props;

    const {theme} = useContext(ThemeContext);

    //Stato selezione copertina del libro
   /* const [selected, setSelected] = useState(false);

    function redBorderBook() {
        setSelected(!selected);
    }*/

  return (
    <>
      <Card className="d-flex flex-column" 
        border={selected === book.asin ? 'danger' : 'none'}  
        onClick={() => setSelected(book.asin)}  
        bg={theme} variant={theme}
      >
        <Card.Img variant="top" src={book.img} className='img-style'/>
        <Card.Body>
          <Card.Title className={theme === 'dark' ? 'text-light' : null}>{book.title}</Card.Title>
          <Button onClick={() => bookNavigate('/bookdetails')} asin = {asin === book.asin}>More Info</Button>
        </Card.Body>
      </Card>
      {/*selected && <CommentArea asin={book.asin}/>*/}
        
    </>
  )
}
