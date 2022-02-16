import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Route, useParams } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { getMovieDetails } from 'utils/MoviesApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import s from './MovieDetailsPage.module.css';
import { useLocation } from 'react-router-dom';

const MovieDetailsPage = () => {
  const imgUrl = 'https://image.tmdb.org/t/p/w400';
  const match = useRouteMatch();
  const [oneMovi, setOneMovi] = useState(null);
  const history = useHistory();

  const { moviesId } = useParams();
  const location = useLocation();

  const handleGoBack = () => {
    history.push(location.state.from);
  };

  useEffect(() => {
    getMovieDetails(moviesId)
      .then(data => setOneMovi(data))
      .catch(eror => {
        history.push('/');
        Notify.failure('The resource you requested could not be found');
      });
  }, [moviesId]);

  return (
    oneMovi && (
      <>
        <div className={s.conteiner}>
          <button type="button" className={s.link} onClick={handleGoBack}>
            GoBack
          </button>
          {/* <NavLink
            className={s.link}
        
             to="/"
          > */}
          {/* Go back */}
          {/* </NavLink> */}
          <div className={s.wrepper}>
            <div>
              <img
                src={imgUrl + oneMovi.poster_path}
                alt=""
                className={s.img}
              />
            </div>
            <div className={s.textConteiner}>
              <h2 className={s.title}>{oneMovi.title}</h2>
              <p className={s.score}>User Score: {oneMovi.vote_average}</p>
              <h2 className={s.title}>Owerview</h2>
              <p className={s.text}>{oneMovi.overview}</p>
              <h2 className={s.title}>Genders</h2>
              <div className={s.genres}>
                {oneMovi.genres.map(el => (
                  <p className={s.genresName} key={el.id}>
                    {el.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={s.adminInfoWreper}>
          <h2 className={s.adminTitle}>Additional information</h2>
          <NavLink
            className={s.cast}
            to={{
              pathname: match.url + '/cast',
              state: { from: location.state.from || '/' },
            }}
          >
            Cast
          </NavLink>
          <NavLink
            className={s.reviews}
            to={{
              pathname: match.url + '/reviews',
              state: { from: location.state.from || '/' },
            }}
          >
            Reviews
          </NavLink>
        </div>
        <Route path={match.path + '/reviews'}>
          <Reviews />
        </Route>
        <Route path={match.path + '/cast'}>
          <Cast />
        </Route>
      </>
    )
  );
};

export default MovieDetailsPage;
