import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './link-card.module.scss';

interface CardPros {
  children: ReactNode;
  className?: string;
  to: string;
}

export const LinkCard = ({ children, className = '', to }: CardPros) => {
  return (
    <Link className={`${styles.container} ${className}`} to={to}>
      <div className={styles.containerContent}>{children}</div>
    </Link>
  );
};
