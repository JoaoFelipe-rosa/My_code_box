import React from 'react';
import '../input.css';
import ProjectSelection from './Start';
import Button from '../Components/buttons/button';
import HomeButton from '../Components/buttons/homeButton';

export default function Home() {
  return (
    <div className="flex flex-col w-96 rounded bg-slate-600">
      <div>
        <Button buttonLink={'/21CardGame'} buttonText={'21 CardGame'} />
        <Button buttonLink={'/JogodaVelha'} buttonText={'Jogo Da Velha'} />
        <Button buttonLink={'/Calculadora'} buttonText={'Calculator'} />
        <Button buttonLink={'/TodoList'} buttonText={'To do List'} />
      </div>
      <div>
        <HomeButton />
      </div>
    </div>
  );
}
