import React from 'react';
import {ButtonProps} from '../../types/Button.types';

export const Button = ({
  label,
  onclick,
  icon,
  separator,
  circle,
  fontSize,
  margin,
}: ButtonProps) => {
  const buttonStyle = {
    fontSize: fontSize || '1rem',
    margin: margin || '5px',
  };

  return (
    <button onClick={onclick} className="site-button" style={buttonStyle}>
      {label}
      {separator && <span className="separator"></span>}
      {icon}
    </button>
  );
};
