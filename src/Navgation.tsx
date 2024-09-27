import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ApplicationCard from './Pages/ApplicationCard';
import JogoDaVelha from './Apps/Tic_Tac_Toe/ticTacToe';
import Calculator from './Apps/Calculator/Calculator';
import TodoList from './Apps/ToDo_list/ToDoList';
import CardGame from './Apps/21CardGame/App/cardGame';
import WorkoutGenerationPage from './Apps/workoutGenerator/workoutGenerationPage';

import Gaming from './Apps/21CardGame/App/Components/Pages/Gaming';
import HomePage from './Pages/homePage';
import SignupForm from './Apps/login_form/form';

export default function Nav() {
  return (
    <div className="bg-[#386180] w-[100vw] h-[100vh]">
      <Router>
        <Routes>
          <Route
            path="/21cardgame"
            element={<ApplicationCard PageView={<CardGame />} />}
          />
          <Route
            path="/21cardgame/Game"
            element={<ApplicationCard PageView={<Gaming />} />}
          />
          <Route
            path="/TodoList"
            element={<ApplicationCard PageView={<TodoList />} />}
          />
          <Route
            path="/JogodaVelha"
            element={<ApplicationCard PageView={<JogoDaVelha />} />}
          />
          <Route
            path="/Calculadora"
            element={<ApplicationCard PageView={<Calculator />} />}
          />
          <Route
            path="/SignupForm"
            element={<ApplicationCard PageView={<SignupForm />} />}
          />
          <Route
            path="/"
            element={<ApplicationCard PageView={<HomePage />} />}
          />
          <Route
            path="/workoutGenerator"
            element={<ApplicationCard PageView={<WorkoutGenerationPage />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
