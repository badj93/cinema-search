import { Link } from 'react-router-dom';
import { Logo, InputSearch, Button } from 'shared/ui';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <Link to={'/'}>
        <Logo />
      </Link>
      <InputSearch />
      <div className={styles.containerRight}>
        <Link to={'/favorite'}>
          <i
            className={`pi pi-bookmark-fill ${styles.containerRightFavorite}`}
          />
        </Link>
        <Link to={'/auth'}>
          <Button title={'Log in'} />
        </Link>
      </div>
    </div>
  );
};
