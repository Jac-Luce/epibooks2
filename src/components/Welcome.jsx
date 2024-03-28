import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './Welcome.css';

export default function Welcome() {
  return (
      <Container className='text-center bg-welcome'>
        <p className="mx-3 mt-3 px-3 pt-3">Hey, che bello vederti!</p>
        <hr />
        <h5 className="m-3 px-3 pb-3 "> Benvenuto in React-EpicBooks! </h5>
      </Container> 
  )
}
