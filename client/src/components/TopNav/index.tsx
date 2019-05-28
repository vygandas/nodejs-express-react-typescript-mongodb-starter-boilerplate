import React from 'react';
import styled from 'styled-components';
import { TopNav } from '../../styled/TopNav';
import { Container } from '../../styled/Container';
import { Row } from '../../styled/Row';
import { Column } from '../../styled/Column';
import NavItem from '../../styled/NavItem';
import Logo from '../Logo';
import { connect } from 'react-redux';
import { IAccountState } from '../../reducers/account.reducer';
import IUser from '@project/interfaces/IUser';

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
