import Marquee from "react-fast-marquee";
import { brandsImages } from "../../constants/BrandsImages";
import Brands from "../../core/Brands/Brands";
import Heading from "../../core/Heading/Heading";

type Props = {};

const Partners = (props: Props) => {
  return (
    <>
      <Heading>Our Partners</Heading>

      <Marquee gradient={false}>
        <div className="flex gap-12 justify-center items-center">
          {brandsImages.map((brandImage) => (
            <Brands key={brandImage.id} brandImage={brandImage} />
          ))}
        </div>
      </Marquee>
    </>
  );
};

export default Partners;
