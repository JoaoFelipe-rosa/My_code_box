import React, { useState } from 'react';

export const Calculator: React.FC = () => {
  const [expression, setExpression] = useState('');

  const handleClick = (value: string) => {
    if (expression.length < 9) {
      if (expression === 'Error') {
        setExpression(value);
      } else {
        setExpression(prev => prev + value);
      }
    }
  };
  const handleBackspace = () => {
    setExpression(prev => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const expressionWithoutEqual = expression.replace('=', '');
      setExpression(eval(expressionWithoutEqual).toString());
    } catch (erro) {
      setExpression('Error');
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
    <div className="flex flex-col justify-center items-center border border-gray-300 rounded h-72">
      <div className="mb-2 text-2x1 font-bold">{expression}</div>
      <div className="grid grid-cols-4 gap-5">
        {buttons.map(button => (
          <button key={button} onClick={() => handleClick(button)}>
            {button}
          </button>
        ))}
        <button onClick={handleBackspace}>&larr;</button>
      </div>
      <div className="flex justify-end mx-auto my-2 w-full">
        <button className="w-10 bg-slate-500" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};
