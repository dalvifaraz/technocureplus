// ProductList.tsx
import React from 'react';
import './products-list.css';
import { ProductType } from '../../types/common';
import ProductCard from '../product-card/product-card';
import { useNavigate } from 'react-router-dom';

interface ProductsListProps {
  productLists: ProductType[]
};

const ProductList: React.FC<ProductsListProps> = ({ productLists }) => {

  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    console.log(`Navigate to product page with ID: ${id}`);
    navigate(`/product-details/${id}`);
    // history.push(`/product/${product.id}`);
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
