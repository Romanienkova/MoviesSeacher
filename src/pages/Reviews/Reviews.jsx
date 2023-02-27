import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from 'services/api';
import { Loader } from 'components/index';

import { StyledReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);

        const movieReviews = await fetchMovieReviews(movieId);

        setMovieReviews(movieReviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}

      {!error && !movieReviews.length && (
        <p style={{ textAlign: 'center' }}>No reviews yet</p>
      )}

      {Boolean(movieReviews.length) && (
        <StyledReviewsList>
          {movieReviews.map(review => {
            const { author, content } = review;
            return (
              <li key={author} className="review__card">
                <p style={{marginBottom: 8}}>
                  <b>Author:</b> {author}
                </p>
                <p>{content}</p>
              </li>
            );
          })}
        </StyledReviewsList>
      )}
    </>
  );
};

export default Reviews;
