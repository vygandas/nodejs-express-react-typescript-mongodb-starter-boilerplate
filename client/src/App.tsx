import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <MainWrapper>
      <Header>
        <Logo src={logo} alt="logo" />
        <Paragraph>
          Edit <Code>src/App.tsx</Code> and save to reload.
        </Paragraph>
        <Anchor
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Anchor>
      </Header>
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

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

const Anchor = styled.a`
  color: #61dafb;
`;

const Code = styled.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

const Paragraph = styled.p``;