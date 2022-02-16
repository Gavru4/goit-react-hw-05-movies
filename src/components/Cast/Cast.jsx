import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'utils/MoviesApi';
import img from '../../img/th.jpg';

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
      <ul>
        {actors.map(el => {
          return (
            <li key={el.id}>
              <img
                src={
                  el.profile_path === null ? img : `${imgUrl}${el.profile_path}`
                }
                alt=""
              />
              <p>{el.name}</p>
              <p>Character: {el.character}</p>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default Cast;
