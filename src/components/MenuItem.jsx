import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext"; 

function MenuItem({ id,image, name, price }) {
  const {addToCart,cartItems} = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ₹{price} <span>{<button onClick={()=>addToCart(id)}>add to cart{cartItemCount > 0 && <>({cartItemCount})</>}</button>}</span></p>   
    </div>
  );
}

export default MenuItem;
