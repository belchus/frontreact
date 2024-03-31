
import Contador from '../Contador/Contador';
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';




export const ItemDetail = ( {data}) =>{
    const{addProduct} =useCartContext();
const onAdd = (cantidad) => {
    addProduct(data,cantidad);
}
    return(
        <div className='back'>
            <div className='contenedorimg'>
           
        <img className="ItemDetalle" src={data.imagen} alt={data.nombre} />
        </div>
        <div className='contenedor'>
            <h2 className='datanombre'>{data.nombre}</h2>
            <div className='texto'> 
            <p>{data.descripcion}</p>
            <p >${data.precio}</p>
            <div className='contador'>
            <Contador  initial={1} stock={10} onAdd={onAdd} />
            </div>
            </div>
           

        </div>
     
      
    </div>
            
    )

};

export default ItemDetail;