const express = require('express');
const postController = require('../controllers/postController')
const postRouter = express.Router();

postRouter.post('/create', postController.create);
postRouter.post('/change', postController.change);
postRouter.post('/delete', postController.delete);
postRouter.post('/comment', postController.addComment);
postRouter.post('/like', postController.like);
postRouter.post('/rating', postController.putRating);
postRouter.post('/userPosts', postController.getUserPosts);
postRouter.get('/allPosts', postController.getAllPosts);

module.exports = postRouter;