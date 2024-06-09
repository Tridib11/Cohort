const express=require("express")

const app=express()

let limiter=0;
function rateLimiter(req,res,next){
  limiter++;
  if(limiter<=5){
    next();
  }
}
app.get("/",rateLimiter,(req,res)=>{
  res.status(201).send("Hey from rate limiter")
})


app.listen(3000,()=>{
  console.log("Server started at port 3000")
})