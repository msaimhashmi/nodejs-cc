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
    res.send('<h3>This is first express request!</h3>');

})