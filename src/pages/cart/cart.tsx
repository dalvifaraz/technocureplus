import { useState } from 'react';
import { useCart } from '../../context';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import PlaceOrderModal from '../../components/order-modal/order-modal';

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Total Price Calculation
  const totalPrice = cart.reduce((acc, item) => acc + parseInt(item.price) * item.quantity, 0);

  const handlePlaceOrder = () => {
    setIsModalOpen(true);
  }

  return (
    <div className="cart-container">
      <PlaceOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cart={cart}
        clearCart={clearCart}
      />
      {/* Cart Items Section */}
      <div className="cart-items">
        {cart.length ? cart.map((product) => (
          <div className="cart-item" key={product.id}>
            <img src={product.image} alt={product.name} className="cart-item__image" />
            <div className="cart-item__details">
              <h4>{product.name}</h4>
              <p>Seller: {`Seller info`}</p>
              <div className="cart-item__price">₹{product.price}</div>
              <div className="cart-item__actions">
                {/* <button onClick={() => handleDecrease(product.id)}>-</button> */}
                <button onClick={() => updateQuantity(product.id, false)}>-</button>
                <span>{product.quantity}</span>
                {/* <button onClick={() => handleIncrease(product.id)}>+</button> */}
                <button onClick={() => updateQuantity(product.id, true)}>+</button>
                <button style={{ width: '80px'}} className="cart-item__remove" onClick={() => removeFromCart(product.id)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        )): (
          <>
          <p>Your cart is empty</p>
          <button onClick={() => navigate('/products')}>Shop Now</button>
          </>
        )}
        {cart.length > 0 && (
          <button className="clear-cart-button" onClick={clearCart}>
            Clear Cart
          </button>
        )}
      </div>

      {/* Price Summary Section */}
      {cart.length > 0 && <div className="cart-summary">
        <h4>Price Details</h4>
        <div className="cart-summary__price-details">
          <span>Price ({cart.length} items)</span>
          <span>₹ {totalPrice}</span>
        </div>
        {/* <div className="cart-summary__price-details">
          <span>Discount</span>
          <span>-₹736</span>
        </div> */}
        <div className="cart-summary__price-details">
          <span>Platform Fee</span>
          <span>₹3</span>
        </div>
        <div className="cart-summary__price-details">
          <span>Delivery Charges</span>
          <span>₹62</span>
        </div>
        <div className="cart-summary__total">
          Total Amount
          <span>₹ {totalPrice + 3 + 62}</span>
        </div>
        <button className="place-order-button" onClick={handlePlaceOrder}>Place Order</button>
      </div>}
    </div>
  );
};

export default Cart;
