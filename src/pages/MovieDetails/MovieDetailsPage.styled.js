import styled from '@emotion/styled';

export const StyledMovieDetailsContainer = styled.div`
  display: flex;

  gap: 30px;
  margin-top: 40px;

  .movie__details--poster {
    height: 100%;
    object-fit: cover;
	 border-radius: 8px;

  }

  .movie__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
	 margin-bottom: 12px;

  }

  .movie__title {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    color: ${props => props.theme.colors.greenDark};
  }

  .movie__rating {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.orangeDark};
    border-radius: 6px;
    padding: 6px 12px;
    width: 100px;
    color: ${props => props.theme.colors.greenDark};
    font-size: 18px;
    font-weight: 700;
  }
`;
