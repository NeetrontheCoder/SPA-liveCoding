import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); //initial value, function
  const [bgColor, setBgColor] = useState("lightblue");

  function incrementCounter() {
    setCount(count + 1);
  }

  function decrementCounter() {
    setCount(count - 1);
  }

  function changeBGColor() {
    setBgColor(bgColor === "lightblue" ? "lightgreen" : "lightblue");
  }

  console.log("render");
  return (
    <div className="App">
      <h1 style={changeBGColor}>Counter</h1>
      <button onClick={() => incrementCounter()}>increment</button>
      <button onClick={() => decrementCounter()}>decrement</button>
    </div>
  );
}

export default App;
