// ProductList.tsx
import React from 'react';
import './products-list.css';
import { products } from './products-list-mock';
import Products from '../products/products';

const ProductList: React.FC = () => {
  const handleCardClick = (id: number) => {
    console.log(`Navigate to product page with ID: ${id}`);
    // Add navigation logic here
  };

  return (
    <section className="product-list">
      {products.map((product) => (
        <Products key={product.id} product={product} onCardClick={handleCardClick} />
      ))}
    </section>
  );
};

export default ProductList;
