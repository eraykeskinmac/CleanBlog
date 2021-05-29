const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const PostSchema = new Schema({
  title: String,
  detail: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
