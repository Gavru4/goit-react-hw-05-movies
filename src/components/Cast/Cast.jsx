import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'utils/MoviesApi';
import img from '../../img/th.jpg';
import s from './Cast.module.css';

const Cast = () => {
  const imgUrl = 'https://image.tmdb.org/t/p/w400';
  const { moviesId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    getMovieCredits(moviesId)
      .then(data => setActors(data.cast))
      .catch(error => console.log(error));
  }, [moviesId]);
  return (
    actors && (
      <div className={s.wrepper}>
        <ul className={s.list}>
          {actors.map(el => {
            return (
              <li className={s.item} key={el.id}>
                <img
                  className={s.img}
                  src={
                    el.profile_path === null
                      ? img
                      : `${imgUrl}${el.profile_path}`
                  }
                  alt=""
                />
                <p className={s.name}>{el.name}</p>
                <p className={s.character}>
                  <span className={s.characterSpan}>Character:</span>{' '}
                  {el.character}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};

export default Cast;
