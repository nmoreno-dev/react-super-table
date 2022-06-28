import LatoRegular from "../assets/fonts/Lato-Regular.ttf";
import { createGlobalStyle } from "styled-components";

export const FontStyle = createGlobalStyle`
    @font-face {
        font-family: 'Lato';
        src: url(${LatoRegular});
    }
`;
