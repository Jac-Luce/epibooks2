import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/Books/AllTheBooks';
import fantasy from './data/fantasy.json';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { ThemeContext } from './contextProvider/ThemeContextProvider';
import { useContext } from 'react';

export default function App() {

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