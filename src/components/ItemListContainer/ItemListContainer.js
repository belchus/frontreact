import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import axios from 'axios';

const ItemListContainer = ({ greeting }) => {
  const { DetalleId } = useParams();
  const [orden, setOrden] = useState('default');
  const [busqueda, setBusqueda] = useState('');
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        let url = 'http://localhost:4000/productos';
        if (DetalleId) {
          url += `/categoria/${DetalleId}`;
        }
        const response = await axios.get(url);
        console.log('Datos recibidos del backend:', response.data);
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    obtenerProductos();
  }, [DetalleId]);


  const handleOrdenChange = (event) => {
    setOrden(event.target.value);
  };


  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const filtrarProductos = () => {
    return productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()));
  };


  const ordenarProductos = (productos) => {
    switch (orden) {
      case 'precio-mayor-menor':
        return productos.slice().sort((a, b) => b.precio - a.precio);
      case 'precio-menor-mayor':
        return productos.slice().sort((a, b) => a.precio - b.precio);
      case 'a-z':
        return productos.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
      case 'z-a':
        return productos.slice().sort((a, b) => b.nombre.localeCompare(a.nombre));
      default:
        return productos;
    }
  };

  return (
    <div className="containtercn">
      <h1 className="tituloinicial">
        Todos los Productos
      </h1>
      <div className="orden-busqueda-container">
        {/* Botón desplegable para seleccionar tipo de orden */}
        <select value={orden} onChange={handleOrdenChange}>
          <option value="default">Ordenar por...</option>
          <option value="precio-mayor-menor">Precio (mayor a menor)</option>
          <option value="precio-menor-mayor">Precio (menor a mayor)</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
        {/* Input para búsqueda por nombre */}
        <input type="text" value={busqueda} onChange={handleBusquedaChange} placeholder="Buscar por nombre..." />
      </div>
      <div className="contenedorpadre">
        <ItemList Productos={ordenarProductos(filtrarProductos(productos))} />
      </div>
    </div>
  );
};

export default ItemListContainer;
