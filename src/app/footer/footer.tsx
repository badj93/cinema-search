import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentSocialNetworks}>
          <i className={`pi pi-facebook ${styles.contentSocialNetworksIcon}`} />
          <i
            className={`pi pi-instagram ${styles.contentSocialNetworksIcon}`}
          />
          <i className={`pi pi-youtube ${styles.contentSocialNetworksIcon}`} />
          <i className={`pi pi-twitter ${styles.contentSocialNetworksIcon}`} />
        </div>
        <div className={styles.contentNav}>
          <Link className={styles.contentNavLink} to={'/'}>
            Вакансии
          </Link>
          <Link className={styles.contentNavLink} to={'/'}>
            Реклама
          </Link>
          <Link className={styles.contentNavLink} to={'/'}>
            Соглашение
          </Link>
          <Link className={styles.contentNavLink} to={'/'}>
            Блог
          </Link>
          <Link className={styles.contentNavLink} to={'/'}>
            Служба поддержки
          </Link>
        </div>
        <div className={styles.contentAdditional}>Дата создания 2022 год.</div>
      </div>
    </footer>
  );
};
