import styled from "styled-components";

const size = (s: 'small' | 'medium' | 'big' | 'large') => {
    switch(s) {
        case 'small': return '15px';
        case 'medium': return '25px';
        case 'big': return '50px';
        case 'large': return '100px';
        default: return '50px';
    }
}

export const Spacer = styled.div<{
    size?: 'small' | 'medium' | 'big' | 'large';
}>`
    display: block;
    width: 100%;
    height: ${props => (props.size ? size(props.size) : "50px")};
`;
