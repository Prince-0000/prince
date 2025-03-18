"use client";
import Card from "./card";
import Dukaan from "@/assests/grocery.png";
// import Counterfeit from "@/assests/counterfiet.png";
import Movie from "@/assests/movie.png";
import Voice from "@/assests/voice.png";
import Health from "@/assests/health.png";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";

const Projects = () => {
  const projects = [
    {
      image: Voice,
      title: "Virtual Girlfriend",
      tech:["React Fiber", "Three.js", "OpenAI", "Google Cloud", "Python", "FastAPI", "Tailwind"],
      liveUrl: "https://virtual-girlfriend-mauve.vercel.app",
      codeUrl: "https://github.com/Prince-0000/movies_frontend",
      description:"Developed an AI voice assistant similar to google assistant but with a unique twist, we introduced a 3D model which acts like a virtual girlfriend. Users can talk to model and have fun"
    },
    {
      image: Movie,
      title: "Movie Recommendation",
      tech:["React", "API", "Tailwind","FastAPI","AWS","Docker","TF-IDF", "NLP"],
      liveUrl: "https://filmfusion-neon.vercel.app",
      codeUrl: "https://github.com/Prince-0000/movies_frontend",
      description:"I developed a movie recommendation app that suggests movies based on user searches, helping users discover similar films they might enjoy. This technology is commonly used on platforms like Netflix and Amazon Prime to enhance user experience."
    },
    {
      image: Health,
      title: "Health Predictor",
      tech:["React", "API", "Tailwind","FastAPI","AWS","Docker", "Logistics Regression"],
      liveUrl: "https://predoctor.vercel.app",
      codeUrl: "https://github.com/Prince-0000/health_frontend",
      description:"I developed a health prediction web app that takes data from user and analyzes user input to predict the likelihood of certain diseases. Currently, the app can assess the risk of heart disease and diabetes"
    },
    {
      image: Dukaan,
      title: "Grocery App",
      tech:["React Fiber", "Three.js", "Python", "FastAPI"],
      liveUrl: "https://dukaann.vercel.app",
      codeUrl: "https://github.com/Prince-0000/grocery_web_app",
      description:"This web application allows users to purchase groceries, similar to JioMart. Users can log in or sign up using Google authentication, browse products by category, sort the products for easier navigation, after adding product to cart, user can complete their purchases through Stripe."
    },
    // {
    //   image: Counterfeit,
    //   title: "Counterfeit",
    //   tech:["React", "API", "Tailwind","ETher.js",'Block-chain'],
    //   liveUrl: "",
    //   codeUrl: "https://github.com/Prince-0000/Counterfeit",
    //   description:"A web app built on Ethereum Blockchain using Solidity and React.js Developed a web app that uses blockchain technology to verify the product is authentic or not. Companies can register their product on blockchain and, Made it easy for consumers to verify the authenticity of products."
    // },
  ];

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    if (slider !== null) slider.scrollLeft -= slider.clientWidth;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    if (slider !== null) slider.scrollLeft += slider.clientWidth;
  };

  return (
    <div id="project" className="relative bg-white flex flex-col items-center">
      <h1 className="md:text-4xl mt-10 z-10 bg-white sm:text-3xl text-xl text-black font-bold mx-auto">
        PROJECTS
      </h1>

      <div
        id="slider"
        className="mt-[-3rem] w-full bg-white py-[7rem] px-4 overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
      >
        <div className="absolute z-50 top-1/2 left-5 transform -translate-y-1/2 cursor-pointer bg-white opacity-50 hover:opacity-100">
          <BsFillArrowLeftSquareFill onClick={slideLeft} size={30} />
        </div>
        <div className="px-[2rem] w-full mx-auto grid grid-flow-col auto-cols-max gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              tech={project.tech}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
              description={project.description}
            />
          ))}
        </div>
        <div className="z-50 absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer bg-white opacity-50 hover:opacity-100">
          <BsFillArrowRightSquareFill onClick={slideRight} size={30} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
