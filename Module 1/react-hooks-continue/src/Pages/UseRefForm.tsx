import React, { useEffect, useRef } from "react";
//useRef is use for DOM manipulation. 
const UseRefForm = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(()=>{
    myRef.current.focus();
  },[])
  return (
    <div>
      <form>
        <input ref={myRef} type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseRefForm;
