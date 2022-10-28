import styles from './film-card.module.scss';
import img from 'assets/imgs/au_starwars_thephantommenace_movie_poster_cbe72014.webp';

interface FilmCardProps {
  title: string;
  src: string;
  year: string;
  genre: string;
}

export const FilmCard = ({ title, src, year, genre }: FilmCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerHover}>
        <img
          className={styles.containerHoverImg}
          src={src || img}
          loading={'lazy'}
          alt={title}
        />
      </div>
      <div className={styles.containerInfo}>
        <span className={styles.containerInfoTitle}>{title}</span>
        <span className={styles.containerInfoAdditional}>
          {year}, {genre}
        </span>
      </div>
    </div>
  );
};
