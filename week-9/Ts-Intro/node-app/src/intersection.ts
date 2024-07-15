//What if you want to create a type that has every property of multiple types/ interfaces

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