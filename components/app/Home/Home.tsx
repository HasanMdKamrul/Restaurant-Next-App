import Image from "next/image";
import image1 from "../../../public/FoodImages/red yellow minimalist art pizza facebook cover (1).png";
import image3 from "../../../public/FoodImages/red yellow minimalist art pizza facebook cover (2).png";
import image2 from "../../../public/FoodImages/red yellow minimalist art pizza facebook cover.png";
import Slider from "../../core/Slider/Slider";
import Pizza from "../Pizza/Pizza";

type Props = {};

const HomeComponent = (props: Props) => {
  return (
    <>
      <Slider>
        <Image alt="" src={image1} className="w-full" />
        <Image alt="" src={image2} className="w-full" />
        <Image alt="" src={image3} className="w-full" />
      </Slider>

      <Pizza />
    </>
  );
};

export default HomeComponent;
