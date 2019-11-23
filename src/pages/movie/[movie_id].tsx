import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IMovie } from "../../interfaces/Movie";
import Card, { cardRegularRotate } from "../../components/card/Card";
import styled from "styled-components";
import MovieContent from "../../components/MovieContent";
import { useQuery } from "@apollo/react-hooks";
import { getMovies } from "../../graphql/queries/queries";

// TODO: extract MoviePage to an external component and leave movie_id empty
const MoviePage = () => {
  const router = useRouter();
  const { movie_id } = router.query;
  const [movie, setMovie] = useState<IMovie>();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState({});
  const [similarMovies, setSimilarMovies] = useState<IMovie[]>([]);
  const [inWatchlist, setInWatchlist] = useState<boolean>(false);
  const { loading, data } = useQuery<{ movies: IMovie[] }>(getMovies);

  const fetchMovie = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=7d452802073548c625912b988e9cffd6&language=en-US`
    )
      .then(response => response.json())
      .then(response => {
        setMovie(response);
      })
      .catch(error => error);
  };

  const fetchCredits = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=7d452802073548c625912b988e9cffd6`
    )
      .then(response => response.json())
      .then(response => {
        const cast = response.cast.slice(0, 3);
        const director = response.crew.find(item => item.job === "Director");
        setCast(cast);
        setDirector(director);
      })
      .catch(error => error);
  };

  const fetchSimilarMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=7d452802073548c625912b988e9cffd6&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(response => {
        setSimilarMovies(response.results.slice(0, 4));
      })
      .catch(error => error);
  };

  const checkInWatchlist = (movie_id: number): Boolean =>
    data.movies.some(item => Number(item.id) === Number(movie_id));

  const fetchData = async () => {
    await fetchMovie();
    await fetchCredits();
    await fetchSimilarMovies();
    setLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, [movie_id]);

  return (
    loaded &&
    !loading && (
      <Container>
        <CardContainer>
          <Card
            movie={movie}
            theme={cardRegularRotate}
            inWatchlist={checkInWatchlist(movie.id)}
          />
        </CardContainer>

        <MovieContent
          movie={movie}
          cast={cast}
          director={director}
          similarMovies={similarMovies}
        ></MovieContent>
      </Container>
    )
  );
};

export const Container = styled.div`
  display: flex;
  margin: 5rem;
`;

const CardContainer = styled.div`
  margin-right: 8rem;
`;

export default MoviePage;
