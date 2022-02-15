import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getMovieDetails } from 'utils/MoviesApi';

const MovieDetailsPage = () => {
  const imgUrl = 'https://image.tmdb.org/t/p/w400';

  const [oneMovi, setOneMovi] = useState(null);

  const { moviesId } = useParams();

  useEffect(() => {
    getMovieDetails(moviesId)
      .then(data => setOneMovi(data))
      .catch(eror => console.log(eror));
  }, [moviesId]);
  console.log(moviesId);
  console.log(oneMovi);
  //   console.log(oneMovi.title);
  return (
    <>
      {/* <Link>Go back</Link> */}
      <div>
        <img {`${imgUrl} ${oneMovi?.poster_path}`}>
        <h2>{oneMovi?.title}</h2>
        <p>{oneMovi?.vote_average}</p>
        <h3>Owerview</h3>
        <p>{oneMovi?.owerview}</p>
        <h3>Genders</h3>
        <p>{oneMovi?.genders}</p>
      </div>
      <div>
        <h2>Additional information</h2>
        <Link>Cast</Link>
        <Link>Reviews</Link>
      </div>
    </>
  );
};

export default MovieDetailsPage;
