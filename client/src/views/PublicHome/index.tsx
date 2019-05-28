import React from 'react';
import NavItem from '../../styled/NavItem';
import { Code, Paragraph } from "../../styled/Text";
import {Column, Container, Row} from "../../styled/Layout";

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
