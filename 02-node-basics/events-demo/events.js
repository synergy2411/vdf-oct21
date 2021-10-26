const EventEmitter = require("events").EventEmitter
const emitter = new EventEmitter();


// emitter.on("newListener", (eventName, listenerFn) => {
//     console.log(`${eventName} fired with Listenere function ${listenerFn.name}`)
// })

// emitter.on("removeListener", () => {
//     console.log('REMOVE LISTENER CALLED')
// })

// const handlerFn1 = (data) => {
//     console.log("Handler Function 1 with message ", data.message)
// }
// const handlerFn2 = (data) => {
//     console.log("Handler Function 2 with message ", data.message)
//     emitter.removeListener("foo", handlerFn1)
// }

// emitter.on("foo", handlerFn1)
// emitter.on("foo", handlerFn2)

// emitter.emit("foo", {message : "SUCCESS"});
// emitter.emit("foo", {message : "ERROR"});

// Pub-Sub Pattern
// emit() - raise the event - Published Code
// on() - attach the handler with the event / subscribe - Subscribing Code

// 'newListener' - attach handler function with the event
// 'removeListener' - detach handler from the event


// process.on("uncaughtException", (...args) => {
//     console.log("Exception Handler : ", args)
// })

// doesNotExist()

// let counter = 101;
const fs = require("fs");

process.on("exit", code => {
    // Write your code before the process exit
    if(code !== 0){
        fs.writeFileSync("logger.txt", JSON.stringify('Exist with Code Greater than 0'))
        return ;
    }
    console.log('No Problem! Shut donw smoothly.')
})

setTimeout(() => {
    process.exit(1);
}, 1000)

