import Image from "next/image";
import {
  MdAppBlocking,
  MdContactPage,
  MdEvent,
  MdFoodBank,
  MdHome,
  MdPhone,
  MdProductionQuantityLimits,
} from "react-icons/md";
import burgerIcon from "../../public/img/FoodIcons/Yellow Cute Cartoon Pizza Food Logo (2).svg";
import pizzaIcon from "../../public/img/FoodIcons/Yellow Cute Cartoon Pizza Food Logo (3).svg";
import tacosIcon from "../../public/img/FoodIcons/Yellow Cute Cartoon Pizza Food Logo (5).svg";
import friesIcon from "../../public/img/FoodIcons/Yellow Cute Cartoon Pizza Food Logo (6).svg";
import drinksIcon from "../../public/img/FoodIcons/Yellow Cute Cartoon Pizza Food Logo (7).svg";
import cokeIcons from "../../public/img/FoodIcons/Yellow Cute Cartoon Pizza Food Logo (8).svg";
import logo from "../../public/img/Yellow Cute Cartoon Pizza Food Logo.svg";
import NavMenu from "../NavMenu";

const Navbar = () => {
  return (
    <nav class="bg-[#C00B27]   ">
      <div>
        <div className=" text-gray-100">
          <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
            <marquee>
              <span className="font-extrabold flex items-center text-gray-200 text-lg">
                Call This Number <MdPhone className="m-2" /> 01773312233 to
                place your order!
              </span>
            </marquee>
          </div>
        </div>
      </div>
      <div class="container  flex items-center justify-center p-6 mx-auto text-gray-200 font-bold   capitalize ">
        <div className="hidden md:block">
          <Image
            className="hover:scale-150 transition-all w-36 h-36 duration-200 ease-in-out transform"
            src={logo}
          />
        </div>
        <div className="md:flex">
          <NavMenu title="HOME" Icon={MdHome} />
          <NavMenu title="PRODUCT" Icon={MdProductionQuantityLimits} />
          <NavMenu title="MENU" Icon={MdFoodBank} />
          <NavMenu title="EVENTS" Icon={MdEvent} />
          <NavMenu title="BLOG" Icon={MdAppBlocking} />
          <NavMenu title="CONTACT" Icon={MdContactPage} />
        </div>
      </div>
      <div className="md:flex justify-center hidden ">
        <div>
          <div className="flex ">
            <Image
              className="animate-pulse"
              src={pizzaIcon}
              width={150}
              height={100}
            />
            <Image
              className="animate-pulse"
              src={burgerIcon}
              width={150}
              height={100}
            />
            <Image
              className="animate-pulse"
              src={tacosIcon}
              width={150}
              height={100}
            />
            <Image
              className="animate-pulse"
              src={friesIcon}
              width={150}
              height={100}
            />
            <Image
              className="animate-pulse"
              src={drinksIcon}
              width={150}
              height={100}
            />
            <Image
              className="animate-pulse"
              src={cokeIcons}
              width={150}
              height={100}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
