import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import axios from "axios";

const Cart = () => {
    const { Cart, totalPrice, setCart } = useCartContext();

    useEffect(() => {
        guardarCarritoEnBackend(Cart);
    }, [Cart]);

    const guardarCarritoEnBackend = async (cartData) => {
        try {
            // Obtener el token de autorización del localStorage
            const token = localStorage.getItem('token');
    
            // Verificar si el token existe
            if (!token) {
                console.error("Token de autorización no encontrado en el localStorage");
                return;
            }
    
            // Enviar la solicitud POST al backend con el token en el encabezado
            await axios.post(
                "http://localhost:4000/cart/agregar-al-carrito", 
                { cart: cartData },
                console.log(cartData),
                { 
                    headers: { 
                        Authorization: `Bearer ${token}` 
                    } 
                }
            );
    
            console.log("Carrito guardado en el backend exitosamente");
        } catch (error) {
            console.error("Error al guardar el carrito en el backend:", error);
        }
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    if (Cart.length === 0) {
        return (
            <>
                <p>El carrito está vacío</p>
                <Link to="/"><button>Ir a La tienda</button></Link>
            </>
        );
    }

    return (
        <>
            {Cart.map(item => <CartItem key={item.id} item={item} />)}
            <p>Total: {totalPrice()}</p>
            <button onClick={clearCart}>Limpiar Carrito</button>
            <Link to="/Checkout"><button>Ir a pagar</button></Link>
        </>
    );
};

export default Cart;
