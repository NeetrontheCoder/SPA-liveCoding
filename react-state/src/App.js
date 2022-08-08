import { useState } from 'react';


function App() {



  
  const [count, setCount] = useState(0); //initial value, function
  
  function incrementCounter() {
    setCount(count + 1);
  }
 
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={incrementCounter}>Click me!</button>
    </div>
  );
}

export default App;
