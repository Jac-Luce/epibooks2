import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import ThemeButton from './ThemeButton';
import { ThemeContext } from '../contextProvider/ThemeContextProvider';
import { useContext } from 'react';

export default function MyNav(props) {

  const {theme} = useContext(ThemeContext);

  const {inputBook, lookFilterBook} = props;

  return (
    <Navbar expand="lg" /*className="bg-body-tertiary"*/ bg={theme} variant={theme} >
      <Container>
        <Navbar.Brand href="#home">React-EpicBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
        <ThemeButton />
        <input 
        type="text" 
        placeholder='Cerca libro..' 
        className='mb-3 py-2 ps-3 rounded-pill border border-1'
        value={inputBook} 
        onChange={(el) => lookFilterBook(el.target.value)}
        />
      </Container>
    </Navbar>
  )
}
