const express = require("express");

const app = express();

function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}

app.get("/", (req, res) => {
  const ans = req.query.n;
  res.send(`The sum of ${ans} is ${sum(ans)}`);
});

app.listen(3000, () => {
  console.log("Server started");
});
