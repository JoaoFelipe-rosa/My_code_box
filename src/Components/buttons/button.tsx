import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children?: React.ReactNode;
  buttonText?: string;
  buttonLink: string;
  clickFunction?: () => void;
  type?: string;
  className?: string;
  buttonIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
  buttonLink,
  className,
  buttonIcon,
  clickFunction
}) => {
  return (
    <div>
      <Link to={`${buttonLink}`}>
        <button onClick={clickFunction} className={className}>
          {buttonIcon}
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default Button;
