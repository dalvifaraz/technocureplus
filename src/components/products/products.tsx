import React, { useState } from 'react';
import './products.css';
import { Product } from '../products-list/products-list-mock';
import { FaCircleChevronRight } from "react-icons/fa6";

interface ProductsProps {
  product: Product;
  onCardClick: (id: number) => void;
}

const Products: React.FC<ProductsProps> = ({ product, onCardClick }) => {
  const [isChevronOpen, setIsChevronOpen] = useState(false);

  const toggleChevron = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent card click when clicking on the chevron
    setIsChevronOpen(!isChevronOpen);
  };

  return (
    <div className={`product-card ${product.outOfStock ? 'out-of-stock' : ''}`} onClick={() => !isChevronOpen && onCardClick(product.id)}>
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">{product.price}</p>
        {product.discount && <p className="product-discount">{product.discount}</p>}
        {product.isNew && <span className="badge new">Newly Launched</span>}
        {product.fewLeft && <span className="badge few-left">Few Left</span>}
        {product.outOfStock && <span className="badge out-of-stock">Out of Stock</span>}
        {!product.outOfStock && !product.fewLeft && !product.isNew && <span className="badge order-now">Order Now</span>}

        {product?.longDesc && <p className="product-description">
          {product?.longDesc.length > 100 ? `${product?.longDesc.substring(0, 100)}...` : product?.longDesc}
        </p>}
      </div>

      <div className="chevron-icon" onClick={toggleChevron}>
      <FaCircleChevronRight size={25} />
      </div>

      {isChevronOpen && (
        <div className="chevron-dropdown">
            <li>Add to Cart</li>
            <li>Know More</li>
            <li>Wishlist</li>
            <li>Notify When Available</li>
            <li>Compare</li>
        </div>
      )}
    </div>
  );
};

export default Products;
