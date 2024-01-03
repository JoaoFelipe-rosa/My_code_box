import React from 'react';

export default function GlobalHeader() {
  return (
    <div className=" flex justify-center rouded w-full p-10">
      <div className="bg-cyan-50 p-1 rounded flex justify-center items-center flex-row space-x-10 w-ful max-w-2xl min-w-576 min-w-min h-16 min-h-full">
        <div className="flex justify-center w-[100%] p">
          <h1 className=" text-black font-bold whitespace-nowrap p-10 ">
            MY CODE BOX
          </h1>
        </div>
      </div>
    </div>
  );
}
