// import axios from "axios";
const axios=require("axios")

axios.get("https://sum-server.100xdevs.com/todos")
.then(async (res)=>{
  const ans=await res.todos
  console.log(ans)
})