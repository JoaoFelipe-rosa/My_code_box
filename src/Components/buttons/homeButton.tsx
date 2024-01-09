import React from 'react';

const HomeButton = () => {
  const handleButtonClick = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="bg-slate-400 w-56 rounded m-2"
      >
        Voltar para a Página Inicial
      </button>
    </div>
  );
};

export default HomeButton;
