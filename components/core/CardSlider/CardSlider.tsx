// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import PizzaCardTwo from "../../app/PizzaCardTwo/PizzaCardTwo";
import { cardImages } from "../../constants/PizzaCardTwoData";
import Heading from "../Heading/Heading";
type Props = {};

const CardSlider = ({ children }: any) => {
  return (
    <>
      <Heading>Our Exclusive Pizzas</Heading>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-12  "
      >
        {cardImages.map((cardImage) => (
          <SwiperSlide key={cardImage.id}>
            <PizzaCardTwo imgSrc={cardImage.imgSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardSlider;
