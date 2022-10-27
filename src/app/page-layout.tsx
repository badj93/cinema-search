import { ReactNode } from 'react';

import { Header } from './header';
import { Footer } from './footer';
import styles from './page-layout.module.scss';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};
