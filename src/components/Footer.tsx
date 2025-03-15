"use client"
import React from "react";
import { BiArrowToTop, BiUpArrow } from "react-icons/bi";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 relative">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.instagram.com"
            className="text-white hover:text-momo_red"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.facebook.com"
            className="text-white hover:text-momo_red"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://www.twitter.com"
            className="text-white hover:text-momo_red"
          >
            <FaTwitter className="text-2xl" />
          </a>
        </div>
        <p className="text-gray-400">
          &copy; 2025 MomoHut. All rights reserved.
        </p>
      </div>
      <span
        className="bg-momo_red text-white text-2xl p-2 absolute right-10 top-10"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <BiArrowToTop />
      </span>
    </footer>
  );
};

export default Footer;
