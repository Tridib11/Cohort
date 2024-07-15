type NumberArray=number[]


function Max1(array:NumberArray){
  let max:number=array[0]
  for(let i:number=1;i<array.length;i++){
    if(max<array[i]){
      max=array[i]
    }
  }
  return max
}

function Max(array:number[]){
  let max:number=array[0]
  for(let i:number=1;i<array.length;i++){
    if(max<array[i]){
      max=array[i]
    }
  }
  return max
}


let maximum=Max([1,2,3,4]);
console.log(maximum)
