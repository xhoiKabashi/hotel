const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex w-full  bg-white shadow-md dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-3 shadow-2 md:px-6 2xl:px-11">
        <div>
          <input type="text" />
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <li>Hey</li>
            <li>Hey</li>
            <li>Hey</li>
          </ul>
          <ul className=" flex items-center gap-3 2xsm:gap-7x ">
            <li>Name</li>
            <li>Poto</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
