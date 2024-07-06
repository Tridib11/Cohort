import { atomFamily } from "recoil";
import { Todo } from "./todos";

export const todoFamily=atomFamily({
  key:"todoFamily",
  default:id=>{
    return Todo.find(x=>x.id===id)
  }
})