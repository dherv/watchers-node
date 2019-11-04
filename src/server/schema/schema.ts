// const graphql = require("graphql")
import * as graphql from "graphql";
import Movie from "../models/Movie";
import { GraphQLBoolean, GraphQLInt, GraphQLFloat } from "graphql";
import { IMovie } from "../../interfaces/Movie";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    adult: { type: new GraphQLNonNull(GraphQLBoolean) },
    backdrop_path: { type: new GraphQLNonNull(GraphQLString) },
    genre_ids: { type: new GraphQLList(GraphQLID) },
    id: { type: new GraphQLNonNull(GraphQLID) },
    original_language: { type: new GraphQLNonNull(GraphQLString) },
    original_title: { type: new GraphQLNonNull(GraphQLString) },
    overview: { type: new GraphQLNonNull(GraphQLString) },
    popularity: { type: new GraphQLNonNull(GraphQLFloat) },
    poster_path: { type: new GraphQLNonNull(GraphQLString) },
    release_date: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    video: { type: new GraphQLNonNull(GraphQLBoolean) },
    vote_average: { type: new GraphQLNonNull(GraphQLFloat) },
    vote_count: { type: new GraphQLNonNull(GraphQLInt) }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(_: any, args: { id: string }) {
        return Movie.findById(args.id);
      }
    },

    movies: {
      type: new GraphQLList(MovieType),
      resolve() {
        return Movie.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addMovie: {
      type: MovieType,
      args: {
        adult: { type: new GraphQLNonNull(GraphQLBoolean) },
        backdrop_path: { type: new GraphQLNonNull(GraphQLString) },
        genre_ids: { type: new GraphQLList(GraphQLID) },
        id: { type: new GraphQLNonNull(GraphQLID) },
        original_language: { type: new GraphQLNonNull(GraphQLString) },
        original_title: { type: new GraphQLNonNull(GraphQLString) },
        overview: { type: new GraphQLNonNull(GraphQLString) },
        popularity: { type: new GraphQLNonNull(GraphQLFloat) },
        poster_path: { type: new GraphQLNonNull(GraphQLString) },
        release_date: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        video: { type: new GraphQLNonNull(GraphQLBoolean) },
        vote_average: { type: new GraphQLNonNull(GraphQLFloat) },
        vote_count: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(_: any, args: IMovie) {
        let movie = new Movie({
          adult: args.adult,
          backdrop_path: args.backdrop_path,
          genre_ids: args.genre_ids,
          id: args.id,
          original_language: args.original_language,
          original_title: args.original_title,
          overview: args.overview,
          popularity: args.popularity,
          poster_path: args.poster_path,
          release_date: args.release_date,
          title: args.title,
          video: args.video,
          vote_average: args.vote_average,
          vote_count: args.vote_count
        });
        return movie.save();
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
