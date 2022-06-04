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
        const currentSelectedStyle: React.CSSProperties =
          number === currentSelected
            ? {
                backgroundColor: "#3498DB ",
                border: "1px solid black",
                borderRadius: "2px",
              }
            : {};
        return (
          <Button
            label={(number + 1).toString()}
            onclick={() => onNumberClick(number)}
            style={currentSelectedStyle}
            key={index}
          />
        );
      })}
    </>
  );
};
