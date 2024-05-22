import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black border-b border-zinc-700 text-white flex justify-between p-5 lg:px-10">
      <Link className="text-2xl font-bold text-red-500" to="/">
        NETFLIX
      </Link>

      <Link className="flex items-center gap-3" to="/favorites">
        <FaHeart />
        Favorites
      </Link>
    </header>
  );
};

export default Header;
