import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import logo from "../public/logo.png";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer text-teal-700" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-center text-4xl">
            <span className="underline decoration-4 decoration-teal-700">
              News
            </span>{" "}
            For You
            <span>{/*logo*/}</span>
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/*Dark mode*/}
          <a href="https://leocheffi.com">
            <button className="hidden md:inline bg-teal-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-teal-700">
              My Portfolio
            </button>
          </a>
        </div>
      </div>

      {/*nav links*/}
      <NavLinks />
      {/*search bar*/}
      <SearchBar />
    </header>
  );
};

export default Header;
