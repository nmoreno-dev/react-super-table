import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
`

export const Headers = styled.thead``

type HeaderProps={
    align: "left" | "right" | "center"
}
export const Header = styled.th<HeaderProps>`
    text-align: ${props => props.align}
`


export const Row = styled.tr``
