import Image from "next/image";
import { MdFacebook } from "react-icons/md";
import logo from "../../public/img/Yellow Cute Cartoon Pizza Food Logo.png";

const navItems = (
  <>
    <a
      href="#"
      class="mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500  dark:hover:text-blue-400"
      aria-label="Reddit"
    >
      {" "}
      Home{" "}
    </a>
    <a
      href="#"
      class="mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500  dark:hover:text-blue-400"
      aria-label="Reddit"
    >
      {" "}
      Contact{" "}
    </a>
    <a
      href="#"
      class="mx-4 text-gray-600 transition-colors duration-300 hover:text-blue-500  dark:hover:text-blue-400"
      aria-label="Reddit"
    >
      {" "}
      About Us{" "}
    </a>
    <a
      href="#"
      class="mx-4 text-gray-600  transition-colors duration-300 hover:text-blue-500  dark:hover:text-blue-400"
      aria-label="Reddit"
    >
      {" "}
      Products{" "}
    </a>
  </>
);
const Footer = () => {
  return (
    <footer class="bg-transparent">
      <div class="container px-6 py-8 mx-auto">
        <div class="text-center">
          <a href="#" class="flex justify-center hover:animate-pulse ">
            <Image className="w-24 h-24 " src={logo} />
          </a>

          <div class="flex flex-wrap justify-center mt-5 -mx-4">{navItems}</div>
        </div>

        <hr class="my-6  md:my-10 border-gray-700" />

        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
          <p class="text-gray-900">© Copyright 2021. All Rights Reserved.</p>

          <div class="flex -mx-2">
            <MdFacebook />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
