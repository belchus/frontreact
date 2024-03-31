import "./components.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
import User from "../User/User";
import React, { useState } from "react";
import Cart from "../Cart/Cart";

const Navbar = () => {

    const [isCartOpen, setIsCartOpen] = useState(false);
  
    const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
    };
  
    return(
    <div className="navbar"> 
<ul>
    <li>
    <Link to={"/"}>Home</Link>
    </li>
    <li className="navbar">
    <a href={"/ItemListContainer/"}>Productos</a>
    <ul className="submenu">
    <li>
    <Link to={"/ItemListContainer/cadenita"}>Cadenitas </Link><ul className="submenu2">
      <li>
        <Link to={"/ItemListContainer/reloj"}>Acero blanco</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Acero quirurgico</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Acero dorado</Link>
      </li>
    </ul>
    </li>
    <li>
    <Link to={"/ItemListContainer/aro"}>Aros </Link><ul className="submenu2">
      <li>
        <Link to={"/ItemListContainer/reloj"}>Acero blanco</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Acero quirurgico</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Acero dorado</Link>
      </li>
    </ul>
    </li>
    <li>
    <Link to={"/ItemListContainer/pulsera"}>Pulseras </Link><ul className="submenu2">
      <li>
        <Link to={"/ItemListContainer/reloj"}>Acero blanco</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Acero quirurgico</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Acero dorado</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Esclavas</Link>
      </li>
    </ul>
    </li>
    <li>
    <Link to={"/ItemListContainer/pulsera"}>Tobilleras</Link>
    </li>
    <li>
    <Link to={"/ItemListContainer/pulsera"}>Lenceria</Link>
    </li>
    <li>
    <Link to={"/ItemListContainer/pulsera"}>Mas accesorios</Link>
    </li>
    <li>
    <Link to={"/ItemListContainer/pulsera"}>Hombres</Link> <ul className="submenu2">
      <li>
        <Link to={"/ItemListContainer/reloj"}>Relojes</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Gorras</Link>
      </li>
      <li>
        <Link to={"/ItemListContainer/gorra"}>Mas accesorios</Link>
      </li>
    </ul>
    </li>
    </ul>
    </li>
    <li className="Cart" onClick={toggleCart}>
          <CartWidget />
          {isCartOpen && (
            <div className="cart-dropdown">
              {  <Cart />}
             
            </div>
          )}
        </li>
        <li className="Ca">
          <User/>
        </li>
      </ul>
    </div>
  );
};

export default Navbar
