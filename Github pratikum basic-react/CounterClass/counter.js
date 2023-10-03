import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function CounterFunctional() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter (Functional Component)</h1>
      <p>Nilai: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CounterFunctional />);
