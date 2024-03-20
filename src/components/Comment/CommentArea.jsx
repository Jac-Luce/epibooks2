import React, { useEffect, useState } from 'react'
import CommentList from './CommentList';
import AddComment from './AddComment';

export default function CommentArea({asin}) {

    const endpoint = `https://striveschool-api.herokuapp.com/api/books/:${asin}/comments/ `;
    const apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0Yjk3ZTljNDM3MDAwMTkzYzM2MjkiLCJpYXQiOjE3MTA2Njk3MjIsImV4cCI6MTcxMTg3OTMyMn0.bw4nHXkV9EIAQ7B5EZSyCc9uBh8nLH1G3ygK1tTqUnU';

    const [resultComment, setResultComment] = useState([]);

    async function getResults() {
      try {

        const response = await fetch(endpoint, {headers: {"Content-type": "application/json", "Authorization": apiKey}});
        
        if (response.ok){

          const result = await response.json();

          setResultComment(result);
        } else{
          const error = new Error(`Error Status: ${response.status}`);
          error.response = response;
          throw error;
        }

      } catch (err) {
        console.error(err);
        
      }
    }

    useEffect(() => {
      getResults();
    }, []);

  return (


    <>
        <CommentList resultComment = {resultComment} />
        <AddComment asin={asin} getResults={getResults}/>
    </>
  )
}
