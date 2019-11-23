import React, { MouseEvent } from "react";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import styled, { ThemeProvider } from "styled-components";
import { IMovie } from "../../interfaces/Movie";
import { useRouter } from "next/router";
import IconAdd from "../../icons/IconAdd";
import { useMutation } from "@apollo/react-hooks";
import { addMovieMutation, getMovies } from "../../graphql/queries/queries";
import IconDelete from "../../icons/IconDelete";

const Card = ({
  movie,
  inWatchlist,
  theme,
  parentPage
}: {
  movie: IMovie;
  inWatchlist: Boolean;
  theme?: any;
  parentPage?: String;
}) => {
  const router = useRouter();
  const [addMovie] = useMutation(addMovieMutation);

  const handleAddToWatchlist = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    addMovie({
      variables: {
        ...movie
      },
      refetchQueries: [{ query: getMovies }]
    });
  };

  const handleRouterPush = () => {
    return router.push("/movie/[movie_id]", `/movie/${movie.id}`);
  };

  const displayIcons = () => {
    if (parentPage === "watchlist") {
      console.log(parentPage);
      return (
        <IconDelete onClick={event => handleAddToWatchlist(event)}></IconDelete>
      );
    }
    return <IconAdd onClick={event => handleAddToWatchlist(event)}></IconAdd>;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container onClick={() => handleRouterPush()}>
        <CardImage movie={movie} theme={theme}></CardImage>
        <CardContent movie={movie} theme={theme} inWatchlist={inWatchlist}>
          {displayIcons()}
        </CardContent>
      </Container>
    </ThemeProvider>
  );
};

export const cardSmall = () => {
  return {
    size: "150px",
    textDisplay: "none",
    fontSize: ".8rem",
    rating: {
      size: "32",
      line: "3px",
      leftLine: "25%",
      rightLine: "30%",
      fontSize: ".9rem"
    },
    image: {
      borderRadius: "10px 10px 0 0",
      maxWidth: "250px"
    },
    container: {
      display: "block"
    },
    content: {
      borderRadius: "0 0 10px 10px"
    }
  };
};

export const cardRegular = (add?: Object) => {
  return {
    size: "300px",
    textDisplay: "flex",
    fontSize: "1.25rem",
    rating: {
      size: "48",
      line: "4px",
      leftLine: "20%",
      rightLine: "25%",
      fontSize: ".9rem"
    },
    image: {
      borderRadius: "10px 10px 0 0",
      maxWidth: "400px"
    },
    container: {
      display: "block"
    },
    content: {
      borderRadius: "0 0 10px 10px"
    },
    ...add
  };
};

export const cardLandscapeSmall = () => {
  return {
    ...cardSmall(),
    fontSize: "1rem",
    image: {
      borderRadius: "10px 0 0 10px",
      maxWidth: "150px"
    },
    container: {
      display: "flex"
    },
    content: {
      borderRadius: "0 10px 10px 0"
    }
  };
};

export const cardRegularRotate = cardRegular({ transform: "rotate(-2deg)" });

export const Container = styled.div`
  display: ${props => props.theme.container.display};
  min-width: ${props => props.theme.size};
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
  theme: cardRegular,
  inWatchlist: false
};

export default withDefaultProps(Card, defaultProps);
