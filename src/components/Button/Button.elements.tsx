import styled from "styled-components";

export const StyledButton = styled.button`
  font-weight: bold;
  padding: 5px;
  background-color: hsl(210, 29%, 29%);
  color: hsl(210, 9%, 92%);
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: hsl(210, 29%, 34%);
    transition: background-color 0.1s ease;
  }

  &:active {
    background-color: hsl(210, 29%, 24%);
  }
`;
