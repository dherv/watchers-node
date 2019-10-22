import React from "react";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import styled from "styled-components";
import { IMovie } from "../../interfaces/Movie";

const Card = ({ movie }: { movie: IMovie }) => {
  const poster_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <Container>
      <CardImage
        src={poster_url}
        rating={movie.vote_average}
        title={movie.original_title}
      ></CardImage>
      <CardContent title={movie.original_title}></CardContent>
    </Container>
  );
};

export const Container = styled.div`
  min-width: 300px;
  margin-right: 4rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export default Card;
