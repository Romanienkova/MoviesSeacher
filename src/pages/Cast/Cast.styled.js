import styled from '@emotion/styled';

export const StyledCastList = styled.ul`
  padding: 0 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .cast__card {
    width: 120px;
    height: auto;
	 border-radius: 6px;
border: 1px solid ${props => props.theme.colors.greenLight};

  }

  .cast__poster {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 6px 6px 0 0;
  }
`;
