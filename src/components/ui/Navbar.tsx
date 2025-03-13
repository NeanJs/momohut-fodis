"use client";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaShoppingCart,
  FaSearch,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";

function NavbarAlternate() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  useEffect(() => {
    window.onscroll = () => {
      window.scrollY >= 100 ? setIsFloating(true) : setIsFloating(false);
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setActiveLink(url);
    };

    window.addEventListener("popstate", () =>
      handleRouteChange(window.location.pathname)
    );

    return () => {
      window.removeEventListener("popstate", () =>
        handleRouteChange(window.location.pathname)
      );
    };
  }, [window.location.pathname]);
  return (
    <header className="relative ">
      <div className="navigation flex flex-row items-center justify-between md:justify-start min-h-fit h-32 bg-white  ">
        <div className="absolute bg-white w-80 h-full left-0 -skew-x-12 lg:flex hidden"></div>
        <div className="logo-block h-full w-72 flex flex-col items-center justify-center relative lg:translate-x-[20px] ">
          <img src="logo.png" className="h-auto lg:w-64 md:w-56 sm:w-48 w-40" />
        </div>

        <div className="nav-blocks flex-col items-center h-full w-full lg:ml-16 flex ">
          <div className="headline-block h-2/5 w-full bg-momo_red text-white text-sm items-center hidden md:flex">
            <div className="headline flex justify-between items-center w-full lg:px-12 md:px-6">
              <span className="flex items-center gap-2">
                <span className="text-lg">
                  <FaClock />
                </span>
                09:00 am - 06:00 pm
              </span>
              <div className="flex gap-4 items-center">
                <span>Follow Us:</span>
                <FaFacebookF className="cursor-pointer hover:text-gray-300" />
                <FaInstagram className="cursor-pointer hover:text-gray-300" />
                <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
              </div>
            </div>
          </div>
          <div className="navlinks-block w-full h-3/5 flex justify-between items-center md:bg-[#010F1C] bg-white">
            <div className="headline flex justify-end md:justify-between lg:px-12 md:px-6 items-center w-full">
              <ul className="md:flex gap-12 items-center text-sm z-10 text-white h-full hidden">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer text-white font-medium text-lg ${
                      item.path === activeLink
                        ? "text-momo_red"
                        : "hover:text-momo_red"
                    }`}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setActiveLink(item.path)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 lg:gap-6 text-gray-400">
                <div className="relative">
                  <FaSearch className="cursor-pointer text-lg" />
                </div>
                <div className="relative">
                  <FaShoppingCart className="cursor-pointer text-lg" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
                    0
                  </span>
                </div>
                <div className="relative">
                  <IoMenu
                    className="cursor-pointer text-lg md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 w-2/4 h-full bg-white shadow-md transform  ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 flex flex-col items-center p-6 md:hidden z-50`}
      >
        <button className="self-end mb-4" onClick={() => setMenuOpen(false)}>
          <IoClose className="text-3xl text-gray-600" />
        </button>
        <ul className="flex flex-col items-center gap-6 text-lg">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-momo_gray font-medium hover:text-momo_red"
            >
              <Link href={item.path} onClick={() => setMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isFloating && (
        <div className="floating-nav w-full h-32 flex justify-between items-center bg-white md:px-6 lg:px-12 fixed top-0 z-40 transition-transform duration-300 shadow-sm shadow-[#00000040]">
          <div className="logo-block h-full grid place-content-center">
            <img src="logo.png" className="h-auto w-64" />
          </div>
          <div className="headline flex justify-end items-center w-full bg-white relative h-full">
            <ul className=" mx-auto md:flex hidden p-4 gap-4 relative flex-row top-0 items-center justify-center">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer text-black font-medium text-lg ${
                    item.path === activeLink
                      ? "text-momo_red"
                      : "hover:text-momo_red"
                  }`}
                >
                  <Link
                    href={item.path}
                    onClick={() => setActiveLink(item.path)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 md:gap-6 text-gray-400 pr-2">
              <FaSearch className="cursor-pointer text-lg" />
              <div className="relative">
                <FaShoppingCart className="cursor-pointer text-lg" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
                  0
                </span>
              </div>
              <div className="relative">
                <IoMenu
                  className="cursor-pointer text-lg md:hidden"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavbarAlternate;
