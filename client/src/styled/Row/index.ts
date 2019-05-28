import styled from "styled-components";

export const Row = styled.div<{
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'normal'
}>`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: ${props => props.alignItems || 'normal'};
`;
