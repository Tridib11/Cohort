import React, { memo, useState } from "react";

function Callback() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => {
          setCounter(counter + 1);
        }}>
        Counter {counter}
      </button>
    </div>
  );
}

const Demo = memo(function ({ a }) {
  console.log("Rendered");
  return <div>Hi there {a}</div>;
});

export default Callback;
