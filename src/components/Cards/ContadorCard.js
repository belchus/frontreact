import React, { useState } from 'react';


const Contador = ({ initial, stock, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const [showButtons, setShowButtons] = useState(false);

  const sumar = () => {
    setContador(contador + 1);   
  };

  const restar = () =>{
    setContador(contador - 1);
  };

  const handleAddToCart = () => {
    setShowButtons(true); // Mostrar botones después de agregar al carrito
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
