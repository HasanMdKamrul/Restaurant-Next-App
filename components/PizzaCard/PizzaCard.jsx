import Image from "next/image";
import styles from "../../styles/Card.module.css";
const PizzaCard = ({ card }) => {
  return (
    <div className={`${styles.card} bg-green-600`}>
      <div className={styles.card_image}>
        <Image src={card?.image} />{" "}
      </div>
      <div className={styles.card_title}>
        <p className="text-gray-200 ">{card.title}</p>
        <small className="text-gray-200">${card.price}</small>
      </div>
    </div>
  );
};

export default PizzaCard;
