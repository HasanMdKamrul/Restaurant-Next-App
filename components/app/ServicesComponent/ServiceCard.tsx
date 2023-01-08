import Image from "next/image";

interface Props {
  service: {
    id: number;
    title: string;
    imgSrc: string;
  };
}

const ServiceCard = ({ service }: Props) => {
  const { title, imgSrc } = service;

  return (
    <>
      <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <Image
          width={500}
          height={500}
          className="object-cover w-full h-56 transform hover:scale-110 ease-in-out duration-500 cursor-pointer "
          src={imgSrc}
          alt="avatar"
        />

        <div className="py-5 text-center">
          <h1 className="block text-2xl font-bold tracking-widest text-gray-800 dark:text-white">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
