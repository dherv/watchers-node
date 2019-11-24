import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getMovies } from "../graphql/queries/queries";
import { IMovie } from "../interfaces/IMovie";
import Card, { cardLandscapeSmall } from "../components/card/Card";
import styled from "styled-components";

const Watchlist = () => {
  const displayMovies = () => {
    const { loading, data } = useQuery<{ movies: IMovie[] }>(getMovies);
    return loading ? (
      <div>loading movies...</div>
    ) : (
      data.movies.map((item: IMovie) => (
        <CardContainer key={item.id}>
          <Card
            movie={item}
            theme={cardLandscapeSmall}
            parentPage="watchlist"
          ></Card>
        </CardContainer>
      ))
    );
  };
  return (
    <Container>
      <List>{displayMovies()}</List>
    </Container>
  );
};

const Container = styled.div`
  width: 70vw;
  margin: 2rem auto;
`;
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const CardContainer = styled.div`
  margin: 2rem;
`;
export default Watchlist;
