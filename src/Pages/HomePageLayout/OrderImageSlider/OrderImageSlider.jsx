import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";

import 'swiper/css';
import 'swiper/css/pagination';
import "../OrderImageSlider/OrderImageSlider.css";

import slider1 from "../../../assets/home/slide1.jpg"
import slider2 from "../../../assets/home/slide2.jpg"
import slider3 from "../../../assets/home/slide3.jpg"
import slider4 from "../../../assets/home/slide4.jpg"

const OrderImageSlider = () => {
  return (
    <section>
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"---From 11:00am to 10:00pm---"}
      ></SectionTitle>

      <div className="main_image_slider_container">
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} alt="salads"/>
            <h2 className="slider_image_title_contaienr">SALADS</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="pizzas"/>
            <h2 className="slider_image_title_contaienr">PIZZAS</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="soup"/>
            <h2 className="slider_image_title_contaienr">SOUPS</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="desserts"/>
            <h2 className="slider_image_title_contaienr">DESSERT</h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OrderImageSlider;
