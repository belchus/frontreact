import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Header from './components/Header/header';
import Cart from './components/Cart/Cart.js';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import{ BrowserRouter,Routes,Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout.js';
import Contact from './components/Contact/Contact';
import Home from './components/Home/home.js';
import Login from './components/Login/login.js';
import Register from './components/Login/register.js';
import AddProd from './components/Creador/productos.js';
import ProductForm from './components/Creador/productos.js';
import Profile from './components/User/profile.js';
import MyComponent from './firebase/ejemplo.js';
import Footer from './components/Footer/footer.js';
import PromoBar from './components/promo/promotion.js';
function App() {
  return (
    <div className="App">
        
      <BrowserRouter>

 
      <CartProvider>
      <Navbar/>
    <Routes>
    <Route path="/datos" component={MyComponent} />
    <Route path='/' element={<Home/>}/>
      <Route path='/ItemListContainer/' element={<ItemListContainer/>}/>
      <Route path="/ItemListContainer/:DetalleId" element={<ItemListContainer />} />
      <Route path='/Item/:Id' element={<ItemDetailContainer/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path="/Checkout" element={<Checkout/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/addprod" element={<AddProd/>}/>
      <Route path="/profile" element={<Profile/>}/>
     
     
    </Routes>
   
    </CartProvider>
  </BrowserRouter>
  <Footer />
    </div>
  );
}

export default App;
