import React from "react";
import styled, { ThemeProvider } from "styled-components";

const CardRating = ({ rating, theme }: { rating: number; theme: any }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <SquareContainer>
        <Square></Square>
        <Rating>{rating}</Rating>
      </SquareContainer>
      <BorderDrop></BorderDrop>
      <BorderRise></BorderRise>
    </Container>
  </ThemeProvider>
);

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 5%;
  z-index: 10;
`;

const SquareContainer = styled.div`
  position: relative;
  top: calc(20% - ${props => Math.sqrt(2) * props.theme.rating.size}px / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => Math.sqrt(2) * props.theme.rating.size}px;
  height: ${props => Math.sqrt(2) * props.theme.rating.size}px;
`;

const Square = styled.div`
  position: relative;
  width: ${props => props.theme.rating.size}px;
  height: ${props => props.theme.rating.size}px;
  background-color: #2e8e89;
  transform: rotate(45deg);
  z-index: 1;
`;

const Rating = styled.h5`
  position: absolute;
  font-weight: 800;
  font-size: ${props => props.theme.rating.fontSize}
  color: #ececec;
  z-index: 10;
`;

const Border = styled.div`
  position: absolute;
  width: ${props => props.theme.rating.line};
  background-color: var(--main-color-text);
  opacity: 0.8;
  z-index: 0;
`;

const BorderDrop = styled(Border)`
  top: 0;
  left: ${props => props.theme.rating.leftLine};
  height: 20%;
`;

const BorderRise = styled(Border)`
  bottom: 0;
  right: ${props => props.theme.rating.rightLine};
  height: 80%;
`;

export { Container, SquareContainer, Rating, Square, BorderRise, BorderDrop };
export default CardRating;
