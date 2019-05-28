import styled from "styled-components";
import { breakPoints } from "../BreakPoints";

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
