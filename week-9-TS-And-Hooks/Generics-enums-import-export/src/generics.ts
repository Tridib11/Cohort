/*
can do this in js but not in ts

type input=number|string
function Fname(name:input[]):input{
  return name[0]
}


const value=Fname(["Rohan","Paul"])

console.log(value.toUpperCase())

*/


function generics <T>(args:T){
  return args
}


let output1=generics<string>("ROhan")
console.log(output1)

let output2=generics<number>(199)
console.log(output2)
