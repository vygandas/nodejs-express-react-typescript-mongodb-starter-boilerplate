import React from 'react';
import { Title } from "../../styled/Text";
import { config } from "../../config";
import { Column, Container, Row } from "../../styled/Layout";

const SignUp: React.FC = () => {
    return (
        <Container>
            <Row>
                <Column>
                    <Title>
                        Signup to {config.appName}
                    </Title>
                </Column>
                <Column>

                </Column>
            </Row>
        </Container>
    );
}

export default SignUp;
