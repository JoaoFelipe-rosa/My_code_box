import React, { useState } from 'react';
import HomeButton from '../../Components/buttons/homeButton';

export default function Calculator() {
  const [expr, setExpr] = useState('');

  const handleClick = (val: string) => {
    if (expr.length < 9) {
      setExpr(prev => (prev === 'Error' ? val : prev + val));
    }
  };

  const handleBackspace = () => {
    setExpr(prev => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setExpr(eval(expr.replace('=', '')).toString());
    } catch {
      setExpr('Error');
    }
  };

  const buttons = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '+'
  ];

  return (
    <div>
      <div className="flex flex-col h-72 border rounded">
        <div className="mb-2 text-2xl font-bold">{expr}</div>

        <div className="grid grid-cols-4 gap-5">
          {buttons.map(b => (
            <button key={b} onClick={() => handleClick(b)}>
              {b}
            </button>
          ))}

          <button onClick={handleBackspace}>&larr;</button>
        </div>

        <button className="bg-slate-500" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
}
