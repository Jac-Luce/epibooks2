import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

export default function AddComment({asin, getResults}) {

  const endpoint = 'https://striveschool-api.herokuapp.com/api/comments';
  const apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0Yjk3ZTljNDM3MDAwMTkzYzM2MjkiLCJpYXQiOjE3MTA2Njk3MjIsImV4cCI6MTcxMTg3OTMyMn0.bw4nHXkV9EIAQ7B5EZSyCc9uBh8nLH1G3ygK1tTqUnU';

  const [comment, setComment] = useState("");
  const [rate, setRate] = useState();

  async function postComment() {

    let commentObj = {
      "comment" : comment,
      "rate" : rate,
      "elementId" : asin,
    };

    try {
      
      const response = await fetch(endpoint, {
        method: "POST",
        
        headers: {
          "Content-type": "application/json", 
          "Authorization": apiKey,
        },

        body: JSON.stringify(commentObj),
      });

      if(response.ok) {
        getResults();
      }

    } catch (error) {
      console.error(error);
    }

  }

  return (
    <>
      <Form className='mb-3 mt-3' onSubmit={postComment}>
        <Form.Group className='mb-3'>
          <Form.Label>Aggiungi un commento</Form.Label>
          <Form.Control type='text' placeholder='Lascia un commento..' onChange={(e) => setComment(e.target.value)}/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Aggiungi valutazione</Form.Label>
          <Form.Control type='number' placeholder='Lascia un punteggio da 1 a 5' onChange={(e) => setRate(e.target.value)} />
        </Form.Group>
      </Form>
      <Button className='mb-3' onClick={() => postComment()}>Invia</Button>
    </>
  )
}
