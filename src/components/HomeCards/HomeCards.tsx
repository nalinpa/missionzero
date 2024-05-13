import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DisplayCard from '../DisplayCard/DisplayCard';

interface Props {}

const HomeCards = (props: Props) => {
  return (
    <Container>
    <Row>
      <Col><DisplayCard /></Col>
      <Col><DisplayCard /></Col>
      <Col><DisplayCard /></Col>
    </Row>
  </Container>
  )
}

export default HomeCards