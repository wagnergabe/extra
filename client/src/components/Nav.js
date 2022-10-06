import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Nav = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/">
            <img
              src="wandrlust-whitegreen.png"
              alt="wandrlust logo"
              width="250"
            ></img>
          </a>
        </div>

        <div className="w-full block flex justify-end flex-grow lg:flex lg:items-right lg:w-auto">
          <div>
            <a
              href="/#"
              className="inline-block text-sm px-4 py-2 leading-none text-white hover:border-transparent hover:text-green-300 hover:bg-black mt-4 lg:mt-0"
            >
              Find a Flight
            </a>
          </div>

          <div>
            <a
              href="/form"
              className="inline-block text-sm px-4 py-2 leading-none text-white hover:border-transparent hover:text-green-300 hover:bg-black mt-4 lg:mt-0"
            >
              Create a Blog
            </a>
          </div>

          <div>
            <Link
              to="/blog"
              className="inline-block text-sm px-4 py-2 leading-none text-white hover:border-transparent hover:text-green-300 hover:bg-black mt-4 lg:mt-0"
            >
              Blogs
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
