import React from "react";
import { NumberButtonsProps } from "../../types/NumberButtonsProps.types";
import { StyledNumberButton } from "./NumberButton.elements";

export const NumberButtons = ({
  numbers,
  currentSelected,
  onNumberClick,
}: NumberButtonsProps) => {
  return (
    <>
      {numbers.map((number, index) => {
        const isTheButtonSelected = currentSelected === number;
        return (
          <StyledNumberButton
            label={(number + 1).toString()}
            onClick={() => onNumberClick(number)}
            key={index}
            selected={isTheButtonSelected}
          />
        );
      })}
    </>
  );
};
