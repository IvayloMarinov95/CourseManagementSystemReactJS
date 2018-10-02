const express = require('express');
const router = express.Router();

//Post Model
const Post = require('../../models/Post');

// @route GET api/posts
//@desc get All Posts
//@access Public
router.get('/', (req, res) => {
    Post.find()
    .sort({date: -1})
    .then(posts => res.json(posts))
});

// @route GET api/posts
//@desc get Single Post
//@access Public
router.get('/:_id', (req, res) => {
    Post.findById(req.params._id)
    .then(post => res.json(post))
});

// @route POST api/posts
//@desc Create a Post
//@access Public
router.post('/', (req, res) => {
    const newPost = new Post({
        name: req.body.name,
        body: req.body.body
    });
    newPost.save().then(post => res.json(post));
});

// @route PUT api/posts
//@desc Update a Post
//@access Public
router.put('/:id', (req, res) => {
    const newPost = Post.findByIdAndUpdate(req.params.id, {
        name:  req.body.name,
        body: req.body.body
    });
    newPost.update().then(post => res.json(post))
});

// @route DELETE api/posts/:id
//@desc Delete a Post
//@access Public
router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(post => post.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
 });
 
 
 module.exports = router;