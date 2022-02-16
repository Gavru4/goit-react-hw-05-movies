import HomePage from 'components/HomePage/HomePage';
// import MovieDetailsPage from 'components/MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from 'components/MoviesPage/MoviesPage';
import Nav from 'components/Nav/Nav';
import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const MovieDetailsPage = lazy(() =>
  import('components/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('components/MoviesPage/MoviesPage'));

const App = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path={'/'} exact>
            <HomePage />
          </Route>
          <Route path={'/movies/:moviesId'}>
            <MovieDetailsPage />
          </Route>
          <Route path={'/movies'}>
            <MoviesPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};
export default App;
