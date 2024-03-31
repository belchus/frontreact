import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
    const { removeProduct } = useCartContext();

    return (
        <div className='itemCart' style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <img className="ItemDetalle" src={item.imagen} alt={item.nombre} style={{ width: '100px', marginRight: '20px' }} /> {/* Cambiado el ancho a 50px */}
            <div>
                <h2>{item.nombre}</h2>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio x Unidad: ${item.precio}</p>
                <p>Subtotal: ${item.precio * item.cantidad}</p>
                <div className="botonelimina">
                    <button onClick={() => removeProduct(item.id)}>Eliminar producto</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
