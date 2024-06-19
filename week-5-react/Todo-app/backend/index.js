const express=require("express")
const {createTodo}=require("./types")
const app=express()

app.use(express.json())

app.post("/todo",(req,res)=>{
  const createPayload=req.body
  const parsePayload=createPayload.safeparse(createPayload)
  if(!parsePayload.success){
    res.status(411).json({
      msg:"Your inputs are wrong"
    })
    return ;
  }
})

app.get("/todos",(req,res)=>{
  
})

app.put("/completed",(req,res)=>{
  const createPayload=req.body
  const parsePayload=createPayload.safeparse(createPayload)
  if(!parsePayload.success){
    res.status(411).json({
      msg:"Your inputs are wrong"
    })
    return ;
  }
})


app.listen(3000,()=>{
  console.log("Server started")
})