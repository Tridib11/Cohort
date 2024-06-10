const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassowrd = "123456";

const app = express();
const allUsers = [
  {
    username: "tridib@mail.com",
    password: "123",
    name: "tridib",
  },
  {
    username: "rohan@mail.com",
    password: "456",
    name: "rohan",
  },
  {
    username: "rahul@mail.com",
    password: "789",
    name: "rahul",
  },
];

function userExists(username, password) {
  const user = allUsers.find(
    (user) => user.username === username && user.password === password
  );
  return user ? true : false;
}

app.use(express.json());

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!userExists(username, password)) {
    return res.status(401).json({
      msg: "User doesn't exists",
    });
  }

  var token = jwt.sign({ username }, jwtPassowrd);

  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassowrd);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
      users: allUsers.filter((user) => user.username !== username),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("Server started");
});
