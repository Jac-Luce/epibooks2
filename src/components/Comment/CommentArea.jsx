import React, { useEffect, useState } from 'react'
import CommentList from './CommentList';
import AddComment from './AddComment';
import SpinnerLoading from './SpinnerLoading';

export default function CommentArea({asin}) {

    //const endpoint = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/ `;
    const endpoint = `https://striveschool-api.herokuapp.com/api/comments/${asin}`;
    const apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0Yjk3ZTljNDM3MDAwMTkzYzM2MjkiLCJpYXQiOjE3MTIxMzI1MDQsImV4cCI6MTcxMzM0MjEwNH0.mYWUiRYFvaP1_QuZBMD0XtnZgzI1C2ElhYksOr2kZkw';
    
    const [resultComment, setResultComment] = useState([]);

    const [spinnerLoading, setSpinnerLoading] = useState(false);

    async function getResults() {
      try {
        setSpinnerLoading(true);
        const response = await fetch(endpoint, {headers: {"Content-type": "application/json", "Authorization": apiKey}});
        
        if (response.ok){

          const result = await response.json();
           //console.log(result);
          setResultComment(result);
          setSpinnerLoading(false);
        } else{
          const error = new Error(`Error Status: ${response.status}`);
          error.response = response; 
          setSpinnerLoading(false);
          throw error;
        }

      } catch (err) {
        console.error(err);       
        setSpinnerLoading(false); 
      }
    }

    useEffect(() => {
      if(asin){
        getResults();
      }
    }, [asin]);

  return (
    <>
      {spinnerLoading && <SpinnerLoading />}
      <AddComment asin={asin} getResults={getResults}/>
      <CommentList resultComment = {resultComment} />
    </>
  )
}
