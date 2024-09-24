import React from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  children?: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
  clickFunction: () => void;
  type?: string;
  className?: string;
  buttonIcon?: React.ReactNode;
}

export default function LinkButton({
  buttonLink,
  clickFunction,
  className,
  buttonIcon,
  buttonText
}: LinkButtonProps) {
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
}
