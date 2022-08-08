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

  const resetCounter = () => {
    setCount(0);
  };
  
  return (
    <div className="App">
    <h1 style={{backgroundColor:bgColor}} onClick={changeBGColor}>Counter: {count}  </h1>
    <button onClick={incrementCounter}>increment</button>
    <button onClick={decrementCounter}>decrement</button>
    <button onClick={resetCounter}>reset</button>
    </div>
  );
}
 

export default App;
