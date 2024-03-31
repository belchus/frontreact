import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner2 from '../../assets/img/banner2.png';
import banner from '../../assets/img/banner.png';
import './home.css'

const CarouselComponent = () => {
  return (
  
 <Carousel autoPlay interval={3000} infiniteLoop>
      <div>
        <img src={banner2} alt="Image 1" />
      </div>
      <div>
        <img src={banner} alt="Image 2" />
      </div>
  
    </Carousel>
  );
};

export default CarouselComponent;
