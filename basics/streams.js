// STREAMS & BUFFER

// Stream is a flow
// Buffer is a container having a chunk of data

// couple of different types of steam that is read streams or the right streams

const fs = require('fs');

// it take 2 params.
const readStream = fs.createReadStream('./docs/news.txt', { encoding: 'utf8' });

const writeStream = fs.createWriteStream('./docs/news-write.txt');

// this 'on' is an eventlistner like frontend javascript have.
// everytime we receive buffer of data from the readStream
// everytime we get data from this 'data' event listner then we fire that callback function and we get access to that chunk of data.
// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----');
//     // console.log(chunk.toString());
//     console.log(chunk);
    
//     writeStream.write('\n----- NEW CHUNK IN WRITE -----\n');
//     writeStream.write(chunk);
// });


// PIPING
// In pipe we pass data directly from readable to a writable stream

// take the read stream that we're reading data from and i want you to pipe whatever you read from the read stream into the write stream.
readStream.pipe(writeStream);