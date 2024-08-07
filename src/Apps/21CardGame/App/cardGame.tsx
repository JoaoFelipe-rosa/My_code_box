import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Components/Header/Header';
import HomeButton from '../../../Components/buttons/homeButton';

// CSS
// import '../../../index.css';

export default function CardGame() {
  return (
    <div className="flex justify-center flex-col w-full h-full items-center">
      <div className="p-5">
        <Header />
      </div>
      <div className=" flex justify-center rouded">
        <div>
          <Link to="/21cardgame/Game">
            <button
              className="p-2 w-full rounded transition ease-in-out delay-200 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300"
              type="button"
            >
              START THE MAGIC!!
            </button>
          </Link>
        </div>
      </div>
      <HomeButton />
    </div>
  );
}
