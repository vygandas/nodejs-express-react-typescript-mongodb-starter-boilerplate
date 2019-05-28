import React from 'react';
import { TopNav } from '../../styled/TopNav';
import NavItem from '../../styled/NavItem';
import Logo from '../Logo';
import { connect } from 'react-redux';
import { IAccountState } from '../../reducers/account.reducer';
import IUser from '@project/interfaces/IUser';
import { Column, Container, Row } from "../../styled/Layout";

interface IProps {
    user: IUser|null;
};

const TopNavigation: React.FC<IProps> = (props) => {
  return (
    <TopNav>
        <Container>
            <Row alignItems="center">
                <Column>
                    <NavItem to="/">
                        <Logo/>
                    </NavItem>
                </Column>
                <Column>
                    <NavItem to="/">
                        Menu
                    </NavItem>
                </Column>
                <Column textAlign="right">
                    {props.user && (
                        <NavItem to="/">
                            {props.user.fullName}
                        </NavItem>
                    )}
                    {!props.user && ([
                        <NavItem to="/signup" key="button-signup">
                            Sign up
                        </NavItem>,
                        <NavItem to="/signin" key="button-signin">
                            Sign in
                        </NavItem>
                    ])}
                </Column>
            </Row>
        </Container>
    </TopNav>
  );
}

export default connect((state: { account: IAccountState }) => {
    return {
        user: state.account.user
    };
})(TopNavigation);
