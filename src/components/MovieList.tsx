import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { getMovies } from "../queries/queries";
import { IMovie } from "../interfaces/Movie"

const MovieList = () => {
  const displayMovies = () => {
    const { loading, data } = useQuery<{ movies:IMovie[] }>(
      getMovies,
    );
    console.log(loading, data)
    return loading ? ( <div>loading movies...</div>) : (data.movies.map(item => <li>{item.name}</li>))
  }
    return (
      <div>
        <h1>Movie</h1>
        <ul>{displayMovies()}</ul>
      </div>
    );
}

export default MovieList
