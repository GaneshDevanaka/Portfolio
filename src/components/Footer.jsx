import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assests/resume.pdf";

const Footer = () => {
  return (
    <div className="flex  bg-[#0a192f]   lg:hidden ">
      <ul className="flex w-full">
        <li className=" flex-1 h-[40px] flex  items-center  bg-blue-600 ">
          <a
            className="flex  items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/ganesh-devanaka-053399229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="flex-1  h-[40px] flex  items-center   bg-[#333333] ">
          <a
            className="flex  items-center w-full text-gray-300"
            href="https://github.com/GaneshDevanaka"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className=" flex-1 h-[40px] flex  items-center  bg-[#565f69] ">
          <a
            className="flex  items-center w-full text-gray-300"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
