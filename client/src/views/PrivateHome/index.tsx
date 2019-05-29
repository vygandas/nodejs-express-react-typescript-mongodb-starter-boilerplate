import React from 'react';
import NavItem from '../../styled/NavItem';
import { Code, Paragraph } from "../../styled/Text";
import { Column, Container, Row } from "../../styled/Layout";

const PrivateHome: React.FC = () => {
  return (
    <Container>
        <Row>
            <Column>
                <Paragraph>
                    Welcome!
                </Paragraph>
            </Column>
        </Row>
    </Container>
  );
}

export default PrivateHome;
