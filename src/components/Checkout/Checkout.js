import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import CartItem from "../Cart/CartItem";
import axios from "axios";

//ARREGLAR ACA QUE TENGA PRIMERO LA GENERACION DE LA ORDEN MEDIANTE FORMULARIO PIDIENDO LOS DATOS Y DESPUES  SELECCIONE EL METODO DE PAGO

const FuncionCompra = async (items, setPaymentCompleted) => {
    try {
        const result = await axios.post("http://localhost:4000/Mercado_pago", items);
        // Verificar que se recibió el initPoint correctamente
        console.log(result.data.initPoint);
        // Redirigir a la URL proporcionada por initPoint
        window.location.href = result.data.initPoint;
    } catch (error) {
        console.error(error);
        // Manejar cualquier error que ocurra durante la solicitud
    } finally {
        setPaymentCompleted(true); // Marcar el pago como completado después de la solicitud, independientemente del resultado
    }
};

const Checkout = () => {
    const { Cart, totalPrice } = useCartContext();
    const [isPaymentCompleted, setPaymentCompleted] = useState(false); // Estado para controlar si el pago está completado

    const order = {
        items: Cart.map(item => ({
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad: item.cantidad
        })),
        total: totalPrice(),
    }

   
    // Si el pago está completado, redirigir a la página de confirmación de pago
    
    return (
        <>
            {Cart.map(item => <CartItem key={item.id} item={item} />)}
            <p>Total: {totalPrice()}</p>
            <button >Terminar Compra</button>
        </>
    )
}

export default Checkout;
