import React from 'react';
import styled from 'styled-components';
import PublicHome from './views/PublicHome';
import { HashRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{light?: boolean}>`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => (props.light ? 'white' : 'black')};
  }
`;

const App: React.FC = () => {
  return (
    <MainWrapper>
      <GlobalStyle light={true} />
      <HashRouter hashType='noslash'>
        <Route path="/" exact component={PublicHome} />
      </HashRouter>
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
