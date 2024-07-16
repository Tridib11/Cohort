type UsersARR={
  firstName:string
  lastName:string
  age:number
}

function ageFilter(users:UsersARR[]):UsersARR[]{
  return users.filter(u=>u.age>=18)
}


console.log(ageFilter([
  {
    firstName:"Tridib",
    lastName:"Ghosh",
    age:21
  },
  {
    firstName:"ROhan",
    lastName:"Ghosh",
    age:12
  },

]))