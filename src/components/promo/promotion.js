import React from 'react';
import "./promo.css";

const PromoBar = () => {
  return (
    <div className="promo-bar">
      <div className="promo-text">
        <span>Hoy: 50% off</span>
        <span className="repeat-text">Hoy: 50% off</span> {/* Texto repetido para la animación */}
      </div>
    </div>
  );
};

export default PromoBar;
