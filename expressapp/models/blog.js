const mongoose = require('mongoose');
const Schema = mongoose.Schema; // this thing is a constructor function and we are going to use it to create a new Schema.

// Schema for database table structure
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, {timestamps:true});

// Model for database table to communication.
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;