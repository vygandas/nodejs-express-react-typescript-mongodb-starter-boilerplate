import React from 'react';
import styled from 'styled-components';
import NavItem from '../../styled/NavItem';
import { Container } from '../../styled/Container';
import { Row } from '../../styled/Row';
import { Column } from '../../styled/Column';
import { Code, Paragraph } from "../../styled/Text";

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
