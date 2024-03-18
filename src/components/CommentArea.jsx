import React, { useState } from 'react'
import CommentList from './CommentList';
import AddComment from './AddComment';

export default function CommentArea() {

    const endpoint = 'https://striveschool-api.herokuapp.com/api/books/:asin/comments/';
    const apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0Yjk3ZTljNDM3MDAwMTkzYzM2MjkiLCJpYXQiOjE3MTA2Njk3MjIsImV4cCI6MTcxMTg3OTMyMn0.bw4nHXkV9EIAQ7B5EZSyCc9uBh8nLH1G3ygK1tTqUnU';

    const [results, setResults] = useState([]);
  return (
    <div>
        <CommentList />
        <AddComment />
    </div>
  )
}
