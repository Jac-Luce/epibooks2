import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function SingleComment(props) {

    const {comment, rate} = props;

  return (
    <>
        <ListGroup.Item as='li'>
            {comment} {rate}
        </ListGroup.Item>
    </>
  )
}
