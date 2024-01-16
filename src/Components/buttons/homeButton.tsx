import React from 'react';
import { FaHome } from 'react-icons/fa';

const HomeButton: React.FC = () => {
  const handleButtonClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="flex flex-row">
      <button
        onClick={handleButtonClick}
        className="bg-slate-400 w-56 rounded m-1 p-1 flex justify-around items-center text-xl"
      >
        <FaHome size={35} />
        Voltar ao Inicio
      </button>
    </div>
  );
};

export default HomeButton;
