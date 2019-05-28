import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const Logo: React.FC = () => {
  return (
    <LogoWrapper>
        <LogoImage src={logo} alt="logo" />
    </LogoWrapper>
  );
}

export default Logo;

const LogoWrapper = styled.div`
  margin: 0;
`;

const logoRotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LogoImage = styled.img`
  animation: ${logoRotation} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
  width: 40px;
  height: 40px;
`;