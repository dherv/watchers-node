import React, { Fragment } from "react";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
const poster_path = "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg";
const poster_url = `https://image.tmdb.org/t/p/w500${poster_path}`;

const Card = () => (
  <Fragment>
    <CardImage src={poster_url} rating={8.3}></CardImage>
    <CardContent></CardContent>
  </Fragment>
);

export default Card;
