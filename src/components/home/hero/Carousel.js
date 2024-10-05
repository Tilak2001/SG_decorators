import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import images
import img1 from '../../../assets/images/img1.jpeg';
import img2 from '../../../assets/images/img2.jpeg';
import img3 from '../../../assets/images/img3.jpeg';

const Carousel = () => {
  return (
    <div className="carousel-container">
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
            className="carousel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt="Slide 2"
            className="carousel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            alt="Slide 3"
            className="carousel-image"
          />
        </SwiperSlide>
      </Swiper>

      {/* Add media queries via inline styles or external CSS */}
      <style jsx>{`
        .carousel-container {
          width: 100vw;
          height: 80vh;
          overflow: hidden;
        }
        .carousel-image {
          width: 100vw;
          height: 75vh;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          /* For tablets and smaller devices */
          .carousel-container {
            height: 60vh;
          }
          .carousel-image {
            height: 60vh;
          }
        }

        @media (max-width: 480px) {
          /* For mobile devices, show full image */
          .carousel-container {
            height: auto;
          }
          .carousel-image {
            height: auto;
            object-fit: contain; /* Show the full image */
            max-height: 50vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;
