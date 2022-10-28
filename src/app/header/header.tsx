import { Link } from 'react-router-dom';
import { Logo, InputSearch, Button } from 'shared/ui';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link to={'/'}>
          <Logo />
        </Link>
        <InputSearch />
        <div className={styles.contentRight}>
          <Link to={'/favorite'}>
            <i
              className={`pi pi-bookmark-fill ${styles.contentRightFavorite}`}
            />
          </Link>
          <Link to={'/auth'}>
            <Button title={'Log in'} />
          </Link>
        </div>
      </div>
    </header>
  );
};
