import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import fantasy from '../../data/fantasy.json';
import { Row , Container, Col } from 'react-bootstrap';
import './AllTheBooks.css';
import SingleBook from './SingleBook';
import  { ThemeContext } from '../../contextProvider/ThemeContextProvider';
import { useContext } from 'react';
import CommentArea from '../Comment/CommentArea';

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

  const [selected, setSelected] = useState(false);

  return (
    <Container bg={theme} variant={theme} className='mt-5'>
      {/*<div className='text-center'>
        <input 
        type="text" 
        placeholder='Cerca libro..' 
        className='mb-3 py-2 ps-3 rounded-pill border border-1'
        value={inputBook} 
        onChange={(el) => lookFilterBook(el.target.value)}
        />
      </div> */}
      <Row>
        <Col md={8}>
          <Row className='g-2' >
            {
              searchBook.map((book) => {
              return (
                <Col xs={12} md={4} key={book.asin}>
                  <SingleBook 
                    book = {book} 
                    selected = {selected} 
                    setSelected = {setSelected}
                    
                  />
                </Col>
              )
            })}
          </Row>
        </Col>
        <Col md={4} >
          <CommentArea asin = {selected}/>
        </Col>
      </Row>
    </Container>
  )
}
