import React, { useEffect, useRef, useState } from "react";

function Ref() {
  const [incomeTax, setIncomeTax] = useState(2000);
  const divRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (divRef.current) {
        console.log(divRef.current);
        divRef.current.innerHTML = 10;
      }
    }, 5000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div>
      Hi, your income tax returns are
      <div ref={divRef}>{incomeTax}</div>
    </div>
  );
}

export default Ref;
