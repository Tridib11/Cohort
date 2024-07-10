// import axios from "axios";
const axios=require("axios")

// axios.get("https://sum-server.100xdevs.com/todos")
// .then(async (res)=>{
//   const ans=await res.data
//   console.log(ans)
// })


async function main(){
  const response =await axios.post("https://httpdump.app/dumps/79b56696-4879-4015-905d-b02f5dba4475",{
    username:"Tridib",
    password:"12334"
  },{
    headers:{
      Authorization:"Bearer 123"
    }
  })

  console.log(response.data)


}
main()