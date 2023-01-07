import Image from "next/image";
import styles from "../../../styles/PizzaCard.module.css";
interface Props {
  imgSrc: string;
}

const PizzaCardTwo = ({ imgSrc }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.cardtwo}
          data-tilt
          data-tilt-glare
          data-tilt-max-glare="0.5"
          data-tilt-scale="1.1"
        >
          <Image
            className="hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer w-full h-full object-cover rounded-3xl"
            width={400}
            height={400}
            alt=""
            src={imgSrc}
          />

          <div className={styles.info}>
            <h1>Pizza</h1>
            <button
              type="button"
              className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaCardTwo;
