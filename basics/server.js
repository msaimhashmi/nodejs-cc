const http = require('http');

//This callback function run every time a request comes into our server so we request whatever we want, like the homepage.
// it takes 2 params request and response.
//This console run when the request is hit/created from the listening port localhost:3000
const server = http.createServer((req, res)=>{
    console.log('request created');
});

//To listen to requests we need to call listen method.
//If we get a successful log then we know that this server is up and running and actively listening to localhost:3000
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});