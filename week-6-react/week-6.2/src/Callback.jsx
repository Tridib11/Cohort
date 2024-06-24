import React, { memo, useCallback, useState } from "react";


// useCallback is used to memoise functions across the renders
function Callback() {
  const [counter, setCounter] = useState(0);

  const a=useCallback(function(){
      console.log("hello")
    },[]) 

  return (
    <div>
      <button onClick={() => {
          setCounter(counter + 1);
        }}>
        Counter {counter}
      </button>
      <Demo a={a}/>
    </div>
  );
}

const Demo = memo(function ({ a }) {
  console.log("Rendered");
  return <div>Hi there {a}</div>;
});

export default Callback;
