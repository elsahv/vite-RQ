import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="md:flex justify-center hidden border-b-2 border-lavender pb-5 ">
      <div className=" pt-5">
        <ul className="flex space-x-6 text-xl ml-5 ">
          <li className="font-bold pt-1">
            <Link to="/">The Running Quail</Link>
          </li>
          <li className="pt-1">
            <Link to="/about">About</Link>
          </li>
          <li className="pt-1">
            <Link to="/community">Community Board</Link>
          </li>
          <li className="bg-munsell text-platinum border border-black px-2 pb-1 mt-0.5 hover:opacity-90">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
