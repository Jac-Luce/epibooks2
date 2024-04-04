import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { ThemeContext } from '../../contextProvider/ThemeContextProvider';
import { useContext } from 'react';

export default function AddComment({asin, getResults}) {

  const endpoint = 'https://striveschool-api.herokuapp.com/api/comments';
  const apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0Yjk3ZTljNDM3MDAwMTkzYzM2MjkiLCJpYXQiOjE3MTIxMzI1MDQsImV4cCI6MTcxMzM0MjEwNH0.mYWUiRYFvaP1_QuZBMD0XtnZgzI1C2ElhYksOr2kZkw';
  
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState();

  const {theme} = useContext(ThemeContext);

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
      <Form className='mb-3 mt-3' onSubmit={postComment} bg={theme} variant={theme}>
        <Form.Group className='mb-3'>
          <Form.Label className={theme === 'dark' ? 'text-white-50' : null} style={{fontSize: '14px'}}>Lascia una recensione</Form.Label>
          <Form.Control size='sm' type='text' placeholder='Scrivi qui la tua recensione..' onChange={(e) => setComment(e.target.value)}/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label className={theme === 'dark' ? 'text-white-50' : null} style={{fontSize: '14px'}}>Aggiungi valutazione</Form.Label>
          <Form.Select size='sm' onChange={(e) => setRate(e.target.value)}>
            <option>Seleziona valutazione</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <Button className='mb-3 py-1 rounded-pill' style={{fontSize: '13px'}} onClick={() => postComment()}>Invia</Button>
    </>
  )
}
