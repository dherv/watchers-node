import { gql } from "apollo-boost";
export const getMovies = gql`
  {
    movies {
      name
      id
      genre
    }
  }
`;
