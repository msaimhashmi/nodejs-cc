const http = require('http');
const fs = require('fs');

//This callback function run every time a request comes into our server so we request whatever we want, like the homepage.
// it takes 2 params request and response.
//This console run when the request is hit/created from the listening port localhost:3000
const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);

    // RESPONSE OBJECT

    // // 1: set header content type
    // res.setHeader('Content-Type', 'text/html');

    // // 2: send data back to the browser
    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('this is plain text'); // use write to write the response.
    // res.write('<h2>this is heading</h2>');
    // res.write('<p>this is paragraph</p>');

    // // 3: end the response 
    // res.end();




    // RETURNING HTML PAGES
    // res.setHeader('Content-Type', 'text/html');

    // fs.readFile('./views/index.html', (err, data) => {
    //     if(err){
    //         console.log(err);
    //         res.end();
    //     }else{
    //         // if we're just sending one thing into res.write we don't need this whole line here, we can send inside res.end() directly.
    //         res.end(data);
            
    //         // if we are using multiple things then use this way.
    //         // res.write(data);
    //         // res.end();
            
    //     }
    // });





    // BASIC ROUTING

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    });

});

//To listen to requests we need to call listen method.
//If we get a successful log then we know that this server is up and running and actively listening to localhost:3000
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});