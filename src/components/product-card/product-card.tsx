import React, { useEffect, useRef, useState } from 'react';
import './product-card.css';
import { FaCircleChevronRight } from 'react-icons/fa6';
import { ProductType } from '../../types/common';

interface ProductCardProps {
  product: ProductType;
  onCardClick: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onCardClick }) => {
  const [isChevroletDropdownOpen, setIsChevroletDropdownOpen] = useState(false);
  const chevroletIconRef = useRef<HTMLDivElement>(null); // Ref for the Chevrolet icon
  const chevroletDropdownRef = useRef<HTMLDivElement>(null); // Ref for the popup

  // Function to toggle popup when the Chevrolet icon is clicked
  const handleChevroletClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event bubbling to document
    setIsChevroletDropdownOpen((prev) => !prev); // Toggle the popup visibility
  };

  useEffect(() => {
    // Function to handle clicks anywhere in the document
    const handleDocumentClick = (event: MouseEvent) => {
      // Check if click is outside popup and Chevrolet icon
      if (
        chevroletDropdownRef.current &&
        !chevroletDropdownRef.current.contains(event.target as Node) &&
        chevroletIconRef.current &&
        !chevroletIconRef.current.contains(event.target as Node)
      ) {
        setIsChevroletDropdownOpen(false); // Close popup if clicked outside
      }
    };

    // Add the event listener when the popup is open
    document.addEventListener('mousedown', handleDocumentClick);

    // Clean up the event listener when the component is unmounted or popup is closed
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [isChevroletDropdownOpen]);

  return (
    <div
      className={`product-card ${product.outOfStock ? 'out-of-stock' : ''}`}
      onClick={() => !isChevroletDropdownOpen && onCardClick(product.id)}
    >
      <img src={product.image} alt={product.name} className='product-image' />
      <div className='product-info'>
        <h3>{product.name}</h3>
        <p className='product-price'>₹ {product.price}</p>
        {product.discount && (
          <p className='product-discount'>{product.discount}</p>
        )}
        {product.isNew && <span className='badge new'>Newly Launched</span>}
        {product.fewLeft && <span className='badge few-left'>Few Left</span>}
        {product.outOfStock && (
          <span className='badge out-of-stock'>Out of Stock</span>
        )}
        {!product.outOfStock && !product.fewLeft && !product.isNew && (
          <span className='badge order-now'>Order Now</span>
        )}

        {product?.longDesc && (
          <p className='product-description'>
            {product?.longDesc.length > 100
              ? `${product?.longDesc.substring(0, 100)}...`
              : product?.longDesc}
          </p>
        )}
      </div>

      <div
        ref={chevroletIconRef}
        className='chevron-icon'
        onClick={handleChevroletClick}
      >
        <FaCircleChevronRight size={25} />
      </div>

      {isChevroletDropdownOpen && (
        <div ref={chevroletDropdownRef} className='chevron-dropdown'>
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

export default ProductCard;
