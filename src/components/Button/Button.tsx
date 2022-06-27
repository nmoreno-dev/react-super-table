import React, { ReactElement } from "react";
import { ButtonProps } from "../../types/Button.types";

export const Button = ({
  label,
  icon,
  separator,
  circle,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="site-button"
      disabled={props.disabled}
    >
      {label}
      {separator && <span className="separator"></span>}
      {icon}
    </button>
  );
};
