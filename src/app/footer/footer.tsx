import { Link } from 'shared/ui';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerSocialNetworks}>
        <i className={`pi pi-facebook ${styles.containerSocialNetworksIcon}`} />
        <i
          className={`pi pi-instagram ${styles.containerSocialNetworksIcon}`}
        />
        <i className={`pi pi-youtube ${styles.containerSocialNetworksIcon}`} />
        <i className={`pi pi-twitter ${styles.containerSocialNetworksIcon}`} />
      </div>
      <div className={styles.containerNav}>
        <Link className={styles.containerNavLink} to={'/'}>
          Вакансии
        </Link>
        <Link className={styles.containerNavLink} to={'/'}>
          Реклама
        </Link>
        <Link className={styles.containerNavLink} to={'/'}>
          Соглашение
        </Link>
        <Link className={styles.containerNavLink} to={'/'}>
          Блог
        </Link>
        <Link className={styles.containerNavLink} to={'/'}>
          Служба поддержки
        </Link>
      </div>
      <div className={styles.containerAdditional}>Дата создания 2022 год.</div>
    </div>
  );
};
