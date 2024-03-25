import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import fantasy from '../../data/fantasy.json';
import { Row , Container, Col } from 'react-bootstrap';
import './AllTheBooks.css';
//import { useState } from 'react';
import SingleBook from './SingleBook';
import  { ThemeContext } from '../../contextProvider/ThemeContextProvider';
import { useContext } from 'react';

export default function AllTheBooks(props) {

  const {searchBook} = props;
  /*
  //Stato dell'input
  const [inputBook , setInputBook] = useState('');
  //Stato della ricerca
  const [searchBook , setSearchBook] = useState(fantasy);

  //Funzione che filtra l'array di libri fantasy
  function lookFilterBook (el) {
    setInputBook(el);
    let filteredBooks = fantasy.filter((book)=> book.title.toLowerCase().includes(inputBook.toLowerCase()));
    setSearchBook(filteredBooks);
  } */

  const {theme} = useContext(ThemeContext);

  return (
    <Container bg={theme} variant={theme}>
      {/*<div className='text-center'>
        <input 
        type="text" 
        placeholder='Cerca libro..' 
        className='mb-3 py-2 ps-3 rounded-pill border border-1'
        value={inputBook} 
        onChange={(el) => lookFilterBook(el.target.value)}
        />
      </div> */}
      <Row className='g-2' bg={theme} variant={theme}>
        {
          searchBook.map((book) => {
          return (
            <Col xs={12} md={3} key={book.asin} >
              <SingleBook book = {book} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
