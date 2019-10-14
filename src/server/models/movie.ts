import mongoose, { Document } from "mongoose"
const Schema = mongoose.Schema;

interface IMovie extends Document {
    name: String,
    genre: String,
}
const movieSchema = new Schema({
    name: String,
    genre: String,
});

export default mongoose.model<IMovie>('Movie', movieSchema);