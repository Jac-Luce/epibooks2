import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './Welcome.css';

export default function Welcome() {
  return (
      <Container className='text-center bg-welcome'>
        <div className="m-3 p-3 ">
            <p>Hey, che bello vederti!</p>
            <hr />
            <h5 className="mb-0">
            Benvenuto in React-EpicBooks!
            </h5>
        </div>   
      </Container> 
  )
}
