import styled from '@emotion/styled';

export const StyledReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 40px;

  .review__card {
    padding: 15px;
    border: 6px solid ${props => props.theme.colors.greenDark};
    border-radius: 10px;
  }
`;
