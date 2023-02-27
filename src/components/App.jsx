import { lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { routes } from 'services/routes';
import { Layout } from 'layout/Layout/Layout';
import { Loader } from 'components/index';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const MoviesPage = lazy(() => import('pages/Movies/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetails/MovieDetailsPage')
);
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

const { HOME, MOVIES, MOVIE_ID_DETAILS, CAST, REVIEWS } = routes;

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={MOVIES} element={<MoviesPage />} />
          <Route path={MOVIE_ID_DETAILS} element={<MovieDetailsPage />}>
            <Route path={CAST} element={<Cast />} />
            <Route path={REVIEWS} element={<Reviews />} />
          </Route>
        </Route>

        <Route
          path="*"
          element={
            <p style={{ textAlign: 'center', fontSize: 36, marginTop: 90 }}>
              Page Not Found <Link to={HOME}>Back to Home</Link>
            </p>
          }
        />
      </Routes>
    </Suspense>

    //  *********** without Layout ********
    // <>
    //   <Header />
    //   <main>
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
    //       <Route path="/movies" element={<MoviesPage />} />
    //       <Route
    //         path="*"
    //         element={
    //               <p>
    //                 Page Not Found <Link to="/">Go Home</Link>
    //               </p>
    //         }
    //       />
    //     </Routes>
    //   </main>
    // </>
  );
};
