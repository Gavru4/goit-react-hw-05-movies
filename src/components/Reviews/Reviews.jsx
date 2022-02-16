import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'utils/MoviesApi';

const Reviews = () => {
  const { moviesId } = useParams();
  const [overview, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(moviesId)
      .then(reviews => setReviews(reviews))
      .catch(error => console.log(error));
  }, [moviesId]);

  return (
    <ul>
      {overview?.length === 0 ? (
        <li>
          <p>Sorry no movie reviews</p>
        </li>
      ) : (
        overview?.map(el => {
          return (
            <li key={el.id}>
              <h2>{el.author}</h2>
              <p>{el.content}</p>
              <a href={el.url} target="_blank">
                More about film
              </a>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default Reviews;
