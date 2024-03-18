import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasy from '../data/fantasy.json';
import { Row , Container } from 'react-bootstrap';
import './AllTheBooks.css';
import { useState } from 'react';
import SingleBook from './SingleBook';

export default function AllTheBooks() {
  //Stato dell'input
  const [inputBook , setInputBook] = useState('');
  //Stato della ricerca
  const [searchBook , setSearchBook] = useState([fantasy]);

  //Funzione che filtra l'array di libri fantasy
  function lookFilterBook (el) {
    setInputBook(el);
    let filteredBooks = fantasy.filter((book)=> book.title.toLowerCase().includes(inputBook.toLowerCase()));
    setSearchBook(filteredBooks);
  }

  return (
    <Container>
      <div className='text-center'>
        <input type="text" placeholder='Cerca libro..' className='mb-3 py-2 ps-3 rounded-pill border border-1' value={inputBook} onChange={(el) => lookFilterBook(el.target.value)}/>
      </div>
      <Row className='g-2'>
        {
          searchBook.map((book) => {
          return (
            <SingleBook 
              key= {book.asin}
              img = {book.img}
              title = {book.title}
            />
          )
        })}
      </Row>
    </Container>
  )
}
