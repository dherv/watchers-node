import { Document } from "mongoose"

export interface IMovie {
    id: string;
    name: String,
    genre: String,
}

export interface IMovieModel extends Document {
    name: String,
    genre: String,
}