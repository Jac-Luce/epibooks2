import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasy from '../data/fantasy.json';
import { Row , Container } from 'react-bootstrap';
import './AllTheBooks.css';
//import { useState } from 'react';
import SingleBook from './SingleBook';

export default function AllTheBooks() {
  //const [inputBook , setInputBook] = useState('');
  return (
    <Container>
      <div className='text-center'>
        <input type="text" placeholder='Cerca libro..' className='mb-3 py-2 ps-3 rounded-pill border border-1'/>
      </div>
      <Row className='g-2'>
        {fantasy.map((book) => {
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
