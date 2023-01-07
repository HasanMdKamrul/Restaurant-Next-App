import Image from "next/image";

type Props = {};

const Brands = ({ brandImage }: any) => {
  return (
    <>
      <Image src={brandImage.imgSrc} alt="" width={150} height={150} />
    </>
  );
};

export default Brands;
