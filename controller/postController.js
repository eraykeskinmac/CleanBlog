const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.render('index', { posts: posts });
};
exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post: post });
};
exports.createPost = async (req, res) => {
  Post.create(req.body);
  res.redirect('/');
};
exports.updatePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();

  res.redirect(`/posts/${req.params.id}`);
};
exports.deletePost = async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);
  res.redirect('/');
};
