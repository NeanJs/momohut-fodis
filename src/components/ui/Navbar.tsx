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
  FaPhoneAlt,
  FaMapPin,
} from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import { BiMapPin } from "react-icons/bi";
import { ArrowRight } from "lucide-react";
import Button from "../global/Button";

function NavbarAlternate() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Menu", path: "/menu" },
    // { name: "Blog", path: "/blog" },
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
    console.log(localStorage.getItem("cart"));
  }, [localStorage]);
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
  function isRestaurantOpen(openHour: string, closeHour: string) {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert current time to minutes

    const [openH, openM] = openHour.split(":").map(Number);
    const [closeH, closeM] = closeHour.split(":").map(Number);

    const openTime = openH * 60 + openM; // Convert open time to minutes
    const closeTime = closeH * 60 + closeM; // Convert close time to minutes

    if (openTime <= closeTime) {
      return currentTime >= openTime && currentTime <= closeTime
        ? "Doors Open"
        : "We will be open at 11:00 am";
    } else {
      return currentTime >= openTime || currentTime <= closeTime
        ? "Doors Open"
        : "We will be open at 11:00 am";
    }
  }

  const openHour = "10:00";
  const closeHour = "22:00";

  isRestaurantOpen(openHour, closeHour);

  return (
    <header className="relative ">
      <div className="navigation flex flex-row items-center justify-between md:justify-start min-h-fit h-32 bg-  ">
        <div className="absolute bg-white w-80 h-full left-0 -skew-x-12 lg:flex hidden"></div>
        <div className="logo-block h-24 w-72 flex flex-col items-center justify-center relative lg:translate-x-[20px] ">
          <img src="logo.png" className="h-auto lg:w-64 md:w-56 sm:w-48 w-40" />
        </div>

        <div className="nav-blocks flex-col items-center h-full w-full lg:ml-18 flex ">
          <div className="headline-block h-1/5 py-2 w-full bg-momo_red text-white text-sm items-center hidden md:flex">
            <div className="headline flex justify-between items-center w-full lg:px-12 md:px-6">
              <div className="flex contact-primary items-center gap-4 text-sm ml-16">
                <div className="flex items-center gap-2">
                  <FaClock />
                  <span>{isRestaurantOpen("11:30", "23:00")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt />
                  <span>+1 236 456 7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapPin />
                  <span>622 W Pender St, Vancouver, BC</span>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <span>Follow Us:</span>
                <FaFacebookF className="cursor-pointer hover:text-gray-300" />
                <FaInstagram className="cursor-pointer hover:text-gray-300" />
                <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
              </div>
            </div>
          </div>
          <div className="navlinks-block w-full h-4/5 flex justify-between items-center md:bg-[#010F1C] bg-white">
            <div className="headline flex justify-end md:justify-between lg:px-12 md:px-6 items-center w-full ml-16">
              <ul className="md:flex gap-12 items-center text-sm z-10 text-white h-full hidden">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer text-white font-medium text-lg hover:text-momo_red group relative`}
                  >
                    <Link
                      className={` ${
                        item.path === activeLink
                          ? "text-momo_red text-lg"
                          : "hover:text-momo_red"
                      }`}
                      href={item.path}
                      onClick={() => setActiveLink(item.path)}
                    >
                      {item.name}
                    </Link>
                    <span
                      className={`absolute bottom-0 bg-momo_red mt-1  left-0 h-[2px] group-hover:w-full ease-linear duration-300  ${
                        item.path == activeLink ? "w-full" : "w-0"
                      }`}
                    ></span>
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
                <Link
                  href={
                    "https://momohut.brygid.online/zgrid/proc/site/sitep.jsp"
                  }
                  target="_blank"
                >
                  <Button className="flex w-full items-center">
                    Order Now
                    <ArrowRight />
                  </Button>
                </Link>
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
            <ul className=" mx-auto md:flex hidden p-4 gap-20 relative flex-row top-0 items-center justify-center">
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
