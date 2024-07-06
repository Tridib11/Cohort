import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

export const todosAtomFamily=atomFamily({
  key:"todosAtomFamily",
  default:selectorFamily({
    key:"todoSelectorFamily",
    get:(id)=>async({get})=>{
      // await new Promise(r=>setTimeout(r,6000))  // adding an artificial delay
      const res=await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      return res.data.todo;
    }
  })
})