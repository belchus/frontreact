import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Cards.css';
import Contador from './ContadorCard';
import { useCartContext } from '../../context/CartContext';

function Cards({ info }) {
  const { addProduct } = useCartContext();

  // Esta función se encarga de agregar el producto al carrito
  const onAdd = (cantidad) => {
    addProduct(info, cantidad);
  };

  return (
    <div className="cardspadre">
      <div className="cards">
        <Link to={`/Item/${info.id}`} className="card-link">
          <Card.Body className="img">
            <Card.Img variant="top" src={info.imagen} className="Card" />
            <div className="agregar-carrito" onClick={() => onAdd(1)}>
              Agregar al carrito
            </div>
            <div className="desc">
              <h3>{info.nombre}</h3>
              <h3>${info.precio}</h3>
            </div>
          </Card.Body>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
