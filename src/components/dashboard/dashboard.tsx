"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { socialLinks } from "@/utils/socialLinks";

const Dashboard = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Coder"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <div id="home" className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center items-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold md:mb-[-10px] p-2">
          HEY THERE I&apos;M
        </p>
        <h1 className="md:text-5xl sm:text-5xl text-4xl font-bold md:py-6 ">
          PRINCE
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl sm:pt-10 text-xl font-bold py-4"></p>
          <span className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2">
            <span>A </span>
            {text}
            <span>
              <Cursor />
            </span>
          </span>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 px-2 mt-4">
          Build with purpose. Code with precision. Deploy with confidence
        </p>
        <div className="flex justify-center items-center space-x-5 md:w-[75%] my-8">
          {socialLinks.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              style={{ margin: "0 10px" }}
            >
              <item.icon size={30} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
