import { gql } from "apollo-boost";

export const getMovies = gql`
  {
    movies {
      id
      original_title
      poster_path
      release_date
      genre_ids
      vote_average
    }
  }
`;

export const addMovieMutation = gql`
  mutation(
    $adult: Boolean!
    $backdrop_path: String!
    $genre_ids: [ID]!
    $id: ID!
    $original_language: String!
    $original_title: String!
    $overview: String!
    $popularity: Float!
    $poster_path: String!
    $release_date: String!
    $title: String!
    $video: Boolean!
    $vote_average: Float!
    $vote_count: Int!
  ) {
    addMovie(
      adult: $adult
      backdrop_path: $backdrop_path
      genre_ids: $genre_ids
      id: $id
      original_language: $original_language
      original_title: $original_title
      overview: $overview
      popularity: $popularity
      poster_path: $poster_path
      release_date: $release_date
      title: $title
      video: $video
      vote_average: $vote_average
      vote_count: $vote_count
    ) {
      adult
      backdrop_path
      genre_ids
      id
      original_language
      original_title
      overview
      popularity
      poster_path
      release_date
      title
      video
      vote_average
      vote_count
    }
  }
`;

export const removeMovieMutation = gql`
  mutation($id: ID!) {
    removeMovie(id: $id) {
      id
    }
  }
`;
