import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { getMovieDetails } from 'utils/MoviesApi';

const MovieDetailsPage = () => {
  const imgUrl = 'https://image.tmdb.org/t/p/w400';
  const match = useRouteMatch();
  const [oneMovi, setOneMovi] = useState(null);

  const { moviesId } = useParams();

  useEffect(() => {
    getMovieDetails(moviesId)
      .then(data => setOneMovi(data))
      .catch(eror => console.log(eror));
  }, [moviesId]);

  return (
    oneMovi && (
      <>
        <Link to="/">Go back</Link>
        <div>
          <div>
            <img src={imgUrl + oneMovi.poster_path} alt="" />
          </div>
          <h2>{oneMovi.title}</h2>
          <p>User Score: {oneMovi.vote_average}</p>
          <h3>Owerview</h3>
          <p>{oneMovi.overview}</p>
          <h3>Genders</h3>
          <ul>
            {oneMovi.genres.map(el => (
              <li key={el.id}>
                <p> {el.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Additional information</h2>
          <Link to={match.url + '/cast'}>Cast</Link>
          <Link to={match.url + '/reviews'}>Reviews</Link>
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
