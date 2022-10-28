import { Poster } from 'features/poster';
import styles from './main.module.scss';

export const Main = () => {
  return (
    <div className={styles.container}>
      <Poster />
    </div>
  );
};
