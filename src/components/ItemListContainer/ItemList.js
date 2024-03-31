import Cards from "../Cards/Cards";

const ItemList = ( {Productos = []}) => {
    
    return (
       
        Productos.map(items => <Cards key={items.id} info={items}/>)
        
       
);}


export default ItemList;