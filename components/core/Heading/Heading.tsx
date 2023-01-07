type Props = {};

const Heading = ({ children }: any) => {
  return (
    <h1 className="text-center my-5 font-extrabold text-2xl md:text-5xl ">
      {children}
    </h1>
  );
};

export default Heading;
