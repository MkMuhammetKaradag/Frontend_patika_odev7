
import { Link, Outlet } from "react-router-dom";
import SearchInput from "./SearchInput";
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className=" flex  flex-grow items-center w-full flex-col ">
      <div className="h-52 flex flex-col justify-center items-center   w-full">
        <div className=" ml-10">
          <Link to={"/"} className="text-3xl group">
            Books
            <span className="block h-0.5 bg-transparent group-hover:bg-current transition-all duration-500"></span>
          </Link>
        </div>
        {location.pathname === "/" && (
          <div>
            <SearchInput></SearchInput>
          </div>
        )}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Header;
