// const fs = require("fs");

// fs.readFileSync("lol.txt", "utf-8", function(err, data) {
//   if (err) {
//     console.error("An error occurred while reading the file:", err);
//     return;
//   }
//   console.log(data);
// });

// let ans=0;
// for(let i=0;i<10000;i++){
//   ans+=i;
// }

// console.log(ans)


const fs = require("fs");

try {
  const data = fs.readFileSync("lol.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.error("An error occurred while reading the file:", err);
}

let ans = 0;
for (let i = 0; i < 10000; i++) {
  ans += i;
}

console.log(ans);
