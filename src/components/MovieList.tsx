import React, { useState, useEffect } from "react";
import { IMovie } from "../interfaces/Movie";
import Card from "./card/Card";
import styled from "styled-components";

const MovieList = () => {
  const [movies, setMovies] = useState<IMovie[]>();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = (): Promise<void> => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?api_key=7d452802073548c625912b988e9cffd6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2019-09-01&release_date.lte=2019-10-30&with_release_type=4";
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        setMovies(results);
        setLoaded(true);
      });
  };

  const displayMovies = () => {
    return movies.map(movie => <Card key={movie.id} movie={movie} />);
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

export default MovieList;
