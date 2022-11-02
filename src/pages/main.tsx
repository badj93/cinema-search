import { Poster } from 'features/poster';
import { Popular } from 'features/popular';
import { Navigation } from 'shared/ui';
import styles from './main.module.scss';

export const Main = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.content}>
        <Poster />
        <Popular />
      </div>
    </div>
  );
};
