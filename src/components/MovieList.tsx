import React, { useState, useEffect } from "react";
import { IMovie } from "../interfaces/Movie";
import Card from "./card/Card";
import styled from "styled-components";
import moment from "moment";
import { useQuery } from "@apollo/react-hooks";
import { getMovies } from "../graphql/queries/queries";

const MovieList = () => {
  const [movies, setMovies] = useState<IMovie[]>();
  const [loaded, setLoaded] = useState<boolean>(false);
  const { loading, data } = useQuery<{ movies: IMovie[] }>(getMovies);

  useEffect(() => {
    fetchMovies();
  }, [loading]);

  const fetchMovies = (): Promise<void> => {
    const date_start = moment()
      .subtract(1, "M")
      .format("YYYY-MM-DD");
    const date_end = moment()
      .add(1, "M")
      .format("YYYY-MM-DD");
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=7d452802073548c625912b988e9cffd6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${date_start}&release_date.lte=${date_end}&with_release_type=4`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        setMovies(results);
        setLoaded(true);
      });
  };

  const displayMovies = () => {
    return movies.map(movie => {
      return (
        <CardContainer key={movie.id}>
          <Card
            movie={movie}
            inWatchlist={data.movies.some(item => Number(item.id) === movie.id)}
          />
        </CardContainer>
      );
    });
  };

  return loaded && <Container>{displayMovies()}</Container>;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 60px);
  margin: 0 4rem;
  overflow-x: scroll;
`;

const CardContainer = styled.div`
  margin-right: 4rem;
`;

export default MovieList;
