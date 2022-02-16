import HomePage from 'components/HomePage/HomePage';
import MovieDetailsPage from 'components/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from 'components/MoviesPage/MoviesPage';
import Nav from 'components/Nav/Nav';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Nav />
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
      </Switch>
    </>
  );
};
export default App;
