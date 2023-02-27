import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { fetchSearchMovie } from 'services/api';
import { Loader, MovieCard, SearchForm } from 'components/index';

import { StyledSection } from 'components/Section/Section.styled';
import { StyledContainer } from 'components/Container/Container.styled';
import { StyledMoviesList } from 'components/MoviesList/MoviesList.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (searchQuery === null || searchQuery === '') return;

    async function getMovieByQuery(searchQuery) {
      try {
        setIsLoading(true);

        const moviesByQuery = await fetchSearchMovie(searchQuery);

        if (!moviesByQuery.length) {
          setError(`No movies found, please try another query.`);
          setMovies([]);
          return;
        }
        toast.success(`Found ${moviesByQuery.length} movies!`);
        setMovies(moviesByQuery);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieByQuery(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      setError(null);
    }
  }, [error]);

  const onSubmit = searchValue => {
    setSearchParams({ query: searchValue });
  };

  return (
    <>
      {isLoading && <Loader />}

      <StyledSection style={{ paddingBottom: '0' }}>
        <StyledContainer>
          <SearchForm searchQuery={searchQuery} onSubmit={onSubmit} />
        </StyledContainer>
      </StyledSection>

      <StyledSection>
        {!isLoading && !error && !movies.length && (
          <p
            style={{
              textAlign: 'center',
            }}
          >
            Sorry, there are no movies...
          </p>
        )}

        {Boolean(movies.length) && (
          <StyledMoviesList>
            {movies.map(movie => {
              return (
                <MovieCard location={location} {...movie} key={movie.id} />
              );
            })}
          </StyledMoviesList>
        )}
      </StyledSection>

      <Toaster/>
    </>
  );
};

export default MoviesPage;
