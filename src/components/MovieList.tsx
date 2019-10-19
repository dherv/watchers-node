import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getMovies } from "../graphql/queries/queries";
import { IMovie } from "../interfaces/Movie";
import Card from "./card/Card";

const MovieList = () => {
  const displayMovies = () => {
    const { loading, data } = useQuery<{ movies: IMovie[] }>(getMovies);
    return loading ? (
      <div>loading movies...</div>
    ) : (
      data.movies.map(item => <li key={item.id}>{item.name}</li>)
    );
  };
  return (
    <div>
      <h1>Movie</h1>
      <ul>{displayMovies()}</ul>
      <Card></Card>
    </div>
  );
};

export default MovieList;
