import React , { useContext }from 'react'
import { ShopContext } from '../context/ShopContext'


const CartItem = ({menulist}) => {
    const { cartItems, addToCart, removeFromCart , updateCartItemCount} = useContext(ShopContext)
    const id = menulist.id;
    
  return (
        <div className="cartItem">
            <img src={menulist.image}/>
            <div className="description">
                <p>
                    <b>{menulist.name}</b>
                </p>
                <p>${menulist.price}</p>
                <div className="countHandler">
                    <button onClick={()=>removeFromCart(id)}>-</button>
                     <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value),id) }/>
                    <button onClick={()=>addToCart(id)}>+</button>
                </div>
            </div>
            
        </div>
  )
}

export default CartItem