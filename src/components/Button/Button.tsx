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
  const buttonStyle = {
    fontSize: fontSize || "1rem",
    margin: margin || "5px",
    borderRadius: (circle && "50%") || undefined,
    ...style,
  };

  return (
    <button
      onClick={onclick}
      className="site-button"
      style={buttonStyle}
      disabled={disabled}
    >
      {label}
      {separator && <span className="separator"></span>}
      {icon}
    </button>
  );
};
