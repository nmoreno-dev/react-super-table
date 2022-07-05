import styled from "styled-components";
import { Button } from "../Button/Button";

type StyledNumberButtonProps = {
  selected?: boolean;
};

export const StyledNumberButton = styled(Button)<StyledNumberButtonProps>`
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.selectedPageButtonBackround
      : props.theme.colors.paginationNumberButton};
  height: 30px;
  width: 30px;
`;
