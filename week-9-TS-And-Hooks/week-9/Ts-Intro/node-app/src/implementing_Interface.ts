interface Person{
  name:string
  age:number
  greet(phrase:string):void
}

class Employee implements Person{
  name:string
  age:number

  constructor(name:string,age:number){
    this.name=name
    this.age=age
  }

  greet(phrase:string){
    console.log(`${phrase} ${this.name}`)
  }
}


const e=new Employee("Tridib",21)
e.greet("hello")