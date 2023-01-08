interface Props {
  imgSrc: string;
}

const PizzaCardTwo = ({ imgSrc }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center relative justify-center w-full max-w-sm mx-auto transform transition-all ease-in-out hover:scale-105 ">
        <div
          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          style={{ backgroundImage: `url(${imgSrc})` }}
        ></div>

        <div className="w-56 -mt-10 overflow-hidden  rounded-lg shadow-lg md:w-full bg-transparent flex justify-center">
          <button className="btn btn-active absolute top-[50%] btn-ghost tracking-wide text-white btn-sm">
            View Details
          </button>
          <h1 className="absolute top-[80%]">
            <span className="text-white tracking-wider font-bold">Pizza</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default PizzaCardTwo;
