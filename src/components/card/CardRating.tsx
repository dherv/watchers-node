import React from "react";
import styled from "styled-components";

const CardRating = ({ size, rating }: { size: number; rating: number }) => (
  <Container>
    <SquareContainer diagonale={Math.sqrt(2) * size}>
      <Square size={size}></Square>
      <Rating>{rating}</Rating>
    </SquareContainer>
    <BorderDrop></BorderDrop>
    <BorderRise></BorderRise>
  </Container>
);

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 5%;
  z-index: 10;
`;

const SquareContainer = styled.div<{ diagonale: number }>`
  position: relative;
  top: calc(20% - ${props => props.diagonale}px / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.diagonale}px;
  height: ${props => props.diagonale}px;
`;

const Square = styled.div<{ size: number }>`
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: #2e8e89;
  transform: rotate(45deg);
  z-index: 1;
`;

const Rating = styled.h5`
  position: absolute;
  font-weight: 800;
  font-size: 1.2rem;
  color: #ececec;
  z-index: 10;
`;

const Border = styled.div`
  position: absolute;
  width: 4px;
  background-color: var(--main-color-text);
  opacity: 0.8;
  z-index: 0;
`;

const BorderDrop = styled(Border)`
  top: 0;
  left: 20%;
  height: 20%;
`;

const BorderRise = styled(Border)`
  bottom: 0;
  right: 25%;
  height: 80%;
`;

export { Container, SquareContainer, Rating, Square, BorderRise, BorderDrop };
export default CardRating;
