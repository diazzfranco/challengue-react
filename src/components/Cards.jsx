import React from 'react';
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const Cards = ({ ciudades }) => {
  return (
    <Container className='contenedor'>
      <Row className='justify-content-center'>
        {ciudades.map((ciudad) => (
          <Col lg={4}>
            <Card className='card mx-4 ' style={{ width: '18rem', height:"37rem", borderRadius: '30%' }}>
              <Card.Body className='card-body d-flex flex-column justify-content-center '>
                <h3>
                  <Badge bg="info">{ciudad.ciudad}</Badge>
                </h3>
                <Card.Title className='text-light mx-2 '>{ciudad.temperatura}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
