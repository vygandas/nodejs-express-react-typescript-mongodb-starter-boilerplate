import React from 'react';
import styled from 'styled-components';
import NavItem from '../../styled/NavItem';
import { Container } from '../../styled/Container';
import { Row } from '../../styled/Row';
import { Column } from '../../styled/Column';

const PublicHome: React.FC = () => {
  return (
    <Container>
        <Row>
            <Column>
                <Paragraph>
                    Edit <Code>src/App.tsx</Code> and save to reload.
                </Paragraph>
                <NavItem
                    to='/'
                    rel="noopener noreferrer"
                >
                    Authenticate
                </NavItem>
            </Column>
        </Row>
    </Container>
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

const Code = styled.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

const Paragraph = styled.p``;