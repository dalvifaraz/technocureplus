import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Cart,
  Error as ErrorPage,
  Home,
  Products,
  ProductsDetails,
  Layout,
  ContactUs,
  PrivacyPolicy,
  TermsOfService
} from './pages';
import { CartProvider } from './context';

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
        path: '/privacy',
        element: <PrivacyPolicy />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/terms',
        element: <TermsOfService />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/products',
        element: <Products />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/product-details/:id',
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
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </div>
  );
}

export default App;
