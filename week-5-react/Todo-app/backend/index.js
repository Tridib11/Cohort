const express=require("express")
const app=express()

app.use(express.json())

app.post("/todo",(req,res)=>{

})

app.get("/todos",(req,res)=>{
  res.send("Heu")
})

app.listen(3000,()=>{
  console.log("Server started")
})