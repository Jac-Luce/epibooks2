import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Container } from 'react-bootstrap';

export default function Welcome() {
  return (
    <Container className="text-center">
        <Alert variant="success">
            <Alert.Heading>Hey, che bello vederti!</Alert.Heading>
            <hr />
            <h5 className="mb-0">
            Benvenuto in React-EpicBooks!
            </h5>
        </Alert>    
    </Container>
  )
}
