import React from 'react';
import './home.css';
import { Banner, Categories } from '../../components';

const Home = () => {
  return (
    <>
      <main className='home-page'>
        <Banner />
        {/* <Services /> */}
        <Categories />
        <section className='featured-products'>
          <h2>Featured Products</h2>
          <div className='product-list'>
            {/* Add Product Cards here */}
            <div className='product-item'>Product 1</div>
            <div className='product-item'>Product 2</div>
            <div className='product-item'>Product 3</div>
            {/* Add more products */}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
