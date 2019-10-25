import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import { IMovie } from "../../interfaces/Movie";
import Card from "../../components/card/Card";

const MoviePage = () => {
  const router = useRouter();
  const [movie, setMovie] = useState<IMovie>();
  const [loaded, setLoaded] = useState<boolean>(false);
  const { movie_id } = router.query;
  console.log(movie_id);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=7d452802073548c625912b988e9cffd6&language=en-US`
    )
      .then(response => response.json())
      .then(response => {
        setMovie(response);
        setLoaded(true);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    loaded && (
      <Layout>
        <div>slug is: {movie_id}</div>
        <Card movie={movie} />
      </Layout>
    )
  );
};

export default MoviePage;
