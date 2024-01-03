import React from 'react';
import { Calculator } from '../Apps/Calculator/Calculator';
import JogoDaVelha from '../Apps/Tic_Tac_Toe/ticTacToe';
import TodoList from '../Apps/ToDo_list/ToDoList';

import '../input.css';
import CardGame from '../Apps/21CardGame/App/cardGame';

export default function Home() {
  const dataStart = '12/06/2023';
  return (
    <>
      <div className="bg-lime-900">
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
      </div>
    </>
  );
}
