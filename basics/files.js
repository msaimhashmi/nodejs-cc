// FILES

// First we need to import built-in core module ('fs') that we need to do file interactions like, reading,writing,deleting.

const fs = require('fs');

// READING FILES

// this is asynchronous function it take some time.
// it takes 2 parameters, first is for path and the second is fire then first is complete.
// second function also takes 2 params err and data.

// fs.readFile('./docs/blog.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     // we receive buffer by default on simply call 'data' which is package of data.
//     console.log(data.toString());
// });

// // to check this fs function is non-blocking code.
// console.log('last line!');


// WRITING FILES

// this is asynchronous function it take some time.
// it takes 3 parameters, first is for path, second if content what we write and the third is fire then first is complete.

// fs.writeFile('./docs/blog.txt', 'hello, saim!', ()=>{
//     console.log('file updated!');
// });

// fs.writeFile('./docs/service.txt', 'web development', ()=>{
//     console.log('file updated!');
// });


// DIRECTORIES

// this is asynchronous function it take some time.
// it takes 2 parameters, first is for path and the second is fire then first is complete.
// function take err parameter

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('dir created!');
//     })
// }else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('dir deleted!');
//     })
// }


// DELETING FILES

// this is asynchronous function it take some time.
// it takes 2 parameters, first is for path and the second is fire then first is complete.

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err);     
        }
        console.log('file deleted!');
    });
}