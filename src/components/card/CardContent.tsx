import React, { MouseEvent, FC } from "react";
import styled, { ThemeProvider } from "styled-components";
import { addMovieMutation, getMovies } from "../../graphql/queries/queries";
import { IMovie } from "../../interfaces/Movie";
import { useMutation } from "@apollo/react-hooks";

const CardContent: FC<{
  movie: IMovie;
  inWatchlist: Boolean;
  theme: any;
}> = ({ movie, inWatchlist, theme }) => {
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
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>{movie.original_title}</Title>
        {inWatchlist ? null : (
          <button onClick={event => handleAddToWatchlist(event)}>+</button>
        )}
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  padding: 2rem 1rem;
  background-color: #323534;
  border-radius: 0 0 10px 10px;
`;

const Title = styled.h4`
  font-weight: 600;
  line-height: 1.5em;
  height: 3em;
  overflow: hidden;
  font-size: ${props => props.theme.fontSize};
`;

export { Container, Title };

export default CardContent;
