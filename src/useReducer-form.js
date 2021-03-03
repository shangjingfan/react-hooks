import React from "react"
const initFormData = {
  name: "",
  age: 18,
  nationality: "汉族"
}
const reducer = (state, action) => {
  switch (action.type) {
    case "patch":
      return { ...state, ...action.formData }
    case "reset":
      return initFormData
    default:
      throw new Error();
  }
}

function App() {
  const [formData, dispatch] = React.useReducer(reducer, initFormData)
  const onSubmit = () => { }
  const onReset = () => { dispatch({ type: "reset" }) }

  return (
    <div className="App">
      <form onSubmit={onSubmit} onReset={onReset}>
        <label>
          姓名
          <input
            value={formData.name}
            onChange={e => dispatch({ type: "patch", formData: { name: e.target.value } })}
          />
        </label>
        <hr />
        <label>
          年龄
          <input
            value={formData.age}
            onChange={e => dispatch({ type: "patch", formData: { age: e.target.value } })}
          />
        </label>
        <hr />
        <label>
          民族
          <input
            value={formData.nationality}
            onChange={e => dispatch({ type: "patch", formData: { nationality: e.target.value } })}
          />
        </label>
        <hr />
        <button type="submit">提交</button>
        <button type="reset">重置</button>
        <hr />
        {JSON.stringify(formData)}
      </form>
    </div>
  );
}

export default App;
