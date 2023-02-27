import { Link } from 'react-router-dom';

import logo from 'images/logo.png';

import { StyledHeader, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
        <nav>
          <Link to="/">
            <img alt="logo" src={logo} width={68} />
          </Link>

          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
    </StyledHeader>
  );
};

