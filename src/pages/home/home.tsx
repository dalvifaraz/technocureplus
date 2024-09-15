import React from 'react';
import './home.css';
import { Banner } from '../../components';

const Home = () => {
  return (
    <>
      <main className='home-page'>
        <Banner />
        <section className='categories'>
          <h2>Explore Categories</h2>
          <div className='category-list'>
            {/* Add Category Cards here */}
            <div className='category-item'>Electronics</div>
            <div className='category-item'>Fashion</div>
            <div className='category-item'>Home Appliances</div>
            {/* Add more categories */}
          </div>
        </section>

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
