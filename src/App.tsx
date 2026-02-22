import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { ClientPreviewPage } from './components/ClientPreviewPage';
import { ClientNotFoundPage } from './components/ClientNotFoundPage';
import { getClientProjectById } from './data/clientProjects';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Simple hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Check if this is a client preview route
  const isClientRoute = currentPage.startsWith('client/');
  const clientId = isClientRoute ? currentPage.slice('client/'.length) : null;
  const clientProject = clientId ? getClientProjectById(clientId) : null;

  const renderPage = () => {
    if (isClientRoute) {
      if (clientProject) {
        return <ClientPreviewPage project={clientProject} />;
      }
      return <ClientNotFoundPage />;
    }

    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {!isClientRoute && <Navigation isTransparent={currentPage === 'home'} />}
      <main className="flex-grow">
        {renderPage()}
      </main>
      {!isClientRoute && <Footer />}
    </div>
  );
}
