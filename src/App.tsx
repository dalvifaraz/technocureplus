import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Cart,
  Error as ErrorPage,
  Home,
  Products,
  ProductsDetails,
  Layout,
  ContactUs
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/products',
        element: <Products />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/products-details',
        element: <ProductsDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/cart',
        element: <Cart />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
