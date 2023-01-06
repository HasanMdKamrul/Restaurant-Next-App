// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import image1 from "../../public/FoodImages/red yellow minimalist art pizza facebook cover (1).png";
import image3 from "../../public/FoodImages/red yellow minimalist art pizza facebook cover (2).png";
import image2 from "../../public/FoodImages/red yellow minimalist art pizza facebook cover.png";

const sliderImages = [image1, image2, image3];

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image className="w-full object-contain" src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
