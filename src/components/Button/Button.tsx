import React from "react";
import { ButtonProps } from "../../types/Button.types";

export const Button = ({
  label,
  onclick,
  icon,
  separator,
  circle,
  fontSize,
  margin,
  disabled,
  style,
}: ButtonProps) => {
  return (
    <button onClick={onclick} className="site-button" disabled={disabled}>
      {label}
      {separator && <span className="separator"></span>}
      {icon}
    </button>
  );
};
