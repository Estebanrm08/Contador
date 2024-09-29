import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount > maxCount) {
      setMaxCount(newCount);
    }
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div className="container">
      <div>
        <button onClick={handleDecrement}>-</button>
        <span className="count">{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className="max-number">El número máximo alcanzado es: {maxCount}</div>
    </div>
  );
}

export default App;
