import React from 'react'
import { Form } from 'react-bootstrap';

export default function AddComment() {

  const endpoint = 'https://striveschool-api.herokuapp.com/api/comments';
  const apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0Yjk3ZTljNDM3MDAwMTkzYzM2MjkiLCJpYXQiOjE3MTA2Njk3MjIsImV4cCI6MTcxMTg3OTMyMn0.bw4nHXkV9EIAQ7B5EZSyCc9uBh8nLH1G3ygK1tTqUnU';

  return (
    <>
      <Form className='mb-3 mt-3'>
        <Form.Group className='mb-3'>
          <Form.Label>Aggiungi un commento</Form.Label>
          <Form.Control type='text' placeholder='Lascia un commento..' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Aggiungi valutazione</Form.Label>
          <Form.Control type='number' placeholder='Lascia un punteggio da 1 a 5' />
        </Form.Group>
      </Form>
    </>
  )
}
