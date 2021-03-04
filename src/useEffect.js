import React, { createContext, useContext, useState, useEffect } from "react"


function App() {
  const [n, setN] = useState(0);
  const onClick = () => {
    setN(n + 1);
  };
  // 模拟componentDidMount
  useEffect(() => {
    console.log("第一次渲染后执行这句话");
  }, []);
  // 模拟componentDidUpdate
  useEffect(() => {
    // console.log("n变化的时候执行这句话(第一次渲染n也是变化)");
  }, [n]);
  useEffect(() => {
    // console.log("任何一个state变化都执行这句话");
  });
  let inner
  if (n % 2 === 0) {
    inner = <A />
  }
  return (
    <div>
      n={n}
      <button onClick={onClick}>+1</button>
      {inner}
    </div>
  );
}
function A() {
  // 模拟componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("A组件要死掉了");
    };
  }, []);
    return (<div>组件A</div>);
}

export default App;
