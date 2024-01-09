import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Gaming from './Apps/21CardGame/App/Components/Pages/Gaming';
import Home from './Pages/Home';
import JogoDaVelha from './Apps/Tic_Tac_Toe/ticTacToe';
import Calculator from './Apps/Calculator/Calculator';
import TodoList from './Apps/ToDo_list/ToDoList';
import CardGame from './Apps/21CardGame/App/cardGame';
import HomeButton from './Components/buttons/homeButton';

export default function Nav() {
  return (
    <div className="bg-slate-400">
      <Router>
        <Routes>
          <Route path="/My_code_box/21CardGame" element={<Gaming />} />
          <Route path="/My_code_box/JogodaVelha" element={<JogoDaVelha />} />
          <Route path="/My_code_box/Calculadora" element={<Calculator />} />
          <Route path="/My_code_box/TodoList" element={<TodoList />} />
          <Route path="/My_code_box/CardGame" element={<CardGame />} />
          <Route path="/My_code_box/" element={<Home />} />
        </Routes>
      </Router>
      <div>
        <HomeButton />
      </div>
    </div>
  );
}
