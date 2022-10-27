import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navigation.module.scss';

export const Navigation = () => {
  const classNameHandler = useCallback((navData: any) => {
    return navData.isActive
      ? `${styles.containerLink} ${styles.containerLinkActive}`
      : styles.containerLink;
  }, []);

  return (
    <div className={styles.container}>
      <NavLink className={classNameHandler} to={'/'}>
        <i className={'pi pi-home'} />
        <span>Главная</span>
      </NavLink>
      <NavLink className={classNameHandler} to={'/cinema'}>
        <i className={'pi pi-caret-right'} />
        <span>Фильмы</span>
      </NavLink>
      <NavLink className={classNameHandler} to={'/series'}>
        <i className={'pi pi-images'} />
        <span>Сериалы</span>
      </NavLink>
      <NavLink className={classNameHandler} to={'/media'}>
        <i className={'pi pi-globe'} />
        <span>Медиа</span>
      </NavLink>
    </div>
  );
};
