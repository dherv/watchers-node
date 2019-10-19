import React from "react";
import styled from "styled-components";
import CardRating from "./CardRating";

const CardImage = ({ src, rating }: { src: string; rating: number }) => (
  <Container>
    <Image src={src}></Image>
    <CardRating size={48} rating={rating} />
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
