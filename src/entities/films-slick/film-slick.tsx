import { useMemo } from 'react';

import { FilmCard, Slick } from 'shared/ui';
import styles from './film-slick.module.scss';

interface FilmSlickProps {
  films: any[];
  title: string;
  isShowTotalCard?: boolean;
}

export const FilmSlick = ({
  films,
  title,
  isShowTotalCard = true,
}: FilmSlickProps) => {
  const renderFilmCards = useMemo(() => {
    return films.map(({ title, src, year, genre }) => (
      <FilmCard key={title} title={title} src={src} year={year} genre={genre} />
    ));
  }, [films]);

  return (
    <div className={styles.container}>
      <h3 className={styles.containerTitle}>
        {title}
        <i className={`pi pi-chevron-right ${styles.containerTitleIcon}`} />
      </h3>
      <div className={styles.containerContent}>
        <Slick
          dots={false}
          infinite={false}
          speed={500}
          slidesToShow={6}
          swipe={true}
          slidesToScroll={6}
          isShowTotalCard={isShowTotalCard}>
          {renderFilmCards}
        </Slick>
      </div>
    </div>
  );
};
