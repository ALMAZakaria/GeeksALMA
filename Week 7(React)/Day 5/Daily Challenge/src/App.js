import React, { useState } from 'react';
import './App.css';

function calculate(a, b, op) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);
  switch (op) {
    case '+': return numA + numB;
    case '-': return numA - numB;
    case '*': return numA * numB;
    case '/': return numB !== 0 ? numA / numB : '∞';
    default: return '';
  }
}

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const handleCalculate = (e) => {
    e.preventDefault();
    setResult(calculate(num1, num2, operation));
  };

  return (
    <div className="calculator-container">
      <h1>Adding Two Numbers</h1>
      <form onSubmit={handleCalculate} className="calculator-form">
        <input
          type="number"
          value={num1}
          onChange={e => setNum1(e.target.value)}
          placeholder="First number"
          required
        />
        <input
          type="number"
          value={num2}
          onChange={e => setNum2(e.target.value)}
          placeholder="Second number"
          required
        />
        <select value={operation} onChange={e => setOperation(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
        <button type="submit">Add Them!</button>
      </form>
      {result !== '' && <div className="result">{result}</div>}
    </div>
  );
}

export default App; 