import React, { createContext, useContext, useState, useEffect } from "react"


function App() {
  const [value, setValue] = useState(0);

  useEffect(() => { // 闪烁问题，换成useLayoutEffect就没有
    document.querySelector('#x').innerText = `value: 1000`
  }, [value]);

  return (
    <div id="x" onClick={() => setValue(0)}>value: {value}</div>
  );
}


export default App;
