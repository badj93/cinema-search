import { useMemo } from 'react';

import { FilmCard, Slick } from 'shared/ui';
import styles from './poster.module.scss';

export const Poster = () => {
  const filmsMock = useMemo(
    () => [
      {
        title: 'Звездные войны.\nЭпизод 1. Скрытая угроза',
        src: '',
        year: '2003',
        genre: 'Фантастика, боевик',
      },
      {
        title: 'Звездные войны.\nЭпизод 2. Скрытая угроза',
        src: '',
        year: '2003',
        genre: 'Фантастика, боевик',
      },
      {
        title: 'Звездные войны.\nЭпизод 3. Скрытая угроза',
        src: '',
        year: '2003',
        genre: 'Фантастика, боевик',
      },
      {
        title: 'Звездные войны.\nЭпизод 4. Скрытая угроза',
        src: '',
        year: '2003',
        genre: 'Фантастика, боевик',
      },
      {
        title: 'Звездные войны.\nЭпизод 5. Скрытая угроза',
        src: '',
        year: '2003',
        genre: 'Фантастика, боевик',
      },
      {
        title: 'Звездные войны.\nЭпизод 6. Скрытая угроза',
        src: '',
        year: '2003',
        genre: 'Фантастика, боевик',
      },
      {
        title: 'Звездные войны.\nЭпизод 7. Скрытая угроза',
        src: '',
        year: '2003',
        genre: 'Фантастика, боевик',
      },
    ],
    [],
  );

  const renderFilmCards = useMemo(() => {
    return filmsMock.map(({ title, src, year, genre }) => (
      <FilmCard key={title} title={title} src={src} year={year} genre={genre} />
    ));
  }, [filmsMock]);

  return (
    <div className={styles.container}>
      <h3 className={styles.containerTitle}>
        Now in cinema
        <i className={`pi pi-chevron-right ${styles.containerTitleIcon}`} />
      </h3>
      <div className={styles.containerContent}>
        <Slick
          dots={false}
          infinite={false}
          speed={500}
          slidesToShow={6}
          slidesToScroll={6}>
          {renderFilmCards}
        </Slick>
      </div>
    </div>
  );
};
