import React from 'react';
import './home.css';
import { Banner, Categories, ProductsList } from '../../components';
import { ProductMockData } from '../../mock';

const Home = () => {
  return (
    <>
      <main className='home-page'>
        <Banner />
        {/* <Services /> */}
        <Categories />
        <h2 className='featured-products-title'>Fetured Products</h2>
        <ProductsList productLists={ProductMockData.FeaturedProductList} />
      </main>
    </>
  );
};

export default Home;
