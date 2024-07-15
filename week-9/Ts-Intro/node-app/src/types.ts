//types can let you define multiple types interfaces doesnot
//you can only define classes using interfaces and not types


type customType=number|string

function testing(number:customType){
  console.log(`ID ${number}`)
}

testing(12)
testing("Working")