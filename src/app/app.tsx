import { withProviders } from './providers';
import { Routing } from 'pages';
import { PageLayout } from './page-layout';
import 'primeicons/primeicons.css';
import './app.module.scss';

function App() {
  return (
    <PageLayout>
      <Routing />
    </PageLayout>
  );
}

export default withProviders(App);
