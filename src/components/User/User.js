import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
  const userEmail = localStorage.getItem("email");
  const navigate = useNavigate(); // Importar el hook useNavigate
  const handleLogout = () => {
    // Limpiar datos de la sesión en el localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    // Redirigir al usuario a la página de inicio de sesión

    navigate('/login');// Recargar la página para reflejar el cambio
  };

  return (
    <div className="user-container">
      {token ? ( // Si el usuario está autenticado
        <>
          <span className="user-email" onClick={() => setIsOpen(!isOpen)}>
            {userEmail}
          </span>
          {isOpen && (
            <div className="dropdown-menu">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </>
      ) : ( // Si el usuario no está autenticado
        <Link to="/login">
          <img
            className="Cart"
            src="https://cdn.icon-icons.com/icons2/1248/PNG/256/user_84308.png"
            alt="User"
          />
        </Link>
      )}
    </div>
  );
};

export default User;
