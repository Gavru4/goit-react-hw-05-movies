import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import s from './Movieslist.module.css';
import PropTypes from 'prop-types';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { useHistory } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  // const history = useHistory();
  const location = useLocation();

  //  { if(movies === null || movies.length === 0) {
  //   history.push('/movies');
  //   Notify.failure('Please enter a valid request');
  // }}

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

MoviesList.propTypes = {
  movies: PropTypes.array,
};
