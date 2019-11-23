import mongoose from "mongoose";
import { IMovieModel } from "../../interfaces/Movie";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  adult: Boolean,
  backdrop_path: String,
  genre_ids: [Number],
  id: Number,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: String,
  title: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number
});

export default mongoose.model<IMovieModel>('Movie', movieSchema);
