// const Stream = require("stream").Stream;
// const EventEmitter = require('events').EventEmitter;

// const readable = new Stream.Readable()

// console.log(readable instanceof Stream);
// console.log(readable instanceof EventEmitter)



// TRANSFORMING STREAM

const fs = require("fs");
const gzip = require("zlib").createGzip;

const readStream = fs.createReadStream("./logger.txt")

const writeStream = fs.createWriteStream("./new-logger.md")

readStream.pipe(gzip()).pipe(writeStream)



// Stream.Writable()
// Stream.Transform()
// Stream.Duplex()