import React from 'react';
import { Title } from "../../styled/Text";
import { config } from "../../config";
import { Column, Container, Row } from "../../styled/Layout";

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
