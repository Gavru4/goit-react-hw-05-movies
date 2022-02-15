import MoviesPage from 'components/MoviesPage/MoviesPage';
import { NavLink, Route } from 'react-router-dom';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <Route path={'/'}>
        <nav className={s.nav}>
          <NavLink to={'/'} exact>
            Home
          </NavLink>

          <NavLink to={'/movies'}>Movies</NavLink>
        </nav>
      </Route>
    </>
  );
};

export default HomePage;
