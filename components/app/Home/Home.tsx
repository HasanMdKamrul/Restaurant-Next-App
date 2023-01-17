import Head from "next/head";
import Image from "next/image";
import image1 from "../../../public/FoodImages/red yellow minimalist art pizza facebook cover (1).png";
import image3 from "../../../public/FoodImages/red yellow minimalist art pizza facebook cover (2).png";
import image2 from "../../../public/FoodImages/red yellow minimalist art pizza facebook cover.png";
import { cardImages } from "../../constants/PizzaCardTwoData";
import CardSlider from "../../core/CardSlider/CardSlider";
import Slider from "../../core/Slider/Slider";
import ClientReviews from "../ClientReviews/ClientReviews";
import Partners from "../Partners/Partners";
import Pizza from "../Pizza/Pizza";
import ServicesComponent from "../ServicesComponent/ServicesComponent";
import Trending from "../Trending/Trending";

type Props = {};

const HomeComponent = (props: Props) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Slider>
        <Image alt="" src={image1} className="w-full" />
        <Image alt="" src={image2} className="w-full" />
        <Image alt="" src={image3} className="w-full" />
      </Slider>
      <ServicesComponent />
      <Partners />
      <Pizza />
      <CardSlider
        slidesPerView={4}
        heading="Our Pizzas"
        cardImages={cardImages}
      />
      <CardSlider slidesPerView={1} heading="Client Reviews">
        <ClientReviews />
        <ClientReviews />
        <ClientReviews />
        <ClientReviews />
      </CardSlider>
      <Trending />

      {/* ** Happy Customers */}
    </>
  );
};

export default HomeComponent;
