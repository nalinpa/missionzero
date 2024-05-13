import React, { ReactNode } from 'react';
import Row from 'react-bootstrap/Row';
import './Hero.css';

interface Props {
    hero: string;
    children: ReactNode;
}

const Hero = ({ hero, children }: Props) => {
    const classString = "px-4 py-5 " + hero;
  return (
    <Row className={classString}>
        {children}
    </Row>
  )
}

export default Hero