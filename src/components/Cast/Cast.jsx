import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'utils/MoviesApi';
// import { logo as img } from '../../../public/logo192.png';

const Cast = () => {
  const imgUrl = 'https://image.tmdb.org/t/p/w400';
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => setActors(data.cast))
      .catch(error => console.log(error));
  }, [movieId]);
  return (
    actors && (
      <ul>
        {actors.map(el => {
          return (
            <li key={el.id}>
              <img
                src={`${imgUrl}${
                  el.profile_path === null ? 'not-foto' : el.profile_path
                }`}
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
