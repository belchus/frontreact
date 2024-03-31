import React, { useState, useEffect } from "react";
import axios from "axios";

function AddProd() {
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [productos, setProductos] = useState([]);
  const [productoAEliminar, setProductoAEliminar] = useState("");
  const [productoAEditar, setProductoAEditar] = useState(null);

 
  const cargarProductos = async () => {
    try {
      const response = await axios.get('http://localhost:4000/productos');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  };

 
  useEffect(() => {
    cargarProductos();
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();

   
    axios.post('http://localhost:4000/productos', { nombre, imagen, cantidad, descripcion, precio, category })
      .then(res => {
        console.log(res.data); 
       
        cargarProductos();
      })
      .catch(err => {
        console.error(err);
        setError("Error al agregar el producto");
      });
  };

  const handleDeleteProduct = (productId) => {
  
    axios.delete(`http://localhost:4000/productos/${productId}`)
      .then(res => {
        console.log(res.data);
      
        cargarProductos();
      })
      .catch(err => {
        console.error(err);
        setError("Error al eliminar el producto");
      });
  };

  const handleEditProduct = (producto) => {

    setProductoAEditar(producto);
 
    setNombre(producto.nombre);
    setImagen(producto.imagen);
    setCantidad(producto.cantidad);
    setDescripcion(producto.descripcion);
    setPrecio(producto.precio);
    setCategory(producto.category);
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    
    axios.put(`http://localhost:4000/productos/${productoAEditar.id}`, { nombre, imagen, cantidad, descripcion, precio, category })
      .then(res => {
        console.log(res.data); 
        cargarProductos();
       
        setProductoAEditar(null);
        setNombre("");
        setImagen("");
        setCantidad("");
        setDescripcion("");
        setPrecio("");
        setCategory("");
      })
      .catch(err => {
        console.error(err);
        setError("Error al editar el producto");
      });
  };

  return (
    <div>
        <h2>Agregar Producto</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleAddProduct}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="imagen">URL de la imagen:</label>
          <input
            type="text"
            id="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cantidad">Cantidad:</label>
          <input
            type="number"
            id="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="precio">Precio:</label>
          <input
            type="number"
            id="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Categoría:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
      {/* Mostrar la lista de productos */}
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            {producto.nombre} - {producto.descripcion}
            <button onClick={() => handleDeleteProduct(producto.id)}>Eliminar</button>
            <button onClick={() => handleEditProduct(producto)}>Editar</button>
          </li>
        ))}
      </ul>

      {/* Formulario de edición de producto */}
      {productoAEditar && (
        <div>
          <h2>Editar Producto</h2>
          <form onSubmit={handleUpdateProduct}>
            {/* Campos de edición */}
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
            <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
            {/* Otros campos de edición */}
            <button type="submit">Actualizar Producto</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddProd;
