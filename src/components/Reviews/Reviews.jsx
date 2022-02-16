import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'utils/MoviesApi';
import s from './Reviews.module.css';

const Reviews = () => {
  const { moviesId } = useParams();
  const [overview, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(moviesId)
      .then(reviews => setReviews(reviews))
      .catch(error => console.log(error));
  }, [moviesId]);

  return (
    <ul className={s.list}>
      {overview?.length === 0 ? (
        <li>
          <p className={s.erroText}>Sorry no movie reviews</p>
        </li>
      ) : (
        overview?.map(el => {
          return (
            <>
              <li className={s.item} key={el.id}>
                <h2 className={s.title}>{el.author}</h2>
                <p className={s.text}>{el.content}</p>
              </li>
              <a className={s.btn} href={el.url} target="_blank">
                More about film
              </a>
            </>
          );
        })
      )}
    </ul>
  );
};

export default Reviews;
