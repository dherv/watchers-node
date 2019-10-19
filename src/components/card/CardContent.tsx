import React from "react";
import styled from "styled-components";

const CardContent = ({ title }: { title: string }) => (
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
);

const Container = styled.div`
  padding: 2rem 1rem;
  background-color: #323534;
  border-radius: 0 0 10px 10px;
`;

const Title = styled.h4`
  font-weight: 600;
  font-size: 1.5rem;
`;

const ScoreContainer = styled.div`
  display: flex;
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
