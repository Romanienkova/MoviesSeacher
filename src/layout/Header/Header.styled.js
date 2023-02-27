import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 0 60px;

  height: 90px;
  background-color: ${props => props.theme.colors.orangeLight};
  font-size: 20px;
  font-weight: 700;
  box-shadow: 0 0 6px 0px ${props => props.theme.colors.greenDark};

  nav {
    display: flex;
    align-items: center;
    height: 90px;
	 margin-left: 60px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  margin-left: 60px;
  color: ${props => props.theme.colors.greenDark};
  transition: color ${props => props.theme.animation.cubicBezier};

  &.active {
    color: ${props => props.theme.colors.greenLight};

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateY(34px);

      content: '';
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: ${props => props.theme.colors.greenLight};
    }
  }
  &:hover,
  &focus {
    color: ${props => props.theme.colors.greenLight};
  }
`;
