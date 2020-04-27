const routes = require('express').Router();
const fetch = require('node-fetch');

// http://localhost:8000/posts
routes.get('/posts', async (req, res) => {
const posts_url = `${process.env.BASE_URL}posts`;   // API URL 
const get_posts = await fetch(posts_url)   // Sending request on server
const posts = await get_posts.json()  // parsing the data in json
if(res) res.send(posts)    // sending the posts on frontend as responce
});


// http://localhost:8000/post/{post_id}
routes.get('/post/:id', async (req, res) => {
    const posts_url = `${process.env.BASE_URL}posts/${req.params.id}`;   // API URL 
    const get_post = await fetch(posts_url)   // Sending request on server
    const post = await get_post.json()  // parsing the data in json
    if(res) res.send(post)    // sending the posts on frontend as responce
});

module.exports = routes;