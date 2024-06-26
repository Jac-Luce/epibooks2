import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { ThemeContext } from '../contextProvider/ThemeContextProvider';
import { useContext } from 'react';

export default function MyFooter() {

    const {theme} = useContext(ThemeContext);

  return (
    <Container bg={theme} variant={theme} className='mt-5'>
        <Row>
            <Col>
                <h6 className={theme === 'dark' ? 'text-light' : null}>React-EpicBooks</h6>
                <p><Button variant='link'>Informativa sulla privacy</Button></p>
                <p><Button variant='link'>Informativa sui cookie</Button></p>
                <p><Button variant='link'>Termini e condizioni</Button></p>
            </Col>
            <Col className='mt-4 pt-1'>
                <p><Button variant='link'>Store locator</Button></p>
                <p><Button variant='link'>Lavora con noi</Button></p>
                <p><Button variant='link'>Chi siamo</Button></p>
            </Col>
            <Col className='mt-4'>
                <Button variant='link'>
                    <FaFacebook />
                </Button>
                <Button variant='link'>
                    <FaInstagram />
                </Button>
                <Button variant='link'>
                    <FaTwitter />
                </Button>
                <Button variant='link'>
                    <FaYoutube />
                </Button>
            </Col>
        </Row>
    </Container>
  )
}
