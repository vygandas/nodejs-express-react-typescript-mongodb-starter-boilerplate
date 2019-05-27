import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';
import NavItem from '../../styled/NavItem';

const PublicHome: React.FC = () => {
  return (
    <Header>
        <Logo src={logo} alt="logo" />
        <Paragraph>
            Edit <Code>src/App.tsx</Code> and save to reload.
        </Paragraph>
        <NavItem
            to='/'
            rel="noopener noreferrer"
        >
            Authenticate
        </NavItem>
    </Header>
  );
}

export default PublicHome;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const logoRotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${logoRotation} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const Code = styled.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

const Paragraph = styled.p``;