interface User{
  firstName:string,
  lastName:string,
  age:number
}

function isLegal(user:User){
  return user.age>18?true:false
}

const val=isLegal({
  firstName:"Tridib",
  lastName:"Ghosh",
  age:21
})

console.log(val)