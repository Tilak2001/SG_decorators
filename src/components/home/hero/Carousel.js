import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import images
import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';



const Carousel = () => {
  return (
    <div className="carousel-container" style={{ width: '100vw', height: '80vh', overflow: 'hidden' }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={img1}
            alt="Slide 1"
            style={{
              width: '100vw',
              height: '75vh',
              objectFit: 'cover', // Ensures image covers the whole slide area without stretching
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt="Slide 2"
            style={{
              width: '100vw',
              height: '75vh',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Slide 3" style={{ width: '100vw', height: '75vh', objectFit: 'cover', }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
