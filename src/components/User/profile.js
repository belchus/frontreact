import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Obtener el correo electrónico del almacenamiento local
  const userEmail = localStorage.getItem('email');
  const token = localStorage.getItem('token')

  useEffect(() => {
    
    const fetchProfileData = async () => {
      try {

        const response = await axios.get('http://localhost:4000/auth/user', {
          headers: {
            Authorization: `Bearer ${token}` // Pasar el token en el encabezado
          },
          withCredentials: true 
        });
   
        setProfileData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos del perfil:', error);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div>Cargando perfil...</div>;
  }

  if (!profileData) {
    return <div>No se pudo cargar el perfil.</div>;
  }

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <div>
        <strong>Nombre: </strong> {userEmail}
      </div>
      <div>
        <strong>Email: </strong> {profileData.userEmail}
      </div>
      {/* Aquí puedes mostrar más información del perfil según lo que devuelva el backend */}
    </div>
  );
};

export default Profile;
