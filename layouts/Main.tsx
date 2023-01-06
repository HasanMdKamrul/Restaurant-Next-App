import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

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
