// import { useEffect, useState } from 'react';

// import { fetchTrendingMovies } from 'services/api';
// import TrendingItem from 'components/MovieListItem/MovieListItem';

// import { StyledMainTitle, StyledTrendingList } from './HomePage.styled';

// export default function HomePage() {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchMovies() {
//       try {
//         setIsLoading(true);

//         const movies = await fetchTrendingMovies();

//         setMovies(movies);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     fetchMovies();
//   }, []);

//   return (
//     <>
//       <StyledMainTitle>Trending today</StyledMainTitle>

//       <StyledTrendingList>
//         {movies.map(movie => (
//           <MovieListItem {...movie} key={movie.id} />
//         ))}
//       </StyledTrendingList>
//     </>
//   );
// }

import { useEffect, useState } from 'react';

import { fetchTrending } from 'services/api';
import { Loader, MovieCard } from 'components/index';

import { StyledSection } from 'components/Section/Section.styled';
import { StyledMoviesList } from 'components/MoviesList/MoviesList.styled';
import { StyledMainTitle } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);

        const trendMovies = await fetchTrending();

        setMovies(trendMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <StyledSection>
        <StyledMainTitle>Trending today</StyledMainTitle>

        {!error && Boolean(movies.length) && (
          <StyledMoviesList>
            {Boolean(movies.length > 0) &&
              movies.map(movie => {
                return <MovieCard {...movie} key={movie.id} />;
              })}
          </StyledMoviesList>
        )}
      </StyledSection>
    </>
  );
};

export default HomePage;

