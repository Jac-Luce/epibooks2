import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function SingleComment(props) {

    const {comment, rate} = props;

  return (
    <>
        <ListGroup.Item as='li' className='px-2 py-1' style={{fontSize: '14px'}}>
            {comment} {rate}
        </ListGroup.Item>
    </>
  )
}
