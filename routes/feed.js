const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/posts/:movieName', feedController.getMovieResults);

// POST /feed/post
router.post('/post', feedController.createPost);

module.exports = router;