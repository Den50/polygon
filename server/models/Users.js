import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    login     : { type: String, required: true },
    password  : { type: String, required: true },
    name      : { type: String },
    email     : { type: String },
    createdAt : { type: Date }
});

mongoose.model('Users', PostSchema);
