"use client";
import { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="fixed w-full bg-white shadow-md py-4 px-6 flex justify-between items-center z-50">
    //   {/* Logo */}
    //   <Link href="/">
    //     <span className="text-2xl font-bold text-red-500 cursor-pointer">
    //       MomoHut
    //     </span>
    //   </Link>

    //   {/* Navigation Links */}
    //   <ul className="hidden md:flex space-x-6">
    //     <li>
    //       <Link href="/" className="hover:text-red-500">
    //         Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/about" className="hover:text-red-500">
    //         About
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/menu" className="hover:text-red-500">
    //         Menu
    //       </Link>
    //     </li>
    //     {/* <li><Link href="/blog" className="hover:text-red-500">Blog</Link></li> */}
    //     <li>
    //       <Link href="/contact" className="hover:text-red-500">
    //         Contact
    //       </Link>
    //     </li>
    //   </ul>

    //   {/* Icons */}
    //   <div className="flex items-center space-x-4">
    //     <FiSearch className="text-xl cursor-pointer hover:text-red-500" />
    //     <FiShoppingCart className="text-xl cursor-pointer hover:text-red-500" />
    //   </div>

    //   {/* Mobile Menu */}
    //   <div className="md:hidden">
    //     <button
    //       onClick={() => setIsOpen(!isOpen)}
    //       className="text-xl focus:outline-none"
    //     >
    //       ☰
    //     </button>
    //     {isOpen && (
    //       <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4">
    //         <li>
    //           <Link href="/" className="hover:text-red-500">
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/about" className="hover:text-red-500">
    //             About
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/menu" className="hover:text-red-500">
    //             Menu
    //           </Link>
    //         </li>
    //         {/* <li><Link href="/blog" className="hover:text-red-500">Blog</Link></li> */}
    //         <li>
    //           <Link href="/contact" className="hover:text-red-500">
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //     )}
    //   </div>
    // </nav>
    <NavbarAlternate />
  );
};

export default Navbar;

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaShoppingCart,
  FaSearch,
  FaTimes,
  FaClock,
} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function NavbarAlternate() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-red-600 text-white text-sm py-2 flex justify-between px-6 items-center">
        <span className="flex items-center gap-2">
          <span className="text-lg">
            <FaClock />
          </span>{" "}
          09:00 am - 06:00 pm
        </span>
        <div className="flex gap-4 items-center">
          <span>Follow Us:</span>
          <FaFacebookF className="cursor-pointer hover:text-gray-300" />
          <FaTimes className="cursor-pointer hover:text-gray-300" />
          <FaInstagram className="cursor-pointer hover:text-gray-300" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-black text-white py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img src="/logo.png" alt="Fodis Logo" width={120} height={50} /> */}
          <span>Momohut</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer font-bold ${
                item.name === "Home"
                  ? "text-orange-500"
                  : "hover:text-orange-500"
              }`}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <FaSearch className="cursor-pointer text-lg" />
          <div className="relative">
            <FaShoppingCart className="cursor-pointer text-lg" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
              0
            </span>
          </div>
          <IoMenu className="cursor-pointer text-lg md:hidden" />
        </div>
      </nav>
    </header>
  );
}
