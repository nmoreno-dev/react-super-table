import styled, { css } from "styled-components";

type CommonContainerProps = {
  elementName: 'paginationButtons' | 'numberButtons' | 'paginationContainer' | 'header'
}

export const CommonContainer = styled.div<CommonContainerProps>(
  ({elementName}) => css`
    background-color: ${(props) =>
      props.theme[elementName]?.backgroundColor};
    text-color: ${(props) =>
      props.theme[elementName]?.textColor};
    margin: ${(props) =>
      props.theme[elementName]?.margin};
    margin-top: ${(props) =>
      props.theme[elementName]?.marginTop};
    margin-right: ${(props) =>
      props.theme[elementName]?.marginRight};
    margin-bottom: ${(props) =>
      props.theme[elementName]?.marginBottom};
    margin-left: ${(props) =>
      props.theme[elementName]?.marginLeft};
    padding: ${(props) =>
      props.theme[elementName]?.padding};
    padding-top: ${(props) =>
      props.theme[elementName]?.paddingTop};
    padding-right: ${(props) =>
      props.theme[elementName]?.paddingRight};
    padding-botton: ${(props) =>
      props.theme[elementName]?.paddingBotton};
    padding-left: ${(props) =>
      props.theme[elementName]?.paddingLeft};
    border: ${(props) =>
      props.theme[elementName]?.border};
    border-top: ${(props) =>
      props.theme[elementName]?.borderTop};
    border-right: ${(props) =>
      props.theme[elementName]?.borderRight};
    border-bottom: ${(props) =>
      props.theme[elementName]?.borderBottom};
    border-left: ${(props) =>
      props.theme[elementName]?.borderLeft};
    border-radius: ${(props) =>
      props.theme[elementName]?.borderRadius};
    gap: ${(props) =>
      props.theme[elementName]?.gap};
  `
);
