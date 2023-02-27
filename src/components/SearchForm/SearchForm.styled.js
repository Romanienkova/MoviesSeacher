import styled from '@emotion/styled';

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;

  max-width: 600px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  border: 2px solid ${props => props.theme.colors.greenLight};
  transition: border ${props => props.theme.animation.cubicBezier};

  :hover,
  :focus {
    outline: none;
    border: 2px solid ${props => props.theme.colors.orangeLight};
  }

  input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 18px;
    border: none;
    outline: none;
    padding: 0 8px;
  }
`;

export const StyledButton = styled.button`
  display: inline-block;
  width: 120px;
  height: 48px;
  border: 0;
  transition: background-color ${props => props.theme.animation.cubicBezier};
  cursor: pointer;
  outline: none;

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.orangeLight};
  }

  span {
    display: flex;
	 
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 40px;
    padding: 0;
  }
`;
