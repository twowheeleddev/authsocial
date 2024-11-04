// src/App.jsx
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/ScrollToTop';
import useResponsive from './hooks/useResponsive';

const App = () => {
  const { isMobile, isDesktop } = useResponsive(); // Hook to determine screen size

  return (
    <div className="overflow-y-auto">
      <ScrollToTop />

      {/* Pass screen size info to Navbar */}
      <Navbar isMobile={isMobile} isDesktop={isDesktop} />

      {/* Main content with margin-top to create space below the navbar */}
      <main className={`flex-grow overflow-y-auto`}> {/* Adjust margin based on screen size */}
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
};

export default App;
