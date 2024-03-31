import "../Navbar/components.css"
import React from "react";
import { useCartContext } from "../../context/CartContext";
export const CartWidget = () => {
  const{totalProducts }=useCartContext();

  return (
    <>
    <div> 
    <img className="Cart" src="https://cdn.icon-icons.com/icons2/933/PNG/512/shopping-cart_icon-icons.com_72552.png" />
    </div>
    <span>{totalProducts()	|| "" }</span>
    
    </>
    )
};

export default CartWidget
