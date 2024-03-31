import React, { useEffect, useState } from 'react';
import axiosInstance from './configs'; // Ruta al archivo de configuración de Axios

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axiosInstance.get('https://localhost:4000/auth/user')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/* Renderizar los datos */}
    </div>
  );
};

export default MyComponent;
