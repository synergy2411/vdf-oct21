// Native / Core Modules - path, os, file system, http, events etc

// const path = require("path")

// const URL = "http://www.our-domain.com/public/index.html";

// console.log("Directory Name : ", path.dirname(URL));
// console.log("File Name : ", path.basename(URL));
// console.log("Extension Name : ", path.extname(URL));


// const os = require("os")

// console.log("Architecture : ", os.arch())
// console.log("Total Memory : ", os.totalmem())
// console.log("Number of CPUs : ", os.cpus().length)


// const fs = require("fs")

// console.log("START")
// fs.readFile("./mock.txt", (err, data) => {
//     if(err){
//         console.log(err);
//         process.exit(1)
//     }
//     // console.log(data.toString());
//     fs.writeFile("new-file.txt", data, (err, res) => {
//         if(err) {
//             console.log(err);
//             process.exit(1)
//         }
//         console.log(res);
//     })
// })
// console.log("END");

// START -> END -> Content




// READING FILE IN SYNCHORNOUS WAY - BAD PRACTICE

// console.log("START")
// const data = fs.readFileSync("./mock.txt")
// console.log(data)
// console.log("END")







// const http = require("http")

// const server = http.createServer((request, response)=>{
//     console.log("Method : ", request.method)
//     console.log("URL : ", request.url)
//     console.log("Headers : ", request.headers)
//     response.writeHead(200)
//     response.write("The Message is SUCCESS")
//     response.end()
// })

// // http://localhost:9090
// server.listen(9090);

// console.log("Server started at PORT : 9090")