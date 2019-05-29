import React, {ReactNode} from 'react';
import { Title } from "../../styled/Text";
import { config } from "../../config";
import { Column, Container, Row } from "../../styled/Layout";
import { ButtonSubmit, Input, InputError, Label } from "../../styled/Forms";
import { validateEmail } from "../../helpers/validators";
import { connect } from "react-redux";
import { IAccountState } from "../../reducers/account.reducer";
import { signInAction } from "../../actions/account.actions";

interface IProps {
    errorMessage: string;
    history: any;
    signInAction: typeof signInAction;
}

interface IState {
    email: string;
    password: string;
    password2: string;

    emailError: string;
    passwordError: string;
    password2Error: string;
}

class SignUp extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            emailError: '',
            passwordError: '',
            password2Error: '',
        };
    }

    formSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (this.validate()) {
            this.props.signInAction({
                email: '',
                password: ''
            }, this.props.history);
        }
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

        if (this.state.password !== this.state.password2) {
            this.setState({ password2Error: 'Passwords must match' });
            isValid = false;
        } else {
            this.setState({ password2Error: '' });
        }

        return isValid;
    };

    errorMessage() {
        if (this.props.errorMessage) {
            return (
                <div className="info-red">
                    {this.props.errorMessage}
                </div>
            );
        }
    }

    render (): ReactNode {
        return (
            <Container>
                <Row>
                    <Column>
                        <Title>
                            Sign Up to {config.appName}
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
                            <Label>
                                <span>
                                    Same password one more time
                                </span>
                                <Input
                                    type='password'
                                    name='password2'
                                    required={true}
                                    placeholder='*********'
                                    value={this.state.password2}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password2: e.target.value })}
                                />
                                {this.state.password2Error !== '' && <InputError>{this.state.password2Error}</InputError>}
                            </Label>
                            <ButtonSubmit>
                                Sign Up
                            </ButtonSubmit>
                        </form>
                        {this.errorMessage()}
                    </Column>
                </Row>
            </Container>
        );
    }
}

export default connect(
    (state: { account: IAccountState }) => ({ errorMessage: state.account.error }),
    {
        signInAction
    })(SignUp);
