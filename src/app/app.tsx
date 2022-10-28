import { withProviders } from './providers';
import { Routing } from 'pages';
import { PageLayout } from './page-layout';
import 'primeicons/primeicons.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './app.module.scss';

function App() {
  return (
    <PageLayout>
      <Routing />
    </PageLayout>
  );
}

export default withProviders(App);
