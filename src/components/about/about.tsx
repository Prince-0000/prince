/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import Profile from "@/assests/profile1.png";

const About = () => {
  return (
    <div id="about" className="w-full bg-white py-[8rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <Image
            className="max-w-[100%] h-auto object-cover"
            src={Profile}
            alt="profile image"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold mt-2">ABOUT ME</p>
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
            Welcome to my portfolio!
          </h1>

          <div className="text-gray-700 text-justify">
            <p className="py-2">
              I'm a Computer Science graduate with experience building full-stack web applications that are scalable, user-friendly, and performance-driven. I work with technologies like Vue.js, Next.js, Node.js, FastAPI, and PostgreSQL, with a strong focus on clean architecture and real-world usability.
            </p>
            <p className="py-2">
              I've worked on real-time systems, API integration, and modular UI components, and I’m comfortable using Docker, AWS, and Git to deploy and manage applications effectively.
            </p>
            <p className="py-2">
              I'm also passionate about AI and machine learning, and I'm actively exploring how to build smart, practical solutions that make a real-world impact.
            </p>
          </div>

          {/* Optional button - uncomment if needed */}
          {/* 
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button> 
          */}
        </div>
      </div>
    </div>
  );
};

export default About;
