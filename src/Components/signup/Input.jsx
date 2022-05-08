import React from "react";

function Input({ inputtype, inputvalue, setinput }) {
  return <input type={inputtype} value={inputvalue} onChange={setinput} />;
}

export default Input;
