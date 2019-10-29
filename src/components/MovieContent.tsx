import React, { FC } from "react";
import styled from "styled-components";
import { IMovie } from "../interfaces/Movie";

const MovieContent: FC<{
  movie: IMovie;
  director: any;
  cast: any[];
  similarMovies: IMovie[];
}> = ({ movie, cast, director, similarMovies }) => {
  return (
    <Container>
      <div>{movie.original_title}</div>
      <div>{movie.release_date}</div>
      <div>{movie.overview}</div>
      <ul>
        {cast.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>Director: {director.name}</div>
      <ul>
        {similarMovies.map((item: IMovie) => (
          <li key={item.id}>
            <h3>{item.original_title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={`${item.original_title} poster`}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export const Container = styled.div``;

export default MovieContent;
