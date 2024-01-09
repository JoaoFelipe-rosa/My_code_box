import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  buttonText?: string;
  buttonLink?: string;
}

const Button: FunctionComponent<ButtonProps> = ({ buttonText, buttonLink }) => {
  return (
    <div>
      <Link to={`${buttonLink}`}>
        <button className=" bg-slate-400 w-56 rounded m-2">{buttonText}</button>
      </Link>
    </div>
  );
};

export default Button;
