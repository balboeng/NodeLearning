const express = require('express');
const feedController = require('../controllers/feed')
const router = express.Router();
const { getPosts, createPost } = feedController;
router.get('/posts', getPosts);
router.post('/posts', createPost);

module.exports = router;