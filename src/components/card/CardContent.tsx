import React, { FC, ReactChildren, ReactNode } from "react";
import styled, { ThemeProvider, ThemeProviderProps } from "styled-components";
import { IMovie } from "../../interfaces/Movie";

import moment from "moment";

const CardContent: FC<{
  movie: IMovie;
  inWatchlist: Boolean;
  theme: ThemeProviderProps<{}>;
  chidlren?: ReactChildren;
}> = ({ movie, inWatchlist, theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TitleWrapper>
          <div>
            <Title>{movie.original_title}</Title>
            <small>{moment(movie.release_date).format("LL")}</small>
          </div>
          <IconWrapper>{inWatchlist ? null : children}</IconWrapper>
        </TitleWrapper>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  background-color: #323534;
  border-radius: ${props => props.theme.content.borderRadius};
`;

const TitleWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h4`
  font-weight: 600;
  line-height: 1.5em;
  height: 3em;
  overflow: hidden;
  font-size: ${props => props.theme.fontSize};
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
`;
export { Container, Title };

export default CardContent;
