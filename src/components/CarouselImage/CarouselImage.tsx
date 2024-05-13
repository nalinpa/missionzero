import React from 'react';
import Image from 'react-bootstrap/Image';

interface Props {
    altText: string;
}

const CarouselImage = ({ altText }: Props) => {
  return (
    <Image src="thumbnail.jpg" alt={altText}  />
  )
}

export default CarouselImage