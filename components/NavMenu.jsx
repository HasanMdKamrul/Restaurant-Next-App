const NavMenu = ({ title, Icon }) => {
  return (
    <>
      <div className="flex items-center flex-col group ">
        <Icon className="group-hover:animate-bounce mb-2" />
        <p className="border-b-2 tracking-widest border-transparent opacity-0 group-hover:opacity-100 transition-colors group-hover:text-white duration-300 transform ease-in-out hover:border-lime-200 mx-1.5 sm:mx-6">
          {title}
        </p>
      </div>
    </>
  );
};

export default NavMenu;
