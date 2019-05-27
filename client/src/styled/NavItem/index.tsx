import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(Link)`
  color: #61dafb;

  &.active {
    color: paleturquoise;
  }
`;

export default NavItem;
