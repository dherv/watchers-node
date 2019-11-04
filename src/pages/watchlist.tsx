import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getMovies } from "../graphql/queries/queries";
import { IMovie } from "../interfaces/Movie";

const Watchlist = () => {
  const displayMovies = () => {
    const { loading, data } = useQuery<{ movies: IMovie[] }>(getMovies);
    return loading ? (
      <div>loading movies...</div>
    ) : (
      data.movies.map((item: IMovie) => (
        <li key={item.id}>{item.original_title}</li>
      ))
    );
  };
  return (
    <div>
      <h1>Movie</h1>
      <ul>{displayMovies()}</ul>
    </div>
  );
};

export default Watchlist;
