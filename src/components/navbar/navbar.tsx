"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GrDocumentDownload } from "react-icons/gr";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const fileUrl = "https://drive.google.com/file/d/1pylPolQr6ShQ34MTteaLBzYkc76QgaY3/view?usp=sharing"
  const handleDownload = () => {
    window.open(fileUrl, "_blank");
    // toast.info("You don't have access !");
  };
  return (
    <div className="text-white flex justify-between sticky top-0 z-50 bg-black items-center h-24 max-w-full mx-auto px-4">
      <h1>
        <a
          href="/"
          className="w-full md:text-3xl text-2xl font-bold text-[#00df9a]"
        >
          PRINCE
        </a>
      </h1>
      <ul className="hidden md:flex">
      {pathname==="/" && (
        <>
        <li className="p-4">
          <a href="#home">Home</a>
        </li>
        <li className="p-4">
          <a href="#about">About</a>
        </li>

        <li className="p-4">
          <a href="#experience">Experience</a>
        </li>
        

        <li className="p-4">
          <a href="#project">Projects</a>
        </li>

        <li className="p-4">
          <a href="#contact">Contact</a>
        </li>
        

        <button
          onClick={handleDownload}
          className="bg-white my-[5px] mx-3 text-black w-[105px] rounded-md font-medium"
        >
          <span className="flex flex-row pl-3 ">
            <GrDocumentDownload size={20} />
          </span>
          <span className="flex absolute top-9 pl-9">Resume</span>
        </button>
        </>
        )}
      </ul>
      <div onClick={handleNav} className="cursor-pointer md:hidden block">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full md:text-3xl text-2xl font-bold text-[#00df9a] m-4">
          PRINCE
        </h1>
        <ul className="uppercase p-4">
          <li onClick={handleNav} className="p-4 border-b border-gray-600">
            <a href="#home">Home</a>
          </li>
          <li onClick={handleNav} className="p-4 border-b border-gray-600">
            <a href="#about">About</a>
          </li>
          <li onClick={handleNav} className="p-4 border-b border-gray-600">
            <a href="#experience">Experience</a>
          </li>
          <li onClick={handleNav} className="p-4 border-b border-gray-600">
            <a href="#project">Projects</a>
          </li>
          <li onClick={handleNav} className="p-4 border-b border-gray-600">
            <a href="#contact">Contact</a>
          </li>
          <button
            onClick={handleDownload}
            className="bg-white my-3 mx-3 text-black w-[100px] h-10 rounded-md font-medium"
          >
            <span className="flex relative top-3 flex-row pl-2 ">
              <GrDocumentDownload size={20} />
            </span>
            <span className="flex relative bottom-[11px] flex-row pl-8 mb-20">
              Resume
            </span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
