import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LanguageProvider } from './i18n/LanguageContext';
import { MonoformSite } from './pages/MonoformSite';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <LanguageProvider>
          <MonoformSite />
        </LanguageProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
