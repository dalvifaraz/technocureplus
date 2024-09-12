import React from 'react';
import Header from './navigation-bar';
import { Outlet } from 'react-router-dom';
import Footer from './footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
