import mongoose from "mongoose";

import config from '../../etc/configs.json';

import '../models/Users';

const Users = mongoose.model('Users');

export function setUpConnection() {
  mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listUsers(id) {
  return Users.find();
}
export function getUsersByLogin(login) {
  return Users.findOne({login: login});
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
