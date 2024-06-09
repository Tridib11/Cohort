const express=require("express")
const bodyParser=require("body-parser")
const app=express()

app.use(bodyParser.json())
app.get("/",(req,res)=>{
  res.send("Hello world")
})

app.post("/posting",(req,res)=>{
  console.log(req.body)
  res.json({
    output:"2+2=4"
  })
})

app.listen(3000,()=>{
  console.log("Server started")
})