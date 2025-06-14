"use client";
import React from "react";

const Experience = () => {
  const expInfo = [
    {
      year: "May 2024 - Sep 2024",
      role: "Full Stack Developer",
      title: "Bidfox.ai",
      desc: "Developing an e-auction platform from scratch where companies can create auctions with suppliers and stakeholders. The platform has different views for suppliers, stakeholders, and admins. Suppliers can place bids, and stakeholders can view the auction. The supplier with the highest bid wins the auction. ",
      skills: ["Vue.js", "Socket.io", "Typescript", "Vuetify", "API"],
    },
    {
      year: "May 2023 - October 2023",
      role: "Frontend Developer",
      title: "Seclookup",
      desc: "Developed a malicious domain scanner that analyzes domains to identify potential threats. It provides a malicious score, DNS information, and IPv4 records. I also integrated an authentication system to ensure secure access. This tool helps users avoid dangerous websites.",
      skills: ["React", "API", "Tailwind"],
    },
  ];

  return (
    <div id="experience" className="w-full py-16 text-white px-4">
      <div className="w-full mx-auto flex justify-center items-center mt-[-30px]">
        <h1 className="md:text-4xl sm:text-3xl text-xl text-[#00df9a] font-bold mx-auto">
          Experience
        </h1>
      </div>
      <div className="grid auto-rows-auto gap-10 justify-center items-center mt-10">
        {expInfo.map((exp, index) => (
          <React.Fragment key={index}>
            <div className="grid md:grid-cols-2">
              <div className="sm:pb-0 pb-1 text-sm font-medium text-gray-300 md:text-end pr-10">
                {exp.year}
              </div>
              <div className="md:w-4/6">
                <div className="font-bold">{exp.title}</div>
                <div className="text-gray-400">{exp.role}</div>
                <div className="pt-2 text-gray-400">{exp.desc}</div>

                <div className="mt-3">
                  {exp.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-sm mr-2 md:mt-0 mt-2 border-2 border-[#38705e] text-gray-200 px-2 py-1 inline-block rounded-full"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Experience;
