import React, {ReactNode} from 'react';
import { Title } from "../../styled/Text";
import { config } from "../../config";
import { Column, Container, Row } from "../../styled/Layout";
import {ButtonSubmit, Input, InputError, Label} from "../../styled/Forms";
import {validateEmail} from "../../helpers/validators";

interface IProps {

}

interface IState {
    email: string;
    password: string;

    emailError: string;
    passwordError: string;
}

class SignIn extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
        };
    }

    formSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        this.validate();
    };

    validate = () => {
        let isValid = true;

        if (this.state.email === '') {
            this.setState({ emailError: 'Email field should not be empty' });
            isValid = false;
        } else if (!validateEmail(this.state.email)) {
            this.setState({ emailError: 'Email entered is invalid' });
            isValid = false;
        } else {
            this.setState({ emailError: '' });
        }

        if (this.state.password === '') {
            this.setState({ passwordError: 'Password field should not be empty' });
            isValid = false;
        } else if (this.state.password.length < 5) {
            this.setState({ passwordError: 'Password entered is too short' });
            isValid = false;
        } else {
            this.setState({ passwordError: '' });
        }

        return isValid;
    };

    render (): ReactNode {
        return (
            <Container>
                <Row>
                    <Column>
                        <Title>
                            Sign In to {config.appName}
                        </Title>
                    </Column>
                    <Column>
                        <form onSubmit={this.formSubmit}>
                            <Label>
                                <span>
                                    Email
                                </span>
                                <Input
                                    type='email'
                                    name='email'
                                    required={true}
                                    placeholder='client@company.org'
                                    value={this.state.email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}
                                />
                                {this.state.emailError !== '' && <InputError>{this.state.emailError}</InputError>}
                            </Label>
                            <Label>
                                <span>
                                    Password
                                </span>
                                <Input
                                    type='password'
                                    name='password'
                                    required={true}
                                    placeholder='*********'
                                    value={this.state.password}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })}
                                />
                                {this.state.passwordError !== '' && <InputError>{this.state.passwordError}</InputError>}
                            </Label>
                            <ButtonSubmit>
                                Sign In
                            </ButtonSubmit>
                        </form>
                    </Column>
                </Row>
            </Container>
        );
    }
}

export default SignIn;
