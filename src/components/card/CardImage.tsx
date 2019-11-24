import React from "react";
import styled from "styled-components";
import CardRating from "./CardRating";
import { IMovie } from "../../interfaces/IMovie";

const CardImage = ({ movie, theme }: { movie: IMovie; theme: any }) => (
  <Container>
    <Image
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={`${movie.original_title} poster`}
    ></Image>
    <CardRating rating={movie.vote_average} theme={theme} />
  </Container>
);

const Container = styled.div`
  position: relative;
  max-width: ${props => props.theme.image.maxWidth};
  border-radius: ${props => props.theme.image.borderRadius};
`;

const Image = styled.img`
  border-radius: ${props => props.theme.image.borderRadius};
`;

export { Container, Image };
export default CardImage;
