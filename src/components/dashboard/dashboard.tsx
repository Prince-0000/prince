import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import TypewriterText from "./typeWriter";
import { getDashboardData } from "@/utils/api";

const allIcons = { ...FaIcons, ...SiIcons };

const renderIcon = (iconName: string) => {
  const Icon = allIcons[iconName];
  return Icon ? <Icon size={30} /> : null;
};

const Dashboard = async () => {
  const data = await getDashboardData();

  return (
    <div id="home" className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
        <p className="text-[#00df9a] font-bold md:mb-[-10px] p-2">{data.introText}</p>
        <h1 className="md:text-5xl sm:text-5xl text-4xl font-bold md:py-6">{data.mainName}</h1>

       <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl sm:pt-10 text-xl font-bold py-4"></p>
          <span className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2">
            <span>A </span>
            <TypewriterText words={data?.typewriterWords || ["Developer", "Coder"]} />
          </span>
        </div>

        <p className="md:text-2xl text-xl font-bold text-gray-500 px-2 mt-4">{data.tagline}</p>

        <div className="flex justify-center items-center space-x-5 md:w-[75%] my-8">
          {data.socialLinks.map((item:any, index:any) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00df9a] transition-colors duration-300"
            >
              {renderIcon(item.icon)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
