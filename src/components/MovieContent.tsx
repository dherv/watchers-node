import React, { FC } from "react";
import styled from "styled-components";
import { IMovie } from "../interfaces/Movie";
import moment from "moment";
import Card, { cardSmall } from "./card/Card";

const MovieContent: FC<{
  movie: IMovie;
  director: any;
  cast: any[];
  similarMovies: IMovie[];
}> = ({ movie, cast, director, similarMovies }) => {
  return (
    <Container>
      <Title>{movie.original_title}</Title>
      <Content>
        <Release>{moment(movie.release_date).format("LL")}</Release>
        <Overview>{movie.overview}</Overview>
        <Credits>
          <h4>Starring</h4>
          <ul>
            {cast.map((item, index) => (
              <li key={item.id}>
                {`${item.name}${index === cast.length - 1 ? "" : ","}`}
              </li>
            ))}
          </ul>
          <br />
          <h4>Director</h4>
          <span>{director.name}</span>
        </Credits>

        <Related>
          <h3>Related</h3>
          <ul>
            {similarMovies.map((item: IMovie) => (
              <li key={item.id}>
                <Card movie={item} theme={cardSmall}></Card>
              </li>
            ))}
          </ul>
        </Related>
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h2`
  display: inline-block;
  padding-bottom: 2rem;
  font-size: 2rem;
  font-weight: 100;
  border-bottom: 1px solid;
`;

const Content = styled.div`
  padding: 2rem 0;
`;

const Release = styled.h5`
  font-weight: 600;
  font-size: 1.25rem;
`;

const Overview = styled.p`
  margin: 2rem 0;
  max-width: 600px;
  font-family: var(--secondary-font);
`;

const Credits = styled.div`
  h4 {
    display: inline-block;
    font-weight: 600;
  }
  ul,
  span {
    display: inline-block;
    margin-left: 2rem;
  }
  li {
    display: inline-block;
    margin-right: 4px;
    font-family: var(--secondary-font);
  }
`;

const Related = styled.div`
  h3 {
    opacity: 0.8;
    font-weight: 600;
    font-size: 1.25rem;
    margin: 2rem 0 1rem;
  }
  ul {
    display: flex;
    max-width: 600px;
  }
  li {
    margin-right: 1rem;
  }
`;
export default MovieContent;
