import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Components/Header/Header';

// CSS
import '../../../index.css';

export default function CardGame() {
  return (
    <div className="w-full h-full">
      <div className="w-full p-8  ">
        <Header />
      </div>
      <div className=" flex justify-center rouded w-full">
        <div className="flex flex-col items-center">
          <Link to="/21CardGame">
            <button
              className="p-2 w-full rounded transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300"
              type="button"
            >
              START THE MAGIC!!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
