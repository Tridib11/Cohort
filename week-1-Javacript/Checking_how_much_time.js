function Sum(num1,num2){
    let sum=0;
    for(let i=0;i<=num1;i++){
        sum+=i;
    }

    return sum*num2;
}


const beforeTime=new Date();
const beforeTimeInMls=beforeTime.getTime();

console.log("The sum is "+Sum(1000000000,1000))

const afterTime=new Date();
const afterTimeInMls=afterTime.getTime();



console.log(afterTime-beforeTime);