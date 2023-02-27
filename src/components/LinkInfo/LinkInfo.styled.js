import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLinkInfo = styled(Link)`
display: flex;

  padding: 8px;
  color: ${props => props.theme.colors.greenDark};
  text-decoration: none;
  font-weight: 600;

  border: 2px solid ${props => props.theme.colors.greenLight};
  border-radius: 6px;
  transition: background-color ${props => props.theme.animation.cubicBezier},
    color ${props => props.theme.animation.cubicBezier};

  :hover,
  :focus{
    color: ${props => props.theme.colors.orangeLight};
    background-color: ${props => props.theme.colors.greenLight};
  }
`;
