import HomePage from 'components/HomePage/HomePage';
import MoviesList from 'components/MoviesList/MoviesList';
import { NavLink, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path={'/'}>
        <HomePage />
      </Route>
      <Route path={'/'}>
        <MoviesList />
      </Route>
    </Switch>
  );
};
export default App;
