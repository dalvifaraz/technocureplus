import React from 'react';
import './products.css'

const Products = () => {
  return (
    <>
      <main className='products-page'>
        <h1>All Products</h1>
        <div className='product-list'>
          <div className='product-item'>Product 1</div>
          <div className='product-item'>Product 2</div>
          <div className='product-item'>Product 3</div>
          {/* Add more products or render dynamically */}
        </div>
      </main>
    </>
  );
};

export default Products;
