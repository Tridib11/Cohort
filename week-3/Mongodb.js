const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.pcgvjbl.mongodb.net/userappnew",
);
const user = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", (req, res) => {
  const userEmail = req.body.userEmail;
  const password = req.body.password;
  const name = req.body.name;
  const existingUser = user.findOne({ username });
  if (existingUser) {
    return res.status(403).send("Username already exists");
  }

  const User = new user({
    email: userEmail,
    password: password,
    name: name,
  });

  User.save();

  res.json({
    msg: "User created Successfully",
  });
});
