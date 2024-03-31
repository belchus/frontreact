import React ,{useState , useContext} from "react";
 const CartContext = React.createContext([]);
 export const useCartContext=()=>useContext(CartContext);


 const CartProvider = ({children}) =>{

const[Cart,setCart]=useState([])

const duplicado =(id) => Cart.find(item=>item.id ===id) ? true:false;

const clearCart =()=> setCart([]);

const totalPrice =()=>{
    return Cart.reduce((precio,act)=> precio+ act.cantidad*act.precio,0);
}

const totalProducts =()=> Cart.reduce((acumulador,productoActual)=>acumulador +productoActual.cantidad,0);

const removeProduct =(id) => setCart(Cart.filter(item=>item.id !== id));

const addProduct=(item,cantidad)=>{

    if(duplicado(item.id)){
    setCart(Cart.map(item=>{
        return item.id ===item.id?{...item,cantidad: item.cantidad +cantidad}:item
    }));


  }else{
    setCart([...Cart,{...item,cantidad}])

}

}

console.log("carrito:",Cart);


    return(
        <CartContext.Provider value={{
            removeProduct,
            duplicado,
            clearCart,
            addProduct,
            totalPrice,
            totalProducts,
            Cart
        }}>
            {children}
            </CartContext.Provider>
   )
}
export default CartProvider