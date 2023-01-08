// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import PizzaCardTwo from "../../app/PizzaCardTwo/PizzaCardTwo";
import Heading from "../Heading/Heading";
interface Props {
  cardImages?: any;
  children?: any;
  heading?: string;
  slidesPerView?: number;
}

const CardSlider = ({
  children,
  cardImages,
  heading,
  slidesPerView,
}: Props) => {
  return (
    <>
      <Heading>{heading}</Heading>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={0}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-12  "
      >
        {cardImages?.map((cardImage: any) => (
          <SwiperSlide key={cardImage.id}>
            <PizzaCardTwo imgSrc={cardImage.imgSrc} />
          </SwiperSlide>
        ))}
        {!cardImages &&
          children?.map((child: any) => <SwiperSlide>{child}</SwiperSlide>)}
      </Swiper>
    </>
  );
};

export default CardSlider;
