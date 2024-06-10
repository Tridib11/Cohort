const express = require("express");
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

function userExists(username, password) {}
app.listen(3000,()=>{
  console.log("Server started");
})