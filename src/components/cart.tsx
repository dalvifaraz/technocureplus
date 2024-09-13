import React from 'react';
import './cart.css'

const Cart = () => {
  return (
    <>
      <main className='cart-page'>
        <h1>Your Cart</h1>
        <div className='cart-list'>
          <div className='cart-item'>
            <p>Product 1</p>
            <p>Quantity: 1</p>
            <p>Price: $100</p>
          </div>
          <div className='cart-item'>
            <p>Product 2</p>
            <p>Quantity: 2</p>
            <p>Price: $200</p>
          </div>
          {/* Render more cart items or dynamically from state */}
        </div>
        <div className='cart-summary'>
          <h2>Total: $300</h2>
          <button>Proceed to Checkout</button>
        </div>
      </main>
    </>
  );
};

export default Cart;
