import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {RiArrowGoBackFill} from 'react-icons/ri';

import { fetchMovieDetails } from 'services/api';
import { Loader } from 'components/index';

import { StyledMovieDetailsContainer } from './MovieDetailsPage.styled';
import { StyledSection } from 'components/Section/Section.styled';
import { StyledLinkInfo } from 'components/LinkInfo/LinkInfo.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    (async function () {
      try {
        setIsLoading(true);

        const movieDetails = await fetchMovieDetails(movieId);

        setMovieDetails(movieDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const isCastVisible = location.pathname.includes('cast');
  const isReviewsVisible = location.pathname.includes('reviews');

  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
    production_countries,
  } = movieDetails;

  return (
    <>
      {isLoading && <Loader />}

      <StyledSection style={{ paddingBottom: '0' }}>
        <div style={{ paddingLeft: 40, paddingRight: 40 }}>
          <StyledLinkInfo
            to={location.state?.from ?? '/'}
            style={{ width: 104 }}
          >
            <RiArrowGoBackFill size={20} />&nbsp;Go back
          </StyledLinkInfo>

          <StyledMovieDetailsContainer>
            <img
              className="movie__details--poster"
              alt={'Poster of "' + title + '"'}
              src={poster_path}
              loading="lazy"
              width={220}
            />
            <div className="movie__content">
              <div className="movie__title">
                <h1>
                  {title} [{release_date}]
                </h1>
              </div>
              <div className="movie__rating">{vote_average}</div>
              <p>
                <b>Overview: </b>
                {overview}
              </p>
              <p>
                <b>Genres: </b>
                {genres}
              </p>
              <p>
                <b>Countries: </b>
                {production_countries}
              </p>
            </div>
          </StyledMovieDetailsContainer>

          <nav
            style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}
          >
            <StyledLinkInfo
              state={{ from: location.state?.from ?? '/' }}
              to={isCastVisible ? '' : 'cast'}
            >
              {isCastVisible ? 'Hide Cast' : 'Show Cast'}
            </StyledLinkInfo>

            <StyledLinkInfo
              state={{ from: location.state?.from ?? '/' }}
              to={isReviewsVisible ? '' : 'reviews'}
            >
              {isReviewsVisible ? 'Hide Reviews' : 'Show Reviews'}
            </StyledLinkInfo>
          </nav>
        </div>
      </StyledSection>

      <StyledSection>
        <Outlet />

        {/* <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>

          (without Layout) */}
      </StyledSection>
    </>
  );
};

export default MovieDetailsPage;
