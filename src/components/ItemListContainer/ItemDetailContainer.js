import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import ItemDetail from "./ItemDetail";
import './ItemListContainer.css';

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { Id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/productos/${Id}`); 
        setData(response.data);
      } catch (error) {
        console.error('Error al obtener los detalles del artículo:', error);
      }
    };

    fetchData();
  }, [Id]);

  return (
    <div>
      {Object.keys(data).length === 0 ? (
        <div>Cargando...</div>
      ) : (
        <>
          {data.id > 35 ? (
            <div>Lo siento, el accesorio que busca no existe</div>
          ) : (
            <div className="descripcion">
              <ItemDetail data={data} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
