import React, { MouseEventHandler, ReactElement } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  separator?: boolean;
  circle?: boolean;
  icon?: JSX.Element;
}
