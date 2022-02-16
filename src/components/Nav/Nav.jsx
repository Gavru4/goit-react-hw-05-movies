import { NavLink, Switch } from 'react-router-dom';
import s from './Nav.module.css';
const Nav = () => {
  return (
    <nav className={s.nav}>
      <NavLink to={'/'} exact className={s.link} activeStyle={{ color: 'red' }}>
        Home
      </NavLink>

      <NavLink to={'/movies'} className={s.link} activeStyle={{ color: 'red' }}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Nav;
