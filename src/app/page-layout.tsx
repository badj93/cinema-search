import { ReactNode, Suspense } from 'react';

import { Navigation } from 'shared/ui';
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
      <div className={styles.main}>
        <Navigation />
        <Suspense fallback={'Loading...'}>
          <div className={styles.mainContent}>{children}</div>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};
