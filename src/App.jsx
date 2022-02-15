import HomePage from 'components/HomePage/HomePage';
import MovieDetailsPage from 'components/MovieDetailsPage/MovieDetailsPage';
import MoviesList from 'components/MoviesList/MoviesList';
import MoviesPage from 'components/MoviesPage/MoviesPage';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path={'/'} exact>
        <HomePage />
        <MoviesList />
      </Route>
      <Route path={'/movies/:moviesId'}>
        <MovieDetailsPage />
      </Route>
      <Route path={'/movies'}>
        <MoviesPage />
      </Route>
    </Switch>
  );
};
export default App;
