console.log("Start")
setTimeout(function(){
    console.log("Timer")
}, 0);
Promise.resolve().then(function(){console.log('Promise')})
console.log("End")

// Start -> End -> Timer (after one second)
// Start -> End -> Promsie -> Timer

