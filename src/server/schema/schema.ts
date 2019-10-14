// const graphql = require("graphql")
import * as graphql from "graphql"
import Movie from "../models/Movie"

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
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
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
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(_: any, args: { name: string, genre: string }) {
                let movie = new Movie({
                    name: args.name,
                    genre: args.genre,
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