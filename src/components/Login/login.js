import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './login.css'; // Importa los estilos CSS

function Login() {
  const [email, setEmail] = useState("");
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Nuevo estado para el mensaje de bienvenida
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:4000/auth/login', { email, password })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('email', email);
          localStorage.setItem('id',res.data.id); // Guarda el correo electrónico en el localStorage
          navigate('/');
          window.location.reload();
        } else {
          setMessage('Credenciales incorrectas');
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="login-container"> {/* Agrega la clase login-container */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>} {/* Muestra el mensaje de bienvenida o de error */}
      <p>No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
    </div>
  );
}

export default Login;
