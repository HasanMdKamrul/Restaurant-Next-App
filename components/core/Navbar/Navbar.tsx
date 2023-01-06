import Image from "next/image";
import {
  MdAppBlocking,
  MdContactPage,
  MdEvent,
  MdFoodBank,
  MdHome,
  MdProductionQuantityLimits,
} from "react-icons/md";
import pizzaIcon from "../../../public/img/FoodIcons/Yellow Cute Cartoon Pizza Food Logo (1).svg";
import burgerIcon from "../../../public/img/FoodIcons/Yellow Cute Cartoon Pizza Food Logo (2).svg";
import tacosIcon from "../../../public/img/FoodIcons/Yellow Cute Cartoon Pizza Food Logo (5).svg";
import friesIcon from "../../../public/img/FoodIcons/Yellow Cute Cartoon Pizza Food Logo (6).svg";
import drinksIcon from "../../../public/img/FoodIcons/Yellow Cute Cartoon Pizza Food Logo (7).svg";
import cokeIcons from "../../../public/img/FoodIcons/Yellow Cute Cartoon Pizza Food Logo (8).svg";
import logo from "../../../public/img/Yellow Cute Cartoon Pizza Food Logo.png";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div className=" text-slate-900">
          {/* <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
            <marquee>
              <span className="font-extrabold flex items-center text-slate-900 text-lg">
                Call This Number <MdPhone className="m-2" /> 01773312233 to
                place your order!
              </span>
            </marquee>
          </div> */}
        </div>
      </div>
      <div className="flex md:hidden justify-center">
        <Image
          className="hover:scale-150 md:hidden  transition-all w-36 h-36 duration-200 ease-in-out transform"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="container  flex items-center justify-center p-6 mx-auto text-slate-900 font-bold   capitalize ">
        <div className="hidden md:block">
          <Image
            className="hover:scale-150 transition-all w-36 h-36 duration-200 ease-in-out transform"
            src={logo}
            alt="logo"
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
              alt="pizza"
              className="animate-pulse"
              src={pizzaIcon}
              width={150}
              height={100}
            />
            <Image
              alt="burger"
              className="animate-pulse"
              src={burgerIcon}
              width={150}
              height={100}
            />
            <Image
              alt="tacos"
              className="animate-pulse"
              src={tacosIcon}
              width={150}
              height={100}
            />
            <Image
              alt="fries"
              className="animate-pulse"
              src={friesIcon}
              width={150}
              height={100}
            />
            <Image
              alt="drinks"
              className="animate-pulse"
              src={drinksIcon}
              width={150}
              height={100}
            />
            <Image
              alt="coke"
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
