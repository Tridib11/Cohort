//What if you want to create a type that has every property of multiple types/ interfaces



//Interfaces you can extend in a claass and types lets you do or,and ,union and intersections


type employee={
  name:string
  startDate:Date
}

interface Manager{
  name:string
  department:string
}

type TeamLead=employee & Manager

const TechLead:TeamLead={
  name:"Tridib",
  startDate:new Date(),
  department:"cse"
}


console.log(TechLead)