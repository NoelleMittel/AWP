// ↓ ↓ ↓ ↓ ↓ Posts API ROUTES ↓ ↓ ↓ ↓ ↓ api/posts.js

const router = require('express').Router();
const Post = require('../db/postDB');

//  ---------- GET router ---------->
//  (express sub-router for '/posts')

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

//  ---------- GET router ---------->

router.get('/:postId', async (req, res, next) => {
  try {
    const singlePost = await Post.findByPk(req.params.postId);
    res.json(singlePost);
  } catch (err) {
    next(err);
  }
});

// ---------- POST form router ---------->

router.post('/', async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    res.json(newPost);
  } catch (err) {
    next(err);
  }
});

// --------- PUT router ---------->

router.put('/', async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id);
    res.send(await post.update(req.body));
  } catch (error) {
    next(error);
  }
});

// --------- DELETE router ---------->

router.delete('/:id', async (req, res, next) => {
  try {
    const seeyaPost = await Post.findByPk(req.params.id);
    await seeyaPost.destroy();
    res.send(201);
  } catch (error) {
    next(error);
  }
});

//  ---------- exports ---------->
module.exports = router;
