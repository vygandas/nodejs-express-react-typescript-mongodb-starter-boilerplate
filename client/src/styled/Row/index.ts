import styled from "styled-components";

interface IRow {
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'normal'
}

export const Row = styled.div<IRow>`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: ${props => props.alignItems || 'normal'};
`;
