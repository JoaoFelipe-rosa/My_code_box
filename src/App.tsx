import React from 'react';
import { Calculator } from './assets/Calculator/Calculator';
import GameBoard from './assets/Tic_Tac_Toe/ticTacToe';
import TodoList from './assets/ToDo_list/ToDoList';

import { Link, Route, Routes } from 'react-router-dom';

import './input.css';

function App() {
  const dataStart = '12/06/2023';
  return (
    <>
      <div className="flex bg-slate-400">
        <div>
          <h1>inicio do projeto - {dataStart}</h1>
        </div>
        <div>
          <a href="https://miro.com/welcomeonboard/Z3BRSlZPdm1wQjVacFZnTWxOeVBFeko1Sml0MTB5a0Iya2EwdE1wZUV6TTVYRWQ4aWhmazI1YU1zalQ4VTI5VHwzNDU4NzY0NTM3MjE2MjcxODUzfDI=?share_link_id=174080567873">
            <button> Link do projeto no miro</button>
          </a>
        </div>
      </div>
      <div className="flex justify-center align-center flex-col">
        <div className="text-center container mx-auto">
          <TodoList />
        </div>
        <div className="text-center container mx-auto mt-20">
          <h1 className="text-2xl font-bold mb-4">Jogo da Velha</h1>
          <GameBoard />
        </div>

        <div className="flex flex-col mx-auto my-20 justify-center">
          <h1 className="text-center text-2xl font-bold mb-4">Calculadora</h1>
          <div className="mx-96 w-64">
            <Calculator />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
