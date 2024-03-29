import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from '../MyNav';
import MyFooter from '../MyFooter';
import Welcome from '../Welcome';
import AllTheBooks from '../Books/AllTheBooks';
import fantasy from '../../data/fantasy.json';
import { useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { ThemeContext } from '../../contextProvider/ThemeContextProvider';

export default function Home() {

    //Stato dell'input
   const [inputBook , setInputBook] = useState('');
   //Stato della ricerca
   const [searchBook , setSearchBook] = useState(fantasy);
 
   //Funzione che filtra l'array di libri fantasy
   function lookFilterBook (el) {
     setInputBook(el);
     let filteredBooks = fantasy.filter((book)=> book.title.toLowerCase().includes(inputBook.toLowerCase()));
     setSearchBook(filteredBooks);
   }

   const {theme} = useContext(ThemeContext);

  return (
    
    <Container fluid className={'bg-' + theme}>
      <MyNav inputBook= {inputBook} lookFilterBook= {lookFilterBook}/>
      <Container fluid>
        <Welcome />
        <AllTheBooks searchBook={searchBook}/>
      </Container>
      <MyFooter />
    </Container>

  )
}
