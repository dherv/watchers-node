import React from "react";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import styled, { ThemeProvider } from "styled-components";
import { IMovie } from "../../interfaces/Movie";
import { useRouter } from "next/router";

const Card = ({ movie, theme }: { movie: IMovie; theme?: any }) => {
  const router = useRouter();
  const poster_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const handleRouterPush = () => {
    return router.push("/movie/[movie_id]", `/movie/${movie.id}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container onClick={() => handleRouterPush()}>
        <CardImage
          src={poster_url}
          rating={movie.vote_average}
          title={movie.original_title}
        ></CardImage>
        <CardContent title={movie.original_title} theme={theme}></CardContent>
      </Container>
    </ThemeProvider>
  );
};

export const cardSmall = () => {
  return { size: "150px", textDisplay: "none", fontSize: ".8rem" };
};

export const cardRegular = (add?: Object) => {
  return { size: "300px", textDisplay: "flex", fontSize: "1.25rem", ...add };
};

export const cardRegularRotate = cardRegular({ transform: "rotate(-2deg)" });

export const Container = styled.div`
  min-width: ${props => props.theme.size};
  max-width: 400px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  transform: ${props => props.theme.transform};
`;

type WithDefaultProps<C, D> = C & { defaultProps: D };

function withDefaultProps<C, D>(
  component: C,
  defaultProps: D
): WithDefaultProps<C, D> {
  (component as WithDefaultProps<C, D>).defaultProps = defaultProps;
  return component as WithDefaultProps<C, D>;
}

const defaultProps = {
  theme: {
    size: "300px",
    textDisplay: "flex",
    fontSize: "1.25rem"
  }
};

export default withDefaultProps(Card, defaultProps);
