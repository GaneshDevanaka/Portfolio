import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = function () {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#d1e4dc]  font-['Poppins'] ">
          HELLO!
        </h1>
        <h1 className="text-4xl sm:text-7xl font-extrabold text-[#c5b471]  font-['Poppins'] ">
          I'm GANESH DEVANAKA
        </h1>
        <h2 className="text-3xl sm:text-6xl font-extrabold text-[#6f80e1] font-['Poppins']">
          Full Stack Developer
        </h2>
        <p className="text-[#ccd6f6] py-4 max-w-[700px]">
          I am passionate about creating exceptional digital experiences. With 4
          years of expertise, I specialize in building responsive full-stack web
          applications. My skills span from frontend technologies like ReactJS
          to backend development with Node.js and Express.js, along with
          proficiency in AWS and Docker for scalable deployments.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
