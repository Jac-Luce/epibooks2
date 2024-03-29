import './App.css';
/*import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/Books/AllTheBooks';
import fantasy from './data/fantasy.json';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { ThemeContext } from './contextProvider/ThemeContextProvider';
import { useContext } from 'react'; */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import BookDetails from './components/Books/BookDetails';

export default function App() {
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
   }

   const {theme} = useContext(ThemeContext); */

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='*' element={ <h1> 404 Page Not Found </h1> } />
        <Route path='/bookdetails' element={ <BookDetails /> } />
        <Route path='/bookdetails/:asin' element={ <BookDetails /> } />
      </Routes>
    </BrowserRouter>

  )
}