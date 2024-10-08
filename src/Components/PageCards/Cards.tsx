import { ReactNode } from 'react';

interface cardTypes {
  ClassName?: string;
  children?: ReactNode;
}
export default function Card({ ClassName, children }: cardTypes) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-col m-5 min-w-[250px] min-h-[100px] justify-center items-center rounded shadow-2xl bg-[#386180]">
        <div className={`flex justify-center flex-col p-12 ${ClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
