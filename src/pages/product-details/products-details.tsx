import React from 'react';
import { useParams } from 'react-router-dom';
import { AllProductList } from '../../mock';
import { ProductType } from '../../types';
import './products-details.css'
import { useCart } from '../../context';

const ProductDetails = () => {
  const { id = '' } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = AllProductList.find((product: ProductType) => product.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-details" style={{ alignItems: 'center' }}>
      <div style={{ display: 'flex' }}>
      <div className="product-details-header" style={{  }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        {product.discount && <p className="discount">{product.discount}</p>}
        {product.isNew && <p className="new-label">New Launch</p>}
        {product.fewLeft && <p className="few-left-label">Few Left</p>}
        {product.outOfStock && <p className="out-of-stock-label">Out of Stock</p>}
        <h2>{product.price}</h2>
        </div>
      </div>

      {/* Additional Details */}
      <div className="product-description" style={{ display: 'flex', flexDirection: 'column', paddingLeft: '25px'}}>
        <h3 style={{ alignSelf: 'flex-start' }}>Product Description:</h3>
        <p>{product.longDesc}</p>
      </div>
      </div>

      {/* Example Offers */}
      <div className="product-offers">
        <h3>Available Offers:</h3>
        <ul>
          <li>Bank Offer 10% off</li>
          <li>Special Price: Get extra 20% off</li>
          {/* Add more offers dynamically if needed */}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="add-to-cart" onClick={() => addToCart({ ...product, quantity: 1 })}>Add to Cart</button>
        <button className="buy-now">Buy Now</button>
      </div>

      {/* Delivery details */}
      <div className="delivery-info">
        <p>Delivery by {new Date().toLocaleDateString()}</p>
        <p>Free Delivery for Prime members</p>
      </div>
    </div>
  );
};

export default ProductDetails;
