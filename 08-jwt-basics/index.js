const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("./model/users.model");
require("./db");
const app = express();

const MY_SECRET_KEY = "MySuperSecretKey";
let _token = null;
// let _user = null;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  UserModel.find({ username, password })
    .then((response) => {
      const [user] = response;
      let token = jwt.sign({ user }, MY_SECRET_KEY);
      return res.send({ token });
    })
    .catch((err) => {
      console.log(err);
      return res.send({ message: "Username and/or Password not found" });
    });
});

const ensureToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    req.token = token;
    next();
  } else {
    return res.send({ message: "Auth Header not available" });
  }
};

app.get("/api/protected", ensureToken, (req, res) => {
  jwt.verify(req.token, MY_SECRET_KEY, (err, decode) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log("DECODE : ", decode);
    return res.send({ message: "Success, Accessing protected API" });
  });
});

app.get("/api/login", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3030, () => console.log("Server started at PORT : 3030"));

// app.post("/api/login", (req, res) => {
//   const { username, password } = req.body;
//   console.log(req.body);

//   UserModel.find({ username, password })
//     .then((response) => {
//       const [user] = response;
//       req._user = user;
//       req._token = jwt.sign({ user }, MY_SECRET_KEY);
//       res.redirect("/api/protected");
//     })
//     .catch((err) => {
//       console.log(err);
//       return res.send({ message: "Username and/or Password not found" });
//     });
// });

// const ensureToken = (req, res, next) => {
//   if (!req._token) {
//     return res.redirect("/api/login");
//   } else {
//     // const authHeader = req.headers.authorization;
//     // if (authHeader) {
//     //   const token = authHeader.split(" ")[1];
//     //   req.token = token;
//     //   next();
//     // } else {
//     //   return res.send({ message: "Auth Header not available" });
//     // }
//     next();
//   }
// };

// app.get("/api/protected", ensureToken, (req, res) => {
//   jwt.verify(req.token, MY_SECRET_KEY, (err, decode) => {
//     if (err) {
//       console.log(err);
//       process.exit(1);
//     }
//     if (req._user) {
//       console.log(decode.user._id.toString(), req._user._id.toString());
//       if (decode.user._id.toString() === req._user._id.toString()) {
//         return res.send({ message: "Success, Accessing protected API" });
//       } else {
//         return res.send({ message: "Mismatched, NOT SAME" });
//       }
//     } else {
//       res.redirect("/api/login");
//     }
//   });
// });

// app.get('/api/login', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// })

// app.listen(3030, () => console.log("Server started at PORT : 3030"));
