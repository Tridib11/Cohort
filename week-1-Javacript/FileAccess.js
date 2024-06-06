const fs = require("fs");

fs.readFile("lol.txt", "utf-8", function(err, data) {
  if (err) {
    console.error("An error occurred while reading the file:", err);
    return;
  }
  console.log(data);
});
