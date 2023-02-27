import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;
