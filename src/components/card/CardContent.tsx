import React from "react";
import styled, { ThemeProvider } from "styled-components";

const CardContent = ({ title, theme }: { title: string; theme: any }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Title>{title}</Title>
      <ScoreContainer>
        <Metacritic>
          <span>Metacritic</span>
          <span>89</span>
        </Metacritic>
        <IMDb>
          <span>IMDb</span>
          <span>8.9</span>
        </IMDb>
      </ScoreContainer>
    </Container>
  </ThemeProvider>
);

const Container = styled.div`
  padding: 2rem 1rem;
  background-color: #323534;
  border-radius: 0 0 10px 10px;
`;

const Title = styled.h4`
  font-weight: 600;
  line-height: 1.5em;
  height: 3em;
  overflow: hidden;
  font-size: ${props => props.theme.fontSize};
`;

const ScoreContainer = styled.div`
  display: ${props => props.theme.textDisplay};
  margin-top: 1rem;
`;

const Score = styled.div`
  font-size: 12px;
  margin-right: 1rem;
  span:first-child {
    font-weight: 600;
    margin-right: 8px;
  }
`;

const Metacritic = styled(Score)``;
const IMDb = styled(Score)``;

export { Score, ScoreContainer, Metacritic, IMDb, Container, Title };

export default CardContent;
