import React, { useState } from 'react';
import './Contador.css';

const Contador = ({ initial, stock, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const [showButtons, setShowButtons] = useState(false);

  const sumar = () => {
    if (contador < stock) { // Verificar si el contador no ha alcanzado el stock máximo
      setContador(contador + 1);
      if (!showButtons) { // Si aún no se han mostrado los botones, mostrarlos
        setShowButtons(true);
      }
    }
  };

  const restar = () =>{
    if (contador > 1) { // Verificar si el contador es mayor que 1 para evitar valores negativos
      setContador(contador - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(contador); // Llamar a la función onAdd con la cantidad seleccionada
  };

  return (
    <div className='Contador'>
      {showButtons && (
        <>
          <button disabled={contador <= 1} onClick={restar}>-</button>
          <span>{contador}</span>
          <button disabled={contador >= stock} onClick={sumar}>+</button>
        </>
      )}
      <div>
        {!showButtons && (
          <button disabled={stock <= 0} onClick={handleAddToCart}>Agregar al carrito</button>
        )}
      </div>
    </div>
  );
};

export default Contador;
