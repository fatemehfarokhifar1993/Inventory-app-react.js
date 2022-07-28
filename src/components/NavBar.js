const NavBar = () => {
  return (
    <div
      className="h-14 flex items-center justify-center gap-x-
    4 bg-green-700 mb-6"
    >
      <h1 className="md:text-xl text-sm font-bold text-green-100 mr-5">
        Inventory App
      </h1>
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 border-2 border-green-100 font-bold text-green-100">
        1
      </span>
    </div>
  );
};

export default NavBar;
