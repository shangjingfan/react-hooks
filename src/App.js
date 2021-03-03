import React, { createContext, useContext, useState } from "react"

const C = createContext(null)
function App() {
  const [n, setN] = useState(0)

  return (
    <C.Provider value={{ n, setN }}>
      <A />
    </C.Provider>
  );
}

function A() {
  const { n, setN } = useContext(C)
  const onClick = () => {
    setN(n * 2)
  }
  return (
    <div>
      A组件
      n:{n}
      <button onClick={onClick}>A*2</button>
      <B />
    </div>
  )
}
function B() {
  const { n, setN } = useContext(C)
  const onClick = () => {
    setN(n + 1)
  }
  return (
    <div>
      B组件
      n:{n}
      <button onClick={onClick}>B+1</button>
    </div>
  )
}

export default App;
