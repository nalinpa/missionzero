import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface Props {}

const DisplayCard = (props: Props) => {
  return (
    <Card className="displayCard" bg="Dark" text="dark">
      <Card.Img variant="top" src="thumbnail.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text 
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default DisplayCard