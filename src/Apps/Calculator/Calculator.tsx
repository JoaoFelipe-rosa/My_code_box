import { useState } from 'react';

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
    <div className="flex flex-col items-center">
      <div className="flex flex-col border border-black rounded p-10">
        <div className="mb-2 text-2xl w-36 h-8 font-bold bg-gray-500 p-1">
          {expr}
        </div>

        <div className="grid grid-cols-4 gap-5p-3">
          {buttons.map(b => (
            <div key={b} className="border p-1 rounded">
              <button onClick={() => handleClick(b)}>{b}</button>
            </div>
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
