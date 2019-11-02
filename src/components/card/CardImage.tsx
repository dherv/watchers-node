import React from "react";
import styled from "styled-components";
import CardRating from "./CardRating";

const CardImage = ({
  src,
  rating,
  title,
  theme
}: {
  src: string;
  rating: number;
  title: string;
  theme: any;
}) => (
  <Container>
    <Image src={src} alt={`${title} poster`}></Image>
    <CardRating rating={rating} theme={theme} />
  </Container>
);

const Container = styled.div`
  position: relative;
  border-radius: 10px 10px 0 0;
`;

const Image = styled.img`
  border-radius: 10px 10px 0 0;
`;

export { Container, Image };
export default CardImage;
