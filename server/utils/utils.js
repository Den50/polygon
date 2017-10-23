import mongoose from "mongoose";

import config from '../../etc/configs.json';

import '../models/Post';

const Post = mongoose.model('Post');

export function setUpConnection() {
  mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listPosts(id) {
  return Post.find();
}

export function createPosts(data) {
    const post = new Post({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return post.save();
}

export function deletePosts(id) {
    return Post.findById(id).remove();
}
