import React, { createContext, useContext, useState, useEffect, useRef, forwardRef } from "react"


function App() {
  const buttonRef = useRef(0);
  // const btn = document.querySelector("#btn");
  // useEffect(() => {
  //   console.log(buttonRef.current);
  // });
  return (
    <div className="App">
      {/* <Button id="btn">按钮</Button> */}
      <Button3 ref={buttonRef}>按钮</Button3>
    </div>
  );
}

const Button = (props, ref) => {
  console.log("props", props);
  console.log("ref", ref);
  return <button className="red" {...props} />;
};

const Button3 = forwardRef(Button);


export default App;
