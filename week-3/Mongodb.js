const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.pcgvjbl.mongodb.net/userappnew"
);
const user = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.use(express.json());

app.post("/signup", async (req, res) => {
  const userEmail = req.body.userEmail;
  const password = req.body.password;
  const name = req.body.name;
  const existingUser = await user.findOne({ email: userEmail });
  if (existingUser) {
    return res.status(403).send("Email already exists");
  }

  const User = new user({
    email: userEmail,
    password: password,
    name: name,
  });

  User.save();
  User.save();

  res.json({
    msg: "User created Successfully",
  });
});

app.listen(3000, () => {
  console.log("Started");
});
