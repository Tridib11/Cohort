const jwt=require("jsonwebtoken")

const data={
  name:"Tridib Ghosh",
  password:"2594"
}

const hasedData=jwt.sign(data,"secret");



const jwtVerification=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVHJpZGliIEdob3NoIiwicGFzc3dvcmQiOiIyNTk0IiwiaWF0IjoxNzE4MjE0OTc3fQ.0I6K01aiZHbBi9Od7blVq7GxOiPVTr_9HjEld-qaONM","secret")

console.log(jwtVerification)
console.log(hasedData)