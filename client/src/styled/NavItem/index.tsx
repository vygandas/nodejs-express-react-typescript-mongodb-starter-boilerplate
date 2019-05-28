import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface INavItem {
    color?: string;
    colorActive?: string;
    colorHover?: string;
}

const NavItem = styled(Link)<INavItem>`
  color: ${props => props.color || '#6d6d6d'};
  text-decoration: none;
  margin-right: 15px;
  cursor: pointer;

  &:last-child {
    marin-right: 0;
  }

  &:hover {
    color: ${props => props.colorHover || '#000000'};
  }

  &.active {
    color: ${props => props.colorActive || '#000000'};
  }
`;

export default NavItem;
