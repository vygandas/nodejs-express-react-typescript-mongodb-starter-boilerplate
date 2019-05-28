import styled from "styled-components";

export const Column = styled.div<{
    textAlign?: 'left' | 'right' | 'center'
}>`
    position: relative;
    display: inline-block;
    width: 100%;
    text-align: ${props => props.textAlign || 'left'};
`;
