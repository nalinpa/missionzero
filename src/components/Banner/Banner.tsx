import React, { ReactNode } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import "./Banner.css";

interface props {
    title: string;
    subtitle: string;
    children?: ReactNode;
}

const Banner = ({title, subtitle, children}: props) => {
  return (
    <Container className="banner">
        <Row>   
            <Col>   
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </Col>      
        </Row>
        <Row>
            {children}      
        </Row> 
    </Container>
  );
};

export default Banner;