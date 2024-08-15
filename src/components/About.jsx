import React from "react";

export const About = function () {
  return (
    <div
      name="about"
      className="w-full h-auto sm:h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              "Hi, I'm Ganesh Devanaka. Welcome, and thank you for visiting my
              site. Please feel free to take a look around."
            </p>
          </div>
          <div>
            <p>
              As a Full Stack Developer with a deep commitment to excellence, I
              specialize in building innovative software solutions that drive
              efficiency and enhance user experiences. My journey has taken me
              from developing tailored applications for individuals and small
              businesses to engineering enterprise-level systems that power
              large corporations. With expertise in ReactJS, Node.js,
              Express.js, and cloud technologies like AWS and Docker, I have a
              proven track record of delivering scalable, secure, and responsive
              applications. Whether you're looking to create a dynamic user
              interface, optimize backend performance, or deploy a solution that
              can handle complex business needs, I'm here to make it happen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
