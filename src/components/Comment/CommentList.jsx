import React from 'react'
import SingleComment from './SingleComment';
import { ListGroup } from 'react-bootstrap';

export default function CommentList(props) {

  const {resultComment} = props;

  return (
    <>
      <ListGroup as='ol' numbered>
        { resultComment.map((comment) => (
          <SingleComment key={comment._id} comment={comment.comment} rate={comment.rate}/>
        ))}
          
     </ListGroup>
    </>
  )
}
