import React from 'react';
import fantasy from '../../data/fantasy.json';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '../../contextProvider/ThemeContextProvider';
import MyNav from '../MyNav';
import MyFooter from '../MyFooter';
import CommentArea from '../Comment/CommentArea';

export default function BookDetails() {

  const {theme} = useContext(ThemeContext);

  const {asin} = useParams();

  const bookShow = fantasy.find((el) => el.asin === asin);

  return (
    <Container fluid className={'bg-' + theme}>
      <MyNav />
      <Container className='my-5'>
        <Row>
          <Col md={7}>
            <Card bg={theme} variant={theme} style={{border: 'none'}}>
              <Card.Img variant='top' src={bookShow.img} style={{height: '200px', objectFit: 'contain'}}/>
              <Card.Body className='mt-3'>
                <Card.Title className={theme === 'dark' ? 'text-light' : null}
                  style={{fontSize: '20px'}}
                >
                  {bookShow.title}
                </Card.Title>
                <Card.Text className={theme === 'dark' ? 'text-white-50' : null}
                  style={{fontSize: '14px', marginTop: '20px'}}
                >
                 <b className={theme === 'dark' ? 'text-light' : null}> Categoria: </b> {bookShow.category}
                </Card.Text>
                <Card.Text className={theme === 'dark' ? 'text-white-50' : null}
                  style={{fontSize: '13px', marginTop: '20px'}}
                >
                 <b className={theme === 'dark' ? 'text-light' : null}> Prezzo: </b> {bookShow.price} €
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <CommentArea asin={asin} />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </Container>
  )
}
