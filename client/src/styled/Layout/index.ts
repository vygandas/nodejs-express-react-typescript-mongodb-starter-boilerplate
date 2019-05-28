import styled from "styled-components";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

/**
 * Keep in mind to use mobile-first approach and climb up.
 * Keep correct @media element order.
 */
export const breakPoints = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

export const Container = styled.div`
    position: relative;
    width: 100%;
    margin: auto;
    
    @media ${breakPoints.mobileS} {
        width: 100%;
    }

    @media ${breakPoints.mobileM} {
        width: 100%;
    }

    @media ${breakPoints.mobileL} {
        width: 100%;
    }

    @media ${breakPoints.tablet} {
        width: 700px;
    }

    @media ${breakPoints.laptop} {
        width: 800px;
    }

    @media ${breakPoints.laptopL} {
        width: 1000px;
    }

    @media ${breakPoints.desktop} {
        width: 1000px;
    }

    @media ${breakPoints.desktopL} {
        width: 1200px;
    }

`;

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

interface IColumn {
    textAlign?: 'left' | 'right' | 'center'
}

export const Column = styled.div<IColumn>`
    position: relative;
    display: inline-block;
    width: 100%;
    text-align: ${props => props.textAlign || 'left'};
`;

const spacerSize = (s: 'small' | 'medium' | 'big' | 'large'): string => {
    switch(s) {
        case 'small': return '15px';
        case 'medium': return '25px';
        case 'big': return '50px';
        case 'large': return '100px';
        default: return '50px';
    }
};

interface ISpacer {
    size?: 'small' | 'medium' | 'big' | 'large';
}

export const Spacer = styled.div<ISpacer>`
    display: block;
    width: 100%;
    height: ${props => (props.size ? spacerSize(props.size) : "50px")};
`;
