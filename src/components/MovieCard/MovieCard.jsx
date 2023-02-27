import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledPoster } from './MovieCard.styled';

export const MovieCard = ({ id, title, poster_path, location }) => {
  return (
    <li key={id}>
      <Link state={{ from: location ?? '/' }} to={`/movies/${id}`}>
        <StyledPoster
          src={poster_path}
          alt={'Poster of "' + title + '"'}
          loading="lazy"
				  width={300}
				  height={450}
        />
      </Link>
    </li>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  location: PropTypes.object,
};
