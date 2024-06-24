import React, { useEffect, useRef, useState } from "react";

function Ref() {
  const [incomeTax, setIncomeTax] = useState(2000);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(divRef.current);
      divRef.current.innerHTML = 10;
    }, 5000);
  }, []);

  return (
    <div>
      Hi your income tax returns are
      <div ref={divRef}>{incomeTax}</div>
    </div>
  );
}

export default Ref;