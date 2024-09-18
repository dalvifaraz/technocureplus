import React from 'react';
import './products.css'
import { ProductsList } from '../../components';
import { ProductMockData } from '../../mock';

const Products = () => {
  return (
    <>
      <main className='products-page'>
        <h1>All Products</h1>
        <ProductsList productLists={ProductMockData.AllProductList} />
      </main>
    </>
  );
};

export default Products;
