import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title     : { type: String },
    text      : { type: String, required: true },
    color     : { type: String },
    createdAt : { type: Date }
});

mongoose.model('posts', PostSchema);
