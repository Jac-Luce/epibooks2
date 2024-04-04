import React from 'react'
import './SingleBook.css';
import { Card, Button } from 'react-bootstrap';
import  { ThemeContext } from '../../contextProvider/ThemeContextProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImInfo } from "react-icons/im";

export default function SingleBooks(props) {
  
  const navigate = useNavigate();

  const bookNavigate = () => {
    navigate('/bookdetails/' + book.asin);
  };

  const {book, selected, setSelected} = props;

  const {theme} = useContext(ThemeContext);

    //Stato selezione copertina del libro
   /* const [selected, setSelected] = useState(false);

    function redBorderBook() {
        setSelected(!selected);
    }*/

  return (
    <>
      <Card className="d-flex flex-column position-relative shadow-sm" 
        border={selected === book.asin ? 'danger' : 'none'}  
        onClick={() => setSelected(book.asin)}  
        bg={theme} variant={theme}
      >
        <Card.Img variant="top" src={book.img} className='img-style'/>
        <Card.Body className='p-2'>
          <Card.Title className={theme === 'dark' ? 'text-light' : null}
            style={{fontSize: '15px', textAlign: 'center'}}
          >
            {book.title}
          </Card.Title>
        </Card.Body>
        <Button onClick={bookNavigate} className='btn-sm rounded-circle position-absolute btnInfo'>
          <ImInfo />
        </Button>
      </Card>
      {/*selected && <CommentArea asin={book.asin}/>*/}
        
    </>
  )
}
