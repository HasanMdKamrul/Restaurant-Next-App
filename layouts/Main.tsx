import Footer from "../components/core/Footer/Footer";
import Navbar from "../components/core/Navbar/Navbar";

const Main = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Main;
