const express = require("express");

const app = express();

let limiter = 0;
let totalResponseTime = 0;
let requestCount = 0;

function rateLimiter(req, res, next) {
  limiter++;
  if (limiter <= 5) {
    next();
  }
}

function measureResponseTime(req, res, next) {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    totalResponseTime += duration;
    requestCount++;
    const averageResponseTime = totalResponseTime / requestCount;
    console.log(`Average Response Time: ${averageResponseTime.toFixed(2)} ms`);
  });
  next();
}

app.use(measureResponseTime);

app.get("/", rateLimiter, (req, res) => {
  res.status(201).send("Hey from rate limiter");
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
