import Home from './pages/home/Home';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Users from './pages/users/Users';

const queryClient = new QueryClient();
function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/users',
          element: <Users />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
