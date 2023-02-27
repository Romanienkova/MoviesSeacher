import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCredits } from 'services/api';
import { Loader } from 'components/index';

import { StyledCastList } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);

        const movieCast = await fetchMovieCredits(movieId);

        setMovieCast(movieCast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
	  }
	  getCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}

      {!error && !movieCast.length && (
        <p style={{ textAlign: 'center' }}>No information yet</p>
      )}

      {Boolean(movieCast.length) && (
        <StyledCastList>
          {movieCast.map(actor => {
            const { profile_path, character, name, id } = actor;
            return (
              <li className="cast__card" key={id}>
                <img
                  className="cast__poster"
                  src={profile_path}
                  alt={name}
                  loading="lazy"
                />
                <div style={{ fontSize: 14, margin: 4 }}>
                  <p>
                    <b>Character:</b> {character}
                  </p>
                  <p>
                    <b>Name:</b> {name}
                  </p>
                </div>
              </li>
            );
          })}
        </StyledCastList>
      )}
    </>
  );
};

export default Cast;
