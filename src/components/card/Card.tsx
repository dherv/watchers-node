import React from "react";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import styled from "styled-components";
const poster_path = "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg";
const poster_url = `https://image.tmdb.org/t/p/w500${poster_path}`;

const Card = () => (
  <Container>
    <CardImage src={poster_url} rating={8.3}></CardImage>
    <CardContent title="Lion King"></CardContent>
  </Container>
);

const Container = styled.div`
  width: 300px;
  backdrop-filter: blur(4px);
`;

export default Card;
