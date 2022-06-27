import React from "react";
import { Button } from "../Button/Button";
import { NumberButtonsProps } from "../../types/NumberButtonsProps.types";

export const NumberButtons = ({
  numbers,
  currentSelected,
  onNumberClick,
}: NumberButtonsProps) => {
  return (
    <>
      {numbers.map((number, index) => {
        return (
          <Button
            label={(number + 1).toString()}
            onClick={() => onNumberClick(number)}
            key={index}
          />
        );
      })}
    </>
  );
};
