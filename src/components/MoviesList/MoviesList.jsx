import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import s from './Movieslist.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    movies && (
      <div className={s.wrepper}>
        <h1 className={s.title}>Trending Today</h1>
        <ol>
          {movies?.map(el => (
            <li key={el.id} className={s.item}>
              <NavLink
                to={{
                  pathname: '/movies/' + el.id,
                  state: { from: location },
                }}
                className={s.link}
                activeStyle={{ color: 'red' }}
              >
                {el?.title || el.name}
              </NavLink>
            </li>
          ))}
        </ol>
      </div>
    )
  );
};

export default MoviesList;
