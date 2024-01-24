import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { MenuList } from '../helpers/MenuList';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems , getTotalAmount } = useContext(ShopContext);

  const totalAmount = getTotalAmount();
  const navigate = useNavigate()

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {MenuList.map((menulist) => {
          const quantity = cartItems[menulist.id];
            if (quantity) {
            return (
              <CartItem  key={menulist.id} menulist={menulist} quantity={quantity}/>
            );
          }
          return null; 
        })}
        </div>
        {totalAmount>0?<div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/menu")}>Continue Shopping</button>
          <button> Checkout </button>
        </div>
        :<h1>Your Cart Is Empty</h1>}
      
    </div>
  );
};

export default Cart;
