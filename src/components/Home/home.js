import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link para manejar la navegación
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos CSS del carrusel
import Header from '../Header/header';
import image1 from '../../assets/img/pulsera.jpeg';
import image2 from '../../assets/img/reloj.jpeg';
import image3 from '../../assets/img/tobillera.jpeg';
import image4 from '../../assets/img/cadenita.jpeg';
import image5 from '../../assets/img/cadena2.jpeg';
import image6 from '../../assets/img/aros.jpeg';
import image7 from '../../assets/img/banner3.jpg';
import './home.css' // Archivo CSS para estilos adicionales
import CarouselComponent from './carrousel';
const Home = () => {
  return (
    <div className='casa'>
      <Header/>
      <div className='carousel-container'>
        <CarouselComponent />
      </div>
      <div className="image-container">
        <Link to="/ruta-de-destino1" className="image-link">
          <img src={image1} alt="Image 1" className="image" />
          <div className="text">Pulseras</div>
        </Link>
        <Link to="/ruta-de-destino2" className="image-link">
          <img src={image2} alt="Image 2" className="image" />
          <div className="text">Relojes</div>
        </Link>
        <Link to="/ruta-de-destino3" className="image-link">
          <img src={image3} alt="Image 3" className="image" />
          <div className="text">Tobilleras</div>
        </Link>
        <Link to="/ruta-de-destino4" className="image-link">
          <img src={image4} alt="Image 4" className="image" />
          <div className="text">Collares</div>
        </Link>
        <Link to="/ruta-de-destino5" className="image-link">
          <img src={image5} alt="Image 5" className="image" />
          <div className="text">Cadenitas</div>
        </Link>
        <Link to="/ruta-de-destino6" className="image-link">
          <img src={image6} alt="Image 6" className="image" />
          <div className="text">Aros</div>
        </Link>
      </div>
      <div>
      <div>
    
      </div>
      </div>
    </div>
  );
};

export default Home;

