const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs'); //set is used to configure some setting 'view engine' which is one of them.

// listen for requests
app.listen(3000); // this also return an instance of the server



// MIDDLEWARE
// Any kind of function run between getting requests and sending a response, technically called middleware.
// The use method run for every type of request to all routes including post request. While the other methods like 'get' is only us for get request and they also are middlewares.
// Middleware runs top to bottom in our code.

app.use((req, res, next)=>{
    console.log('New request created!');
    console.log('Host:', req.hostname);
    console.log('Path:', req.path);
    console.log('Method:', req.method);
});



// respond to requests
// use get for get request which takes 2 arguments (path, function with req,res)
app.get('/', (req,res) => {
    
    // we use send in express
    // it automatically set content types and headers and status also. 
    // res.send('<h3>This is first express request!</h3>');

    // to sendFile we need to mention here the root path of this current folder because by default ./ take the root path of computer.
    // res.sendFile('./views/index.html', {root:__dirname})

    // VIEW ENGINE

    const blogs = [
        {title: 'Blog title one', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {title: 'Blog title two', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {title: 'Blog title three', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {title: 'Blog title four', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {title: 'Blog title five', snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]

    res.render('index', {title:'Home', blogs});
});

app.get('/about', (req,res)=>{
    // res.sendFile('./views/about.html', {root:__dirname})
    res.render('about', {title:'About'}); 
});

app.get('/blogs/create', (req,res)=>{
    res.render('create', {title:'Create a new blog post'});
});

// 404

// 'use' function fire for every single request coming in.
// its going to fire for every single request until of the URL if the code reaches this point if we don't have a match upto here. At this point we're sending the 404 page to the browser.
// it should use at the bottom.
app.use((req,res)=>{
    res.status(404).render('404', {title:'404 Not found'});
});


// SERVER-SIDE RENDERING

// 1. Pass view (HTML) files into the View/template engine.
// 2. The engine looks for any conditional content, loops, conditions, etc, and converts them to the final result.
// 3. Show results to the browser.
