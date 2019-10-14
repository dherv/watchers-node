import mongoose from "mongoose"
import { IMovieModel } from "../../interfaces/Movie";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: String,
    genre: String,
});

export default mongoose.model<IMovieModel>('Movie', movieSchema);