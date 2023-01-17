import { useRouter } from "next/router";
import { cardImages } from "../../components/constants/PizzaCardTwoData";
import Heading from "../../components/core/Heading/Heading";

type Props = {};

const ProductDetails = (props: Props) => {
  const { asPath } = useRouter();

  console.log(asPath.split("/")[2]);
  const id = asPath.split("/")[2];

  const product = cardImages.find((item) => item.id === +id);

  console.log(product);

  return (
    <>
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <Heading>Best Place To choose your Clothes</Heading>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.
              </p>

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-96 h-1/2 rounded-2xl"
              src={product?.imgSrc}
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
