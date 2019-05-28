import styled from "styled-components";

interface IColumn {
    textAlign?: 'left' | 'right' | 'center'
}

export const Column = styled.div<IColumn>`
    position: relative;
    display: inline-block;
    width: 100%;
    text-align: ${props => props.textAlign || 'left'};
`;
