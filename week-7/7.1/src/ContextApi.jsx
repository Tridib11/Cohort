// import React, { useContext, useState } from "react";
// import { CountContext } from "./Context";

// //Wrap the component that want to use the teleported value inside the count context provider

// function ContextApi() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <CountContext.Provider value={count}>
//         <Count setCount={setCount} />
//       </CountContext.Provider>
//     </div>
//   );
// }

// function Count({setCount}) {
//   return (
//     <div>
//       <CountRenderer />
//       <Buttons setCount={setCount} />
//     </div>
//   );
// }

// function CountRenderer() {
//   const count = useContext(CountContext);
//   return <div>{count}</div>;
// }

// function Buttons({ setCount }) {
//   const count = useContext(CountContext);
//   return (
//     <div>
//       <button onClick={() => {
//           setCount(count + 1);
//         }}>
//         Increase
//       </button>

//       <button onClick={() => {
//           setCount(count - 1);
//         }}>
//         Decrease
//       </button>
//     </div>
//   );
// }

// export default ContextApi;



//A better way


import React, { useContext, useState } from "react";
import { CountContext } from "./Context";

function ContextApi() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default ContextApi;
