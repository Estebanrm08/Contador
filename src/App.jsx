import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [userNumber, setUserNumber] = useState(''); // Estado para el número del usuario
  const [comparisonMessage, setComparisonMessage] = useState(''); // Mensaje de comparación

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount > maxCount) {
      setMaxCount(newCount);
    }
    compareNumbers(newCount, userNumber); // Comparar después de incrementar
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    compareNumbers(newCount, userNumber); // Comparar después de decrementar
  };

  const handleUserNumberChange = (event) => {
    const value = event.target.value;
    setUserNumber(value);
    compareNumbers(count, value); // Comparar al cambiar el número del usuario
  };

  const compareNumbers = (countValue, userValue) => {
    const userNum = parseInt(userValue, 10);
    if (!isNaN(userNum)) {
      if (countValue > userNum) {
        setComparisonMessage(`${countValue} es mayor que ${userNum}`);
      } else if (countValue < userNum) {
        setComparisonMessage(`${countValue} es menor que ${userNum}`);
      } else {
        setComparisonMessage(`${countValue} es igual a ${userNum}`);
      }
    } else {
      setComparisonMessage('Por favor, ingrese un número válido.');
    }
  };

  return (
    <div className="container">
      <div>
        <button onClick={handleDecrement}>-</button>
        <span className="count">{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className="max-number">El número máximo alcanzado es: {maxCount}</div>
      <div>
        <input 
          type="number" 
          value={userNumber} 
          onChange={handleUserNumberChange} 
          placeholder="Ingresa un número"
          className="user-input"
        />
      </div>
      <div className="comparison-message">{comparisonMessage}</div>
    </div>
  );
}

export default App;
