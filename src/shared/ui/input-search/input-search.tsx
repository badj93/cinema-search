import { Input } from '../input';
import styles from './input-search.module.scss';

export const InputSearch = () => {
  return (
    <Input className={styles.container} placeholder={'Films, series, actors'} />
  );
};
