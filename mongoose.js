const mongoose = require('mongoose');

(async function () {
  await mongoose.connect('mongodb://localhost:27017/blog')

  const postSchema = new mongoose.Schema({
    title: String,
    body: String
  })

  const Post = mongoose.model('Post', postSchema)

  const posts = await Post.find().exec()
  
  console.log(posts);
})()

