import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dark-bg text-foreground scanlines">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}