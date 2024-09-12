import React from 'react';

const Home = () => {
  return (
    <>
      <main className='home-page'>
        <section className='hero-banner'>
          <h1>Welcome to MyShop!</h1>
          <p>Your one-stop shop for all products and services.</p>
          <button>Shop Now</button>
        </section>

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
