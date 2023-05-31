const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000); // this also return an instance of the server

// respond to requests
// use get for get request which takes 2 arguments (path, function with req,res)
app.get('/', (req,res) => {
    
    // we use send in express
    // it automatically set content types and headers and status also. 
    // res.send('<h3>This is first express request!</h3>');

    // to sendFile we need to mention here the root path of this current folder because by default ./ take the root path of computer.
    res.sendFile('./views/index.html', {root:__dirname})
});

app.get('/about', (req,res)=>{
    res.sendFile('./views/about.html', {root:__dirname})
});



// redirects
app.get('/about-us', (req,res)=>{
    res.redirect('/about');
});

// 404

// 'use' function fire for every single request coming in.
// its going to fire for every single request until of the URL if the code reaches this point if we don't have a match upto here. At this point we're sending the 404 page to the browser.
// it should use at the bottom.
app.use((req,res)=>{
    res.sendFile('./views/404.html', {root:__dirname})
});