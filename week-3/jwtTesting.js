const jwt=require("jsonwebtoken")

const data={
  name:"Tridib Ghosh",
  password:"2594"
}

const hasedData=jwt.sign(data,"secret");

const jwtVerification=
console.log(hasedData)