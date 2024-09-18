import React from 'react';
import './home.css';
import { Banner, Categories, ProductsList } from '../../components';

const Home = () => {
  return (
    <>
      <main className='home-page'>
        <Banner />
        {/* <Services /> */}
        <Categories />
        <ProductsList />
      </main>
    </>
  );
};

export default Home;
