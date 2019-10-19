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
  width: 300px;
`;

const Image = styled.img``;
export default CardImage;
