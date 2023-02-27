import styled from '@emotion/styled';

export const StyledPoster = styled.img`
  height: 450px;
  object-fit: cover;
border-radius: 8px;

  transition: transform ${props => props.theme.animation.cubicBezier},
    box-shadow ${props => props.theme.animation.cubicBezier};

  :hover,
  :focus {
    transform: scale(1.02);
    box-shadow: 0 0 10px 1px ${props => props.theme.colors.greenDark};
  }
`;
