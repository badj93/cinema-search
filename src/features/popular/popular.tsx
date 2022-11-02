import { useMemo } from 'react';

import { FilmSlick } from 'entities/films-slick';

export const Popular = () => {
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

  return <FilmSlick title={'Most popular'} films={filmsMock} />;
};
