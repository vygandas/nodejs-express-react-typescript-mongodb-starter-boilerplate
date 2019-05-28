import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styled/Container';
import { Row } from '../../styled/Row';
import { Column } from '../../styled/Column';
import { Title } from "../../styled/Text";
import { config } from "../../config";

const SignIn: React.FC = () => {
    return (
        <Container>
            <Row>
                <Column>
                    <Title>
                        Signin to {config.appName}
                    </Title>
                </Column>
                <Column>

                </Column>
            </Row>
        </Container>
    );
}

export default SignIn;
