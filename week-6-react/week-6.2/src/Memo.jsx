import React, { useEffect, useMemo, useState } from 'react';

function Memo() {
  const [input, setInput] = useState(0);
  const [sum, setSum] = useState(0);
  const [counter,setCounter]=useState(0);

  useEffect(() => {
    console.log("rendered")
    let sum = 0;
    for (let i = 1; i <=input; i++) {
      sum += i;
    }
    setSum(sum);
  }, [input]);


  // let count=useMemo(()=>{
  //   console.log("rendered")
  //   let count=0;
  //   for(let i=0;i<=input;i++){
  //     count+=i
  //   }
  //   return count;
  // },[input])

  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="number"
      />
      <h1>The value is {sum}</h1>
      <br />
      <button onClick={()=>{
        setCounter(counter+1)
      }}>Count is {counter}</button>
    </div>
  );
}

export default Memo;