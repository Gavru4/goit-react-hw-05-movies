import MoviesList from 'components/MoviesList/MoviesList';
import MoviesPage from 'components/MoviesPage/MoviesPage';
import { NavLink, Route, Switch } from 'react-router-dom';

const HomePage = () => {
  return (
    <Switch>
      <Route path={'/'}>
        <NavLink to={'/'} activeStyle={{ color: 'red' }}>
          Home
        </NavLink>
      </Route>

      <Route path={'/'}>
        <MoviesList />
      </Route>
      <Route path={'/movies'}>
        <MoviesPage />
      </Route>
    </Switch>
  );
};

export default HomePage;
