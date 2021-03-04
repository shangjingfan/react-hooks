
function App() {
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);
  const onClick1 = () => {
    setN(n + 1);
  };
  const onClick2 = () => {
    setM(m + 1);
  };
  return (
    <div className="App">
      n={n}
      <button onClick={onClick1}>n+1</button>
      m={m}
      <button onClick={onClick2}>m+1</button>
      {/* <B data={m} /> */}
      <C data={m} />
    </div>
  );
}
function B(props) {
  console.log("B或C组件执行了");
  return <div>{props.x}</div>;
}
const C = React.memo(B);