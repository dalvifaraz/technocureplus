// ProductList.tsx
import React from 'react';
import './products-list.css';
import { ProductType } from '../../types/common';
import ProductCard from '../product-card/product-card';

interface ProductsListProps {
  productLists: ProductType[]
};

const ProductList: React.FC<ProductsListProps> = ({ productLists }) => {
  const handleCardClick = (id: number) => {
    console.log(`Navigate to product page with ID: ${id}`);
    // Add navigation logic here
  };

  return (
    <section className="product-list">
      {productLists && productLists.map((product) => (
        <ProductCard key={product.id} product={product} onCardClick={handleCardClick} />
      ))}
    </section>
  );
};

export default ProductList;
