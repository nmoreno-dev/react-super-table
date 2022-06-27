import React, { ReactElement } from "react";
import { ButtonProps } from "../../types/Button.types";
import { StyledButton } from "./Button.elements";

export const Button = ({
  label,
  icon,
  separator,
  circle,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={props.onClick}
      className="site-button"
      disabled={props.disabled}
    >
      {label}
      {separator && <span className="separator"></span>}
      {icon}
    </StyledButton>
  );
};
